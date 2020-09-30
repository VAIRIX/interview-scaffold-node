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
## typescript-basic

If the interview can involve a typescript project.

1. `yarn init -y` to initialize the node project.
2. `yarn add typescript --dev` to instal typescript and make tsc available
3. `yarn add @types/node --dev` to get type safety and auto-completion on the Node apis like file, path, process, etc.
4. Create a tsconfig.json with this command
```
npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6 \
--module commonjs --allowJs true --noImplicitAny true
```
5. `mkdir src`
6. `touch src/index.ts`
7. `npx tsc` to compile typescript
8. `yarn add ts-node nodemon --dev`
9. `touch nodemon.json` and add
```
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "ts-node ./src/index.ts"
}
```
10. Add scripts to `package.json`
```
"scripts": {
  "dev": "nodemon"
},
```
11. `yarn add rimraf --dev` to add a tool that acts like the `rm -rf`
12. Then add this script to `package.json`
```
"build": "rimraf ./build && tsc",
"start": "npm run build && node build/index.js"
```
13. `yarn add @types/jest jest ts-jest --dev`
14. `touch jest.config.js` and add this to the file
```
module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}
```
15. Add this to tsconfig.json
```
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.(spec|test).ts"]
```
16. Add the following entry to `package.json`
```
"jest": {
  "testEnvironment": "node",
  "coveragePathIgnorePatterns": [
    "/node_modules/"
  ]
}
```
17. Add this to script section
```
"test": "jest --coverage=true --coverage-reporters=text"
```
18. `touch src/index.test.js`
19. Add this lines to `src/index.test.js`
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
20. If VScode complains that Jest methods do not exist, try 'Typescript: Restart TS Server' option in VSCode. (CMD+SHIFT+P)

n. Don't forget to do `echo "node_modules" > .gitignore` before pushing
