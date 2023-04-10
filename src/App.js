import { FaUserAlt } from 'react-icons/fa';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Home from './components/Home';

function App() {
  return (
    <div className="App-container">
      <nav className="App-navbar">
        <Link to="/" className="App-headline">
          The Mindhub Bookstore
        </Link>
        <ul className="App-links">
          <li className="App-link-item">
            <Link to="/">Home</Link>
          </li>
          <li className="App-link-item">
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
        <FaUserAlt className="App-user" />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
