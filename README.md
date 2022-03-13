<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## slack with nestJs

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

```bash
controller -> service -> repository -> entity(테이블)

Service
실제로 function을 가지는 부분, 비즈니스(e.g. 영화) 로직을 관리하는 역할, 요청과 응답에 대해서는 몰라야됨

Controller
url을 가져오고 function을 return, express의 라우터 역할, 요청과 응답에 대해서는 알아도되지만 모르게 설계하기(결합성을 낮추기 위해)



Single-responsibility principle
하나의 module, class 혹은 function이 하나의 기능은
꼭 책임져야 한다

nest - 명령어 모음
nest g co controllerNames- 컨트롤러 생성
nest g s serviceNames- 서비스 생성
nest g mo moduleNames - 모듈 생성
nest g res resourceNames = crud

파이프 - 미들웨어, 유효성 검사

NestJS가 Service를 import하고 Controller에 inject - Dependency Injection
```

## Etc

```bash
  nest new - 프로젝트 폴더명

  nextjs-admin - 어드민

  tsconfig.json에 다음코드 추가
  esModuleInterop: true // import * as React from 'react' -> import React from 'react'

  블랙박스 - 어떤 기능이 있는데 그 기능이 어떻게 돌아가는지 안보이는데 되는. e.g. 인공지능
  화이트박스 - 블랙박스의 반대 e.g. 알고리즘

  log기록 - 그냥 모니터링용도로만 쓸 때는 디비에 저장안하고, sentry, Datadog, aws의 cloudWatch에서 검색해서 찾음

  npx typeorm-model-generator -h localhost -d slack -u root -x nodejsbook -e postgres
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

## License

[MIT licensed](LICENSE)
