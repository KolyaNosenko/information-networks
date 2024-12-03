import { useCallback, useMemo, useState } from 'react';

import { Slider, Typography } from '@mui/material';

import LibraryEntryCardMore from './LibraryEntryCardMore';
import {
  Actions,
  Content,
  Cover,
  CoverWrapper,
  Name,
  Root,
} from './styled.tsx';
import { LibraryEntry } from '../../../entities';

export type LibraryEntryProps = {
  className?: string;
  onUpdateProgress: (progress: number) => void;
  onMarkAsRead: () => void;
  onRemove: () => void;
} & LibraryEntry;

const LibraryEntryCard = ({
  className,
  paper,
  progress,
  onUpdateProgress,
  onMarkAsRead,
  onRemove,
}: LibraryEntryProps) => {
  const [marks] = useState([
    { value: 0, label: '0%' },
    { value: 20, label: '20%' },
    { value: 35, label: '35%' },
    { value: 100, label: '100%' },
  ]);

  const normalizedProgress = useMemo(() => {
    return progress * 100;
  }, [progress]);

  const getValueText = useCallback((value: number) => {
    return `${value}%`;
  }, []);

  const onProgressChange = (value: number | number[]) => {
    const newValue = Array.isArray(value) ? value[0] : value;
    onUpdateProgress(newValue / 100);
  };

  return (
    <Root className={className} variant="outlined">
      <Content>
        <CoverWrapper>
          <Cover src={paper.coverUrl} alt={paper.name} width={45} height={70} />
        </CoverWrapper>
        <div>
          <Name variant="h3">{paper.name}</Name>
          <Typography variant="h5">{paper.author}</Typography>
          <div>
            <h6>Progress:</h6>
            <Slider
              aria-label="Always visible"
              defaultValue={normalizedProgress}
              getAriaValueText={getValueText}
              step={1}
              marks={marks}
              valueLabelDisplay="auto"
              value={normalizedProgress}
              onChange={(_, value) => onProgressChange(value)}
            />
          </div>
        </div>
      </Content>
      <Actions>
        <LibraryEntryCardMore onRemove={onRemove} onMarkAsRead={onMarkAsRead} />
      </Actions>
    </Root>
  );
};

export default LibraryEntryCard;
