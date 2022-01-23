<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## slack with nestJs

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

```bash
Controller
url을 가져오고 function을 return, express의 라우터 역할

Service
실제로 function을 가지는 부분, 비즈니스(e.g. 영화) 로직을 관리하는 역할

Single-responsibility principle
하나의 module, class 혹은 function이 하나의 기능은
꼭 책임져야 한다

nest - 명령어 모음
nest g co - 컨트롤러 생성
nest g s - 서비스 생성
nest g mo - 모듈 생성

파이프 - 미들웨어, 유효성 검사

NestJS가 MovieService를 import하고 Controller에 inject - Dependency Injection
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Etc

```bash
  nest new - 프로젝트 폴더명

  nextjs-admin - 어드민

  tsconfig.json에 다음코드 추가
  esModuleInterop: true // import * as React from 'react' -> import React from 'react'

```

## License

[MIT licensed](LICENSE)
