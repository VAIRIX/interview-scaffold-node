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

n. Don't forget to do `echo "node_modules" > .gitignore` before pushing
