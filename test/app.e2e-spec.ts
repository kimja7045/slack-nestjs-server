import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
// import * as request from 'supertest';
import request from 'supertest';
import passport from 'passport';
import session from 'express-session';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.use(passport.initialize());
    app.use(passport.session());
    await app.init();
  });

  // superagent -> supertest
  // axios -> moxios
  it('/ (GET)', (done) => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!', done);
  });
});
