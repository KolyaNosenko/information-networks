import { PaperDto } from '../../../papers/services/dto';

export type LibraryEntryDto = {
  id: string;
  user_id: string;
  paper: PaperDto;
  progress: number;
  is_read: boolean;
  created_at: number;
  updated_at: number;
};
