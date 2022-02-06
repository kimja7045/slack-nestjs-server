import { Injectable } from '@nestjs/common';
import { userInfo } from 'os';

@Injectable()
export class AppService {
  // async getUser(): object {
  //   const user = await userInfo.findOne();
  //   return user;
  // }

  // async postUser(): object {
  //   const user = await userInfo.create();
  //   return user;
  // }

  getHello(): string {
    return 'Hi~nest';
  }
}
