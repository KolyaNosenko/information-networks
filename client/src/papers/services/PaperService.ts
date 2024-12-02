import { BaseService } from '../../common/services';
import { Paper } from '../entities';

export class PaperService extends BaseService {
  async getPapers(): Promise<Paper[]> {
    return [
      {
        id: '1',
        name: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        description: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        author: 'Robert C. Martin',
        coverUrl:
          'https://balka-book.com/files/2023/12_25/11_03/u_files_store_5_6.jpg',
      },
      {
        id: '2',
        name: "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
        description:
          "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
        author: 'Robert C. Martin',
        coverUrl:
          'https://balka-book.com/files/2023/12_25/11_17/u_files_store_5_8.jpg',
      },
    ];
  }
}
