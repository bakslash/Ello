import React from 'react';
import { Grid, Card, CardContent, CardActions, Button, Typography, CardMedia, Box } from '@mui/material';
import image1 from '../assets/image1.webp';
import image2 from '../assets/image2.webp';
import image3 from '../assets/image3.webp';
import image4 from '../assets/image4.webp';
import image5 from '../assets/image5.webp';
import image6 from '../assets/image6.webp';
import image7 from '../assets/image7.webp';
import image8 from '../assets/image8.webp';
import image9 from '../assets/image9.webp';
import image10 from '../assets/image10.webp';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const ReadingList = ({ books, onRemove }) => {
  return (
    <Box>
      <Grid container spacing={2}>
        {books.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
            <Card style={{ backgroundColor: '#FFE6DC', height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardContent style={{ padding: '0', flexGrow: 1 }}>
                <CardMedia
                  component="img"
                  alt={book.title}
                  height="140"
                  image={images[index % 10]}
                  style={{ width: '100%' }}
                />
                <Box style={{ padding: '8px' }}>
                  <Typography variant="body1" sx={{ fontSize: '0.875rem', fontWeight: 'bold' }}>
                    {book.title}
                  </Typography>
                  <Typography color="textSecondary">
                    by {book.author}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#FF6666', color: '#FFFFFF', fontSize: '0.75rem' }}
                  onClick={() => onRemove(book)}
                  fullWidth
                >
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ReadingList;
