import { useState } from 'react';
import toast from 'react-hot-toast';
import styles from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error('Please enter a search query');
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <header>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
