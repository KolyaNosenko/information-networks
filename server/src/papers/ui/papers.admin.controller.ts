import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { AddPaperHandler, UpdatePaperHandler } from '../operation';
import {
  AddPaperDtoMapper,
  PaperDtoMapper,
  UpdatePaperDtoMapper,
} from './dto-mappers';
import { AddPaperDto } from './dto';
import { SuccessResponse } from '../../common/ui/entities';
import { UpdatePaperDto } from './dto/update-paper.dto';

@Controller('api/v1/admin/papers')
export class PapersAdminController {
  constructor(
    private readonly addPaperHandler: AddPaperHandler,
    private readonly updatePaperHandler: UpdatePaperHandler,
  ) {}

  @Post()
  async addPaper(@Body() dto: AddPaperDto) {
    const dtoParamsMapper = new AddPaperDtoMapper();
    const dtoMapper = new PaperDtoMapper();

    const paper = await this.addPaperHandler.handle(
      dtoParamsMapper.toEntity(dto),
    );

    return new SuccessResponse(dtoMapper.toDto(paper));
  }

  @Put(':paperId')
  async updatePaper(
    @Param('paperId') paperId: string,
    @Body() dto: UpdatePaperDto,
  ) {
    const dtoParamsMapper = new UpdatePaperDtoMapper();
    const dtoMapper = new PaperDtoMapper();

    const paper = await this.updatePaperHandler.handle(
      dtoParamsMapper.toEntity({ ...dto, paperId }),
    );

    return new SuccessResponse(dtoMapper.toDto(paper));
  }
}
