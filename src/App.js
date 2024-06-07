import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import DeleteBook from './components/DeleteBook';
import SearchBook from './components/SearchBook';
import ViewBooks from './components/ViewBooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddBook/>}/>
      <Route path='/search' element={<SearchBook/>}/>
      <Route path='/delete' element={<DeleteBook/>}/>
      <Route path='/view' element={<ViewBooks/>}/>
      </Routes></
      BrowserRouter>
  );
}

export default App;
