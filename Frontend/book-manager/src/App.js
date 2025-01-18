import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AuthorList from './components/Author/AuthorList';
import AuthorForm from './components/Author/AuthorForm';
import BookList from './components/Book/BookList';
import BookForm from './components/Book/BookForm';
import './App.css';

const App = () => {
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <Router>
      <div>
        {/* Menu điều hướng */}
        <nav>
          <ul>
            <li>
              <Link to="/authors">Authors</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* Trang Authors */}
          <Route
            path="/authors"
            element={
              <>
                <AuthorForm
                  selectedAuthor={selectedAuthor}
                  onSuccess={() => setSelectedAuthor(null)}
                />
                <AuthorList onEdit={(author) => setSelectedAuthor(author)} />
              </>
            }
          />
          {/* Trang Books */}
          <Route
            path="/books"
            element={
              <>
                <BookForm
                  selectedBook={selectedBook}
                  onSuccess={() => setSelectedBook(null)}
                />
                <BookList onEdit={(book) => setSelectedBook(book)} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
