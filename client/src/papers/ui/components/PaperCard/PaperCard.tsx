import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

import { Paper } from '../../../entities';

export type PaperCardProps = {
  className?: string;
} & Paper;

const PaperCard = ({ className, name, author, coverUrl }: PaperCardProps) => {
  return (
    <Card className={className} variant="outlined">
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {name}
        </Typography>
        <Typography variant="h5" component="div">
          Text
        </Typography>
        <img src={coverUrl} width={80} height={120} alt={name} />
        <Typography variant="body2">{author}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default PaperCard;
