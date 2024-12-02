import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  AddLibraryEntryHandler,
  GetUserLibraryHandler,
  RemoveLibraryEntryHandler,
  UpdateLibraryEntryHandler,
} from '../../operation';
import { CurrentUser } from '../../../auth/infrastructure';
import { User } from '../../../user/domain';
import { SuccessResponse } from '../../../common/ui/entities';
import {
  LibraryEntryDtoMapper,
  UpdateLibraryEntryDtoMapper,
} from './dto-mappers';
import { AddLibraryEntryDto } from './dto';
import { UpdateLibraryEntryDto } from './dto/update-library-entry.dto';

@Controller('api/v1/library')
export class LibraryController {
  constructor(
    private readonly getUserLibraryHandler: GetUserLibraryHandler,
    private readonly addLibraryEntryHandler: AddLibraryEntryHandler,
    private readonly updateLibraryEntryHandler: UpdateLibraryEntryHandler,
    private readonly removeLibraryEntryHandler: RemoveLibraryEntryHandler,
  ) {}

  @Get()
  async getUserLibrary(@CurrentUser() user: User) {
    const dtoMapper = new LibraryEntryDtoMapper();

    const userLibrary = await this.getUserLibraryHandler.handle(user);

    return new SuccessResponse(userLibrary.map(dtoMapper.toDto));
  }

  @Post()
  async addLibraryEntry(
    @CurrentUser() user: User,
    @Body() dto: AddLibraryEntryDto,
  ) {
    const dtoMapper = new LibraryEntryDtoMapper();

    const userLibrary = await this.addLibraryEntryHandler.handle(
      user,
      dto.paper_id,
    );

    return new SuccessResponse(dtoMapper.toDto(userLibrary));
  }

  @Put(':entryId')
  async updateLibraryEntry(
    @CurrentUser() user: User,
    @Param('entryId') entryId: string,
    @Body() dto: UpdateLibraryEntryDto,
  ) {
    const dtoParamsMapper = new UpdateLibraryEntryDtoMapper();
    const dtoMapper = new LibraryEntryDtoMapper();

    const userLibrary = await this.updateLibraryEntryHandler.handle(
      user,
      dtoParamsMapper.toEntity({ ...dto, entryId }),
    );

    return new SuccessResponse(dtoMapper.toDto(userLibrary));
  }

  @Delete(':entryId')
  async removeLibraryEntry(
    @CurrentUser() user: User,
    @Param('entryId') entryId: string,
  ) {
    await this.removeLibraryEntryHandler.handle(user, entryId);

    return new SuccessResponse();
  }
}
