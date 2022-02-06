import { Controller, Get, Post, Query, Param, Body } from '@nestjs/common';

@Controller('api/workspaces/:url/channels')
export class ChannelsController {
  @Get()
  getChannels() {}

  @Post()
  createChannel() {}

  @Get(':name')
  getSpecificChannel() {}

  @Get(':name/chats')
  //   getChat(@Query('perPage') perPage, @Query('page') page) {
  getChats(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
    console.log(param.name, param.url);
  }

  @Get(':name/members')
  getAllMembers(@Query() query) {}

  @Post(':name/members')
  initiveMembers(@Body() body) {}
}
