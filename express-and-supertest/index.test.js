const { app, dispose } = require('./index');
const request = require('supertest');

beforeAll(() => {
  process.env.NODE_ENV = 'test';
});

describe('sample test', () => {
  it('should be ok', () => {
    expect(true).toBe(true);
  });
});

describe('sample express test', () => {
  it('status should be running!', async () => {
    const res = await request(app).get('/status/express');

    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('express');
    expect(res.body.express).toEqual('running!');
  });
});

afterAll(() => {
  dispose();
});
