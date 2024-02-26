import { QuizForm } from './QuizForm/QuizForm';
import { QuizList } from './QuizList/QuizList';
import { SearchBar } from './SearchBar/SearchBar';
import { GlobalStyle } from 'GlobalStyle';
import { Section } from './Section.styled';
import { Component } from 'react';
import { createQuiz, deleteQuizById, fetchQuizzes } from './api';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from './Loader/Loader';


export class App extends Component {
  
  // state = {
  //   quizItems: [],
  //   loading: false,
  //   error: false,
  //   filters: {
  //     topic: '',
  //     level: 'all',
  //   },
  // };

  // async componentDidMount() {
  //   const saveFilters = localStorage.getItem('quiz-filter');
  //   if (saveFilters !== null) {
  //     this.setState({
  //       filters: JSON.parse(saveFilters),
  //     });
  //   }
  //   try {
  //     this.setState({ loading: true, error: false });
  //     const quizzes = await fetchQuizzes();
  //     this.setState({ quizItems: quizzes });
  //   } catch (error) {
  //     this.setState({ error: true });
  //   } finally {
  //     this.setState({ loading: false });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.filters !== this.state.filters) {
  //     localStorage.setItem('quiz-filter', JSON.stringify(this.state.filters));
  //   }
  // }

  // addQuiz = async newQuiz => {
  //   try {
  //           this.setState({ loading: true, error: false });
  //     const addQuiz = await createQuiz(newQuiz);
  //     this.setState(prevState => ({
  //       quizItems: [...prevState.quizItems, addQuiz],
  //     }));
  //     toast.success('Successfully created!');
  //   } catch (error) {
  //     this.setState({ error: true });
  //   } finally {
  //     this.setState({ loading: false });
  //   }
  // };

  // deleteQuiz = async quizId => {
  //   try {
  //     this.setState({ loading: true, error: false });
  //     const deleteQuiz = await deleteQuizById(quizId);
  //     console.log(deleteQuiz);
  //     this.setState(prevState => ({
  //       quizItems: prevState.quizItems.filter(
  //         quiz => quiz.id !== deleteQuiz.id
  //       ),
  //     }));
  //     toast.success('Successfully deleted!');
  //   } catch (error) {
  //     this.setState({ error: true });
  //   } finally {
  //     this.setState({ loading: false });
  //   }
  // };

  // changeLevel = newLevel => {
  //   this.setState(prevState => ({
  //     filters: {
  //       ...prevState.filters,
  //       level: newLevel,
  //     },
  //   }));
  // };

  // changeTopic = newTopic => {
  //   this.setState(prevState => ({
  //     filters: {
  //       ...prevState.filters,
  //       topic: newTopic,
  //     },
  //   }));
  // };

  // getVisibleQuizItems = () => {
  //   const { quizItems, filters } = this.state;
  //   return quizItems.filter(quiz => {
  //     if (filters.level === 'all') {
  //       return quiz.topic.toLowerCase().includes(filters.topic.toLowerCase());
  //     }
  //     return (
  //       quiz.topic.toLowerCase().includes(filters.topic.toLowerCase()) &&
  //       quiz.level === filters.level
  //     );
  //   });
  // };

  // resetFilters = () => {
  //   this.setState({
  //     filters: {
  //       topic: '',
  //       level: 'all',
  //     },
  //   });
  // };

  // render() {
  //   const { filters, loading, error } = this.state;
  //   const visibleItems = this.getVisibleQuizItems();
  //   return (
  //     <Section>
  //       <QuizForm onAdd={this.addQuiz} />
  //       <SearchBar
  //         level={filters.level}
  //         topic={filters.topic}
  //         onChangeLevel={this.changeLevel}
  //         onChangeTopic={this.changeTopic}
  //         onReset={this.resetFilters}
  //       />
        
  //       {loading && <Loader/>}
  //       {error && !loading && <h1>OOPS! There was an Error</h1>}
  //       {visibleItems.length > 0 && (
  //         <QuizList items={visibleItems} onDelete={this.deleteQuiz} />
  //       )}

  //       <GlobalStyle />
  //       <Toaster position="top-right" />
  //     </Section>
  //   );
  // }
}
