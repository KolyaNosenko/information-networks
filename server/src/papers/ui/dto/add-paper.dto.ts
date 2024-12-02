import { IsString } from 'class-validator';

export class AddPaperDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  cover_url: string;

  @IsString()
  author: string;
}
