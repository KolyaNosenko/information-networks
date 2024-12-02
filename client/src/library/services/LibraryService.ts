import { LibraryEntryDto } from './dto';
import { BaseService } from '../../common/services';
import { LibraryEntry, UpdateLibraryEntryParams } from '../entities';
import { LibraryEntryDtoMapper } from '../mappers';

export class LibraryService extends BaseService {
  async getUserLibrary(): Promise<LibraryEntry[]> {
    const dtoMapper = new LibraryEntryDtoMapper();

    const { data } = await this.http.get<LibraryEntryDto[]>('api/v1/library');

    return data.map(dtoMapper.toEntity);
  }

  async addToLibrary(paperId: string): Promise<LibraryEntry> {
    const dtoMapper = new LibraryEntryDtoMapper();

    const { data } = await this.http.post<LibraryEntryDto>('api/v1/library', {
      data: { paper_id: paperId },
    });

    return dtoMapper.toEntity(data);
  }

  async updateLibraryEntry(
    params: UpdateLibraryEntryParams,
  ): Promise<LibraryEntry> {
    const dtoMapper = new LibraryEntryDtoMapper();

    const { data } = await this.http.put<LibraryEntryDto>(
      `api/v1/library/${params.entryId}`,
      {
        data: {
          is_read: params.isRead,
          progress: params.progress,
        },
      },
    );

    return dtoMapper.toEntity(data);
  }

  async removeFromLibrary(entryId: string): Promise<void> {
    await this.http.delete(`api/v1/library/${entryId}`);
  }
}
