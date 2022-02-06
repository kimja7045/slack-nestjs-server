import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from 'src/common/dto/decorators/user.decorator';
import { UndefinedToNullInterceptor } from 'src/common/dto/interceptors/undifinedToNull.interceptor';
import { UserDto } from 'src/common/dto/user.dto';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@UseInterceptors(UndefinedToNullInterceptor)
@ApiTags('USER')
@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOkResponse({
    type: UserDto,
    description: '성공',
  })
  @ApiOperation({ summary: '내 정보 조회' })
  @Get()
  getUser(@User() user) {
    return user;
    // res.locals.jwt
  }

  @ApiOperation({ summary: '회원가입' })
  @Post()
  postUser(@Body() body: JoinRequestDto) {
    this.usersService.postUser(body.email, body.nickname, body.password);
  }

  @ApiOkResponse({
    description: '성공',
    type: UserDto,
  })
  @ApiOperation({ summary: '로그인' })
  @Post('login')
  login(@User() user) {
    return user;
  }

  // req, res에 대해 모르는게 좋은데 로그아웃같은 경우는 어쩔수 없음, 아래 코드는 express에 특정되기때문에 fastify로 이동시 코드 수정필요
  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logOut(@Req() req, @Res() res) {
    req.logOut();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('ok');
  }
}
