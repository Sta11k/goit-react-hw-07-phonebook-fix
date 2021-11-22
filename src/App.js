import './App.css';
import Form from './components/Forms/Form';
import TodoList from './components/Todolist/Todolist';
import Filter from './components/Filter/Filter';
import {
  useFetchContactQuery,
  // useAddContactsMutation,
  // useDeleteContactsMutation,
} from '../src/redux/app/operation';
export default function App() {
  const { data: contactApi } = useFetchContactQuery();
  return (
    <div className="App">
      <Form contact={contactApi} />
      <Filter contact={contactApi} />
      {/* {isFetching} */} {contactApi && <TodoList contact={contactApi} />}
    </div>
  );
}
