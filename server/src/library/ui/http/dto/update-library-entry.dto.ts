import { IsBoolean, IsNumber, IsOptional, Max, Min } from 'class-validator';

export class UpdateLibraryEntryDto {
  @IsBoolean()
  @IsOptional()
  is_read: boolean;

  @IsNumber()
  @IsOptional()
  @Max(1)
  @Min(0)
  progress: number;
}
