import { QuizForm } from './QuizForm/QuizForm';
import { QuizList } from './QuizList/QuizList';
import { SearchBar } from './SearchBar/SearchBar';
import initialQuizItems from '../quiz-items';
import { GlobalStyle } from 'GlobalStyle';
import { Section } from './Section.styled';
import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    quizItems: initialQuizItems,
    filters: {
      topic: '',
      level: 'all',
    },
  };

  addQuiz = newQuiz => {
    this.setState(prevState => ({
      quizItems: [...prevState.quizItems, { id: nanoid(), ...newQuiz }],
    }));
  };

  deleteQuiz = quizId => {
    this.setState(prevState => ({
      quizItems: prevState.quizItems.filter(quiz => quiz.id !== quizId),
    }));
  };

  changeLevel = newLevel => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        level: newLevel,
      },
    }));
  };

  changeTopic = newTopic => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        topic: newTopic,
      },
    }));
  };

  getVisibleQuizItems = () => {
    const { quizItems, filters } = this.state;
    return quizItems.filter(quiz => {
      if (filters.level === 'all') {
        return quiz.topic.toLowerCase().includes(filters.topic.toLowerCase());
      }
      return (
        quiz.topic.toLowerCase().includes(filters.topic.toLowerCase()) &&
        quiz.level === filters.level
      );
    });
  };

  render() {
    const { filters } = this.state;
    const visibleItems = this.getVisibleQuizItems();
    return (
      <Section>
        <QuizForm onAdd={this.addQuiz} />
        <SearchBar
          level={filters.level}
          topic={filters.topic}
          onChangeLevel={this.changeLevel}
          onChangeTopic={this.changeTopic}
        />
        <QuizList items={visibleItems} onDelete={this.deleteQuiz} />
        <GlobalStyle />
      </Section>
    );
  }
}
