# interview-scaffold-node

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
