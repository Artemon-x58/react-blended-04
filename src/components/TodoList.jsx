import { useSelector } from 'react-redux';
import { Grid, GridItem } from './Grid/Grid.styled';
import { Todo } from './Todo/Todo';
import { selectFilteredTodos } from 'redux/selector';

export const TodoList = () => {
  const todos = useSelector(selectFilteredTodos);
  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <Todo id={todo.id} text={todo.text} counter={index + 1} />
        </GridItem>
      ))}
    </Grid>
  );
};
