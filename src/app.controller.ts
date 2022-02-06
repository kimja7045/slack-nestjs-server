import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('/') // GET / user
  // getUser(req, res): object {
  //   return this.appService.getUser();
  // }

  // @Post('/') // POST /user
  // postUser(req, res): object {
  //   return this.appService.postUser();
  // }

  @Get('/')
  getHello(): string {
    return 'Hello';
  }
}
