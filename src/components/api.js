import axios from 'axios';

axios.defaults.baseURL = 'https://65bb782d52189914b5bc3e4b.mockapi.io/api/';

export const fetchQuizzes = async () => {
  const responce = await axios.get('/quizz');
  return responce.data;
};

export const deleteQuizById = async quizId => {
  const responce = await axios.delete(`/quizz/${quizId}`);
  return responce.data;
};

export const createQuiz = async newQuiz => {
  const responce = await axios.post(`/quizz`, newQuiz);
  return responce.data;
};
