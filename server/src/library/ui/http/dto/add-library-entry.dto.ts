import { IsString } from 'class-validator';

export class AddLibraryEntryDto {
  @IsString()
  paper_id: string;
}
