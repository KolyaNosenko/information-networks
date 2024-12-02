import { Paper } from '../../entities';

export interface PapersStorage {
  getPapers(): Promise<Paper[]>;
  addPaper(paper: Paper): Promise<void>;
}
