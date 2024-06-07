import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import DeleteBook from './components/DeleteBook';
import SearchBook from './components/SearchBook';
import ViewBooks from './components/ViewBooks';

function App() {
  return (
    <div>
      <AddBook/>
      <SearchBook/>
      <DeleteBook/>
      <ViewBooks/>

    </div>
  );
}

export default App;
