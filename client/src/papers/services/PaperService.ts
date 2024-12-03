import { BaseService } from '../../common/services';
import { Paper } from '../entities';
import { PaperDto } from './dto';
import { PaperDtoMapper } from '../mappers';

export class PaperService extends BaseService {
  async getPapers(): Promise<Paper[]> {
    const dtoMapper = new PaperDtoMapper();

    const { data } = await this.http.get<PaperDto[]>('api/v1/papers');

    return data.map(dtoMapper.toEntity);
  }
}
