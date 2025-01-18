import React, { useState, useEffect } from 'react';
import { createAuthor, updateAuthor } from '../../api';

const AuthorForm = ({ selectedAuthor, onSuccess }) => {
  const [name, setName] = useState('');
  const [nationality, setNationality] = useState('');

  useEffect(() => {
    if (selectedAuthor) {
      setName(selectedAuthor.name);
      setNationality(selectedAuthor.nationality);
    } else {
      setName('');
      setNationality('');
    }
  }, [selectedAuthor]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const author = { name, nationality };

    if (selectedAuthor) {
      updateAuthor(selectedAuthor.id, author).then(onSuccess);
    } else {
      createAuthor(author).then(onSuccess);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedAuthor ? 'Edit Author' : 'Add Author'}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nationality"
        value={nationality}
        onChange={(e) => setNationality(e.target.value)}
        required
      />
      <button type="submit">{selectedAuthor ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default AuthorForm;
