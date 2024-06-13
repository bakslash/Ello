import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Container, Typography, Box } from '@mui/material';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import ReadingList from './components/ReadingList';

const BOOKS_QUERY = gql`
  query Books {
    books {
      author
      title
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(BOOKS_QUERY);
  const [searchTerm, setSearchTerm] = useState('');
  const [readingList, setReadingList] = useState([]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = data.books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddBook = (book) => {
    setReadingList([...readingList, book]);
  };

  const handleRemoveBook = (book) => {
    setReadingList(readingList.filter((b) => b.title !== book.title));
  };

  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          Teacher's Book Assignment
        </Typography>
        <SearchBar onChange={handleSearchChange} />
        <Typography variant="h5" gutterBottom>
          Search Results
        </Typography>
        <BookList books={filteredBooks} onAdd={handleAddBook} />
        <Typography variant="h5" gutterBottom>
          Reading List
        </Typography>
        <ReadingList books={readingList} onRemove={handleRemoveBook} />
      </Box>
    </Container>
  );
};

export default App;
