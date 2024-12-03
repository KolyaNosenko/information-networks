import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { Public } from 'src/auth/infrastructure';

@Controller('admin')
export class AppAdminController {
  @Public()
  @Get()
  root(@Res() response: Response) {
    return response.redirect('/admin/auth');
  }
}
