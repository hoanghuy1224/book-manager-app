import React, { useState, useEffect } from 'react';
import { fetchAuthors, createBook, updateBook } from '../../api';

const BookForm = ({ selectedBook, onSuccess }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [isbn, setIsbn] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAuthors().then((response) => setAuthors(response.data));

    if (selectedBook) {
      setTitle(selectedBook.title);
      setPrice(selectedBook.price);
      setIsbn(selectedBook.isbn);
      setAuthorId(selectedBook.author.id);
    } else {
      setTitle('');
      setPrice('');
      setIsbn('');
      setAuthorId('');
    }
  }, [selectedBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, price, isbn, author_id: authorId };

    if (selectedBook) {
      updateBook(selectedBook.id, book).then(onSuccess);
    } else {
      createBook(book).then(onSuccess);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedBook ? 'Edit Book' : 'Add Book'}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
        required
      />
      <select
        value={authorId}
        onChange={(e) => setAuthorId(e.target.value)}
        required
      >
        <option value="">Select Author</option>
        {authors.map((author) => (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        ))}
      </select>
      <button type="submit">{selectedBook ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default BookForm;
