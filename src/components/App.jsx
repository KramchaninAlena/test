import { QuizForm } from './QuizForm/QuizForm';
import { QuizList } from './QuizList/QuizList';
import { SearchBar } from './SearchBar/SearchBar';
import { GlobalStyle } from 'GlobalStyle';
import { Section } from './Section.styled';
import { useEffect, useState } from 'react';
import { createQuiz, deleteQuizById, fetchQuizzes } from './api';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from './Loader/Loader';

const getInitialFilters = () => {
  const saveFilters = localStorage.getItem('quiz-filter');
  if (saveFilters !== null) {
    return JSON.parse(saveFilters);
  }
  return { topic: '', level: 'all' };
};

export const App = () => {
  const [quizItems, setQuizItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState(getInitialFilters());

  useEffect(() => {
    async function getQizzes() {
      try {
        setLoading(true);
        setError(false);
        const quizzes = await fetchQuizzes();
        setQuizItems(quizzes);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getQizzes();
  }, []);

  useEffect(() => {
    localStorage.setItem('quiz-filter', JSON.stringify(filters));
  }, [filters]);

  const addQuiz = async newQuiz => {
    try {
      setLoading(true);
      setError(false);
      const addQuiz = await createQuiz(newQuiz);
      setQuizItems(prevItems => [...prevItems, addQuiz]);

      toast.success('Successfully created!');
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const deleteQuiz = async quizId => {
    try {
      setLoading(true);
      setError(false);
      const deleteQuiz = await deleteQuizById(quizId);
      setQuizItems(prevItems =>
        prevItems.filter(quiz => quiz.id !== deleteQuiz.id)
      );
      toast.success('Successfully deleted!');
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const visibleItems = quizItems.filter(quiz => {
    if (filters.level === 'all') {
      return quiz.topic.toLowerCase().includes(filters.topic.toLowerCase());
    }
    return (
      quiz.topic.toLowerCase().includes(filters.topic.toLowerCase()) &&
      quiz.level === filters.level
    );
  });

  const changeFilter = (value, key) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      topic: '',
      level: 'all',
    });
  };

  return (
    <Section>
      <QuizForm onAdd={addQuiz} />
      <SearchBar
        level={filters.level}
        topic={filters.topic}
        onChange={changeFilter}
        onReset={resetFilters}
      />

      {loading && <Loader />}
      {error && !loading && <h1>OOPS! There was an Error</h1>}
      {visibleItems.length > 0 && (
        <QuizList items={visibleItems} onDelete={deleteQuiz} />
      )}

      <GlobalStyle />
      <Toaster position="top-right" />
    </Section>
  );
};
