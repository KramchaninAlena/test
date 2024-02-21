import { Formik, Field} from 'formik';
import { Button, Error, Label, StyleForm } from './QuizForm.styled';
import * as Yup from 'yup';

const QuizSchema = Yup.object().shape({
  topic: Yup.string().min(0, 'Too Short!').required('Required'),
  time: Yup.number()
    .min(5, 'At least 5 mins')
    .positive('Must be positive')
    .required('Required'),
  questions: Yup.number()
    .min(5, 'At least 3 questions')
    .positive('Must be positive')
    .required('Required'),
  level: Yup.string()
    .oneOf(['beginner', 'intermediate', 'advanced'])
    .required('Required'),
});

export const QuizForm = ({onAdd}) => {
  return (
    <Formik
      initialValues={{
        topic: '',
        time: 0,
        questions: 0,
        level: 'intermediate',
      }}
      validationSchema={QuizSchema}
      onSubmit={(values, actions) => {
        onAdd(values)
        actions.resetForm();
      }}
    >
      <StyleForm>
        <Label htmlFor="topic">
          Topic
          <Field name="topic" type="text" placeholder="Quiz topic..." />
          <Error name="topic" component="div"/>
        </Label>

        <Label htmlFor="time">
          Time
          <Field name="time" type="number" />
          <Error name="time" component="div"/>
        </Label>
        <Label htmlFor="questions">
          Questions
          <Field name="questions" type="number" />
          <Error name="questions" component="div"/>
        </Label>
        <Label htmlFor="level">
          Level
          <Field as="select" name="level">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </Field>
          <Error name="level" component="div"/>
        </Label>

        <Button type="submit">Submit</Button>
      </StyleForm>
    </Formik>
  );
};
