import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

//실무에서는 그냥 nest morgan 추천
// @Injectable
export class LoggerMiddleware implements NestMiddleware<Request, Response> {
  private logger = new Logger('HTTP');

  // 이 미들웨어는 라우터보다 더 먼저 실행됨
  use(request: Request, response: Response, next: NextFunction): void {
    //라우터 시작할 때  기록
    const { ip, method, originalUrl } = request;
    const userAgent = request.get('user-agent') || '';

    //라우터 끝날 때 기록
    response.on('finish', () => {
      const { statusCode } = response;
      const contentLength = response.get('content-length');

      //   this.logger.log(
      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`
      );
    });

    next();
  }
}
