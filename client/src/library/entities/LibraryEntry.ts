import { Paper } from '../../papers/entities';

export type LibraryEntry = {
  id: string;
  userId: string;
  paper: Paper;
  progress: number;
  isRead: boolean;
  createdAt: number;
  updatedAt: number;
};
