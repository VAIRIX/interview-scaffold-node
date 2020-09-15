# interview-scaffold-node

This is a scaffold that you can use (or not) in your next live code interview.

## Basic
This directory contains a scaffold that let you start with a simple Node.js project with nodemon and jest. This scaffold will let you do [LeetCode](https://leetcode.com/) kind of challenges, adding all the restrictions and samples as jest test cases.

1. `yarn init -y` to initialize the node project.
2. `yarn add nodemon --dev`
3. Add scripts to `package.json`
```
"scripts": {
  "dev": "nodemon"
},
```
4. `yarn add jest`
5. Add the following entry to `package.json`
```
"jest": {
  "testEnvironment": "node",
  "coveragePathIgnorePatterns": [
    "/node_modules/"
  ]
}
```
6. Add this to script section
```
"test": "jest --coverage=true --coverage-reporters=text"
```
7. `touch index.test.js`
8. Add this lines to `index.test.js`
```
beforeAll(() => {
  process.env.NODE_ENV = 'test';
});

describe('sample test', () => {
  it('should be ok', () => {
    expect(true).toBe(true);
  });
});
```
## express-and-supertest

If the interview can involve endpoint definitions, it can be useful to add express and configure jest apropiately.

9. `yarn add express`
10. Add this code to `index.js` file
```
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); //Used to parse JSON bodies

app.get('/status/express', async (req, res) => {
  res.json({
    'express': 'running!' } 
  );
});

const server = app.listen(port, () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`Listening on port ${port}`)
  }
});

const dispose = () => {
  server.close();
}

module.exports = {
  app
}
```
11. `yarn add supertest`
12. Modify `index.test.js` to match this code
```
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
```

n. Don't forget to do `echo "node_modules" > .gitignore` before pushing
