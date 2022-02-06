import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUser() {}
  postUser(email: string, nickname: string, password: string) {}
}
