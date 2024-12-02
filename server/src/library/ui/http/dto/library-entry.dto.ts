import { PaperDto } from '../../../../papers/ui';

export type LibraryEntryDto = {
  id: string;
  user_id: string;
  paper: PaperDto;
  progress: number;
  is_read: boolean;
  created_at: number;
  updated_at: number;
};
