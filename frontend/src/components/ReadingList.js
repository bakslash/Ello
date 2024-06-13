import React from 'react';
import { Grid, Card, CardContent, CardActions, Button, Typography } from '@mui/material';

const ReadingList = ({ books, onRemove }) => {
  return (
    <Grid container spacing={3}>
      {books.map((book, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">{book.title}</Typography>
              <Typography color="textSecondary">{book.author}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="secondary" onClick={() => onRemove(book)}>
                Remove
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ReadingList;
