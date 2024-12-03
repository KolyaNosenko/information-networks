import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import {
  AddPaperHandler,
  GetPaperHandler,
  GetPapersHandler,
  UpdatePaperHandler,
} from '../operation';
import {
  AddPaperDtoMapper,
  PaperDtoMapper,
  UpdatePaperDtoMapper,
} from './dto-mappers';
import { AddPaperDto } from './dto';
import { SuccessResponse } from '../../common/ui/entities';
import { UpdatePaperDto } from './dto/update-paper.dto';
import { Response } from 'express';
import {
  AddPaperSuccessView,
  AddPaperView,
  EditPaperSuccessView,
  PapersView,
  EditPaperView,
} from './views';
import { Roles } from '../../user/infrastructure';
import { UserRoleName } from '../../user/domain';

@Roles([UserRoleName.ADMIN])
@Controller('admin/papers')
export class PapersAdminController {
  constructor(
    private readonly addPaperHandler: AddPaperHandler,
    private readonly updatePaperHandler: UpdatePaperHandler,
    private readonly getPapersHandler: GetPapersHandler,
    private readonly getPaperHandler: GetPaperHandler,
    private readonly papersView: PapersView,
    private readonly editPaperView: EditPaperView,
    private readonly editPaperSuccessView: EditPaperSuccessView,
    private readonly addPaperView: AddPaperView,
    private readonly addPaperSuccessView: AddPaperSuccessView,
  ) {}

  @Get()
  async getPapersPage(@Res() response: Response) {
    const papers = await this.getPapersHandler.handle();

    return this.papersView.render(response, { papers });
  }

  @Get('edit/success')
  async getEditSuccessPage(@Res() response: Response) {
    return this.editPaperSuccessView.render(response);
  }

  @Get('edit/:paperId')
  async getEditPage(
    @Param('paperId') paperId: string,
    @Res() response: Response,
  ) {
    const dtoMapper = new PaperDtoMapper();

    const paper = await this.getPaperHandler.handle(paperId);

    return this.editPaperView.render(response, {
      paper: dtoMapper.toDto(paper),
    });
  }

  @Get('add')
  async getAddPaperPage(@Res() response: Response) {
    return this.addPaperView.render(response);
  }

  @Get('add/success')
  async getAddPaperSuccessPage(@Res() response: Response) {
    return this.addPaperSuccessView.render(response);
  }

  @Post()
  async addPaper(@Body() dto: AddPaperDto, @Res() response: Response) {
    const dtoParamsMapper = new AddPaperDtoMapper();

    await this.addPaperHandler.handle(dtoParamsMapper.toEntity(dto));

    return response.redirect('/admin/papers/add/success');
  }

  @Post(':paperId')
  async updatePaper(
    @Param('paperId') paperId: string,
    @Body() dto: UpdatePaperDto,
    @Res() response: Response,
  ) {
    const dtoParamsMapper = new UpdatePaperDtoMapper();

    await this.updatePaperHandler.handle(
      dtoParamsMapper.toEntity({ ...dto, paperId }),
    );

    return response.redirect('/admin/papers/edit/success');
  }
}
