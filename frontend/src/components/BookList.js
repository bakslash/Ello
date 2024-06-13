import React, { useState } from 'react';
import { Grid, Card, CardContent, CardActions, Button, Typography } from '@mui/material';

const BookList = ({ books, onAdd }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleCardClick = (book) => {
    setSelectedBook(book.title);
  };

  return (
    <Grid container spacing={3}>
      {books.map((book, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card onClick={() => handleCardClick(book)} style={{ cursor: 'pointer' }}>
            <CardContent>
              <Typography variant="h6">{selectedBook === book.title ? book.title : book.title}</Typography>
              <Typography color="textSecondary">{book.author}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" onClick={() => onAdd(book)}>
                Add to Reading List
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
