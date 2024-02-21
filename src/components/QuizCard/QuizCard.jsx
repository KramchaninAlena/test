import { MdDeleteForever } from "react-icons/md";
import { Button, CardWrapper, ContentWrapper, Title } from "./QuizCard.styled";
export const QuizCard = ({quiz: {topic, level, time, questions, id}, onDelete}) => {
  return (
    <CardWrapper level={level}>
    <Title>{topic}</Title>
                    <ContentWrapper>
                        <p><b>Level: </b>{level}</p>
                        <p><b>Time: </b>{time}</p>
                        <p><b>Questions: </b>{questions}</p>
                    </ContentWrapper>
                    <Button onClick={()=> onDelete(id)}><MdDeleteForever size={20}/></Button>
    </CardWrapper>
  )
}
