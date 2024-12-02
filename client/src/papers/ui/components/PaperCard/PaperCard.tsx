import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

export type PaperCardProps = {
  className?: string;
};

const PaperCard = ({ className }: PaperCardProps) => {
  return (
    <Card className={className} variant="outlined">
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          Text
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />a benevolent smile
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default PaperCard;