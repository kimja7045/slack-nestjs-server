import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {
    // controller 실행 전 부분, e.g. 이 컨트롤러가 몇초 걸렸는지 체크
    // return next.handle().pipe(map((data) => ({ data, code: 'SUCCESS' }))); // data는 controller에서 리턴해주는 데이터
    return next
      .handle()
      .pipe(map((data) => (data === undefined ? null : data)));
  }
}
