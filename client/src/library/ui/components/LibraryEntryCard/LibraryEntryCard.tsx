import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

export type LibraryEntryProps = {
  className?: string;
};

const LibraryEntryCard = ({ className }: LibraryEntryProps) => {
  return (
    <Card className={className} variant="outlined">
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Name
        </Typography>
        <Typography variant="h5" component="div">
          Text
        </Typography>
        <Typography variant="body2">Author</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default LibraryEntryCard;
