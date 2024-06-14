import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Container, Typography, Box, Pagination } from '@mui/material';
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
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error :(</Typography>;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const filteredBooks = data.books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const handleAddBook = (book) => {
    if (!readingList.find((b) => b.title === book.title)) {
      setReadingList([...readingList, book]);
    }
  };

  const handleRemoveBook = (book) => {
    setReadingList(readingList.filter((b) => b.title !== book.title));
  };

  return (
    <Container>
      <Box mt={5}>
        <SearchBar onChange={handleSearchChange} books={data.books} />
        <Typography variant="h5" gutterBottom style={{ color: '#FABD33', marginTop: '70px' }}>
          {searchTerm ? 'Search Results' : 'All Books'}
        </Typography>
        <BookList books={currentBooks} onAdd={handleAddBook} />
        <Pagination
          count={Math.ceil(filteredBooks.length / booksPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}
        />
        <Typography variant="h5" gutterBottom style={{ color: '#FABD33' }}>
          Reading List
        </Typography>
        <ReadingList books={readingList} onRemove={handleRemoveBook} />
      </Box>
    </Container>
  );
};

export default App;
