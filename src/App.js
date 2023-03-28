import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App-container">
      <div className="App">
        <nav>
          <Link to="/">The Great Bookstore</Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
