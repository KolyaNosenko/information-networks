import {
  Author,
  AuthorLabel,
  AuthorWrapper,
  Caption,
  CaptionWrapper,
  Content,
  Header,
  HeartButton,
  HeartOutlined,
  Name,
  Root,
} from './styled.tsx';
import { Paper } from '../../../entities';

export type PaperCardProps = {
  className?: string;
  onAddToLibrary: () => void;
} & Paper;

const PaperCard = ({
  name,
  author,
  coverUrl,
  className,
  onAddToLibrary,
}: PaperCardProps) => {
  return (
    <Root className={className} variant="outlined">
      <Header>
        <HeartButton onClick={onAddToLibrary}>
          <HeartOutlined />
        </HeartButton>
      </Header>
      <Content>
        <CaptionWrapper>
          <Caption src={coverUrl} width={120} height={160} alt={name} />
        </CaptionWrapper>
        <Name variant="h6">{name}</Name>
        <AuthorWrapper>
          <AuthorLabel>Author:</AuthorLabel>
          <Author variant="body2">{author}</Author>
        </AuthorWrapper>
      </Content>
    </Root>
  );
};

export default PaperCard;
