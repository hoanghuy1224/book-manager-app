import React, { useState, useEffect } from 'react';
import { fetchAuthors, deleteAuthor } from '../../api';

const AuthorList = ({ onEdit }) => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAuthors().then((response) => setAuthors(response.data));
  }, []);

  const handleDelete = (id) => {
    deleteAuthor(id).then(() => {
      setAuthors(authors.filter((author) => author.id !== id));
    });
  };

  return (
    <div>
      <h2>Authors</h2>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            {author.name} ({author.nationality})
            <button onClick={() => onEdit(author)}>Edit</button>
            <button onClick={() => handleDelete(author.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
