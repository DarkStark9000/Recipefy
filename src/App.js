import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';
import Category from './components/Category';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>

  );
}

export default App;
