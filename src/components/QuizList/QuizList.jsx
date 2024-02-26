import { QuizCard } from 'components/QuizCard/QuizCard';
import { List, QuizItem } from './QuizList.styled';

export const QuizList = ({ items, onDelete }) => {
  return (
    <div>
      <List>
        {items.map(item => (
          <QuizItem key={item.id}>
            <QuizCard quiz={item} onDelete={onDelete} />
          </QuizItem>
        ))}
      </List>
    </div>
  );
};
