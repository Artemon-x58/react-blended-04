import { Container, Header, SearchForm, Section, Text } from 'components';
import { TodoList } from 'components/TodoList';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/selector';

export const App = () => {
  const todos = useSelector(selectTodos);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          <TodoList />
          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
        </Container>
      </Section>
    </>
  );
};
