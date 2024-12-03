import { useCallback, useMemo } from 'react';

import { Slider, Typography } from '@mui/material';

import {
  Actions,
  Author,
  Content,
  Cover,
  CoverWrapper,
  Info,
  MoreAction,
  Name,
  ReadingProgress,
  ReadingProgressBar,
  ReadingProgressTitle,
  Root,
} from './styled.tsx';
import { LibraryEntry } from '../../../entities';

const marks = [
  { value: 0, label: '0%' },
  { value: 10, label: '10%' },
  { value: 20, label: '20%' },
  { value: 30, label: '30%' },
  { value: 40, label: '40%' },
  { value: 50, label: '50%' },
  { value: 60, label: '60%' },
  { value: 70, label: '70%' },
  { value: 80, label: '80%' },
  { value: 90, label: '90%' },
  { value: 100, label: '100%' },
];

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
          <Cover
            src={paper.coverUrl}
            alt={paper.name}
            width={100}
            height={145}
          />
        </CoverWrapper>
        <Info>
          <Name variant="h3">{paper.name}</Name>
          <Author variant="h5">By {paper.author}</Author>
          <ReadingProgress>
            <ReadingProgressTitle variant="h6">
              Reading progress:
            </ReadingProgressTitle>
            <ReadingProgressBar
              aria-label="Always visible"
              defaultValue={normalizedProgress}
              getAriaValueText={getValueText}
              step={1}
              marks={marks}
              valueLabelDisplay="auto"
              value={normalizedProgress}
              onChange={(_, value) => onProgressChange(value)}
            />
          </ReadingProgress>
        </Info>
      </Content>
      <Actions>
        <MoreAction onRemove={onRemove} onMarkAsRead={onMarkAsRead} />
      </Actions>
    </Root>
  );
};

export default LibraryEntryCard;
