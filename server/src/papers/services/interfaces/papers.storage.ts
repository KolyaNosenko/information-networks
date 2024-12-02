import { Paper } from '../../entities';

export interface PapersStorage {
  getPapers(): Promise<Paper[]>;
  addPaper(paper: Paper): Promise<Paper>;
  updatePaper(paper: Paper): Promise<Paper>;
  getPaperById(id: string): Promise<Paper | null>;
}
