# Command Line Calculator (TS)

A CLI based calculator using typescript and published as an executable npm package, complete problem statement is available [here](https://github.com/panaverse/typescript-node-projects/tree/main/project00_calculator).

## Steps to code CLI calculator

### 1. Project initiation

- Create and navigate to project directory using following commands

  ```cmd
  mkdir wmd-ts-calculator
  cd wmd-ts-calculator
  ```

- Intilize a node project in the newly created directory using following command, this will create a `package.json` file.

  ```cmd
  npm init -y
  ```

- Create a `tsconfig.json` file to define typescript configration using following command

  ```cmd
  tsc --init
  ```

- Create two more directories to be used as root and out directory using

  ```cmd
  mkdir src
  mkdir dist
  ```

- Update `tsconfig.json` to include above directories and also change module and moduleResolution

  ```json
  "module": "NodeNext",
  "rootDir": "./src",
  "moduleResolution": "NodeNext",
  "outDir": "./dist",
  ```

- Update `package.json` and add following content to it

  ```json
  "main": "./dist/index.js",
  "type": "module",
  "scripts": {
      "start": "node ."
  },
  "bin": "./dist/index.js",
  ```

### 2. Install dependencies

- Multiple third-party packages to be used in this project so install different dependacies using following commands

  ```cmd
  npm install inquirer
  npm install cli-table
  npm install chalk
  npm install chalk-animation
  npm install nanospinner
  npm install prettier
  ```

- Install types for the installed dependancies for the development using following set of commands

  ```cmd
  npm install --save-dev @types/inquirer
  npm install --save-dev @types/cli-table
  npm install --save-dev @types/chalk-animation
  npm install --save-dev @types/prettier
  ```

- After installation `package.json` file will be updated and `package-lock.json` file along with `node_modules` folder will be created. We don't need git to track newly created files and folders so create a `.gitignore` file with the following content

  ```gitignore
  node_modules
  package-lock.json
  ```

### 3. Create hello world

- To check if everything is setup properly first create a hello world. All the typescript files should be created `./src` directory. Create a `index.ts` file with the following content

  ```ts
  console.log('Hello World!');
  ```

- To transpile our code to javascript we can use any of the following command, one thing to rember we need to use first command every time we make a change and the second one automatically create js files on every change. So we are going to use the latter one. All the js files will be stored in the `./dist` folder as we declared in our `tsconfig.json` file earlier.

  ```cmd
  tsc
  tsc -w
  ```

- to run the js file we can use any of the following commands

  ```cmd
  node .\dist\index.js
  node .
  npm start
  ```

- If everything is right we will have a console output.

### 4. Create welcome message

- Create `startUp.ts` will the following content to display welcome message to the user

  ```ts
  import chalkAnimation from 'chalk-animation';
  function welcomeMessage(): chalkAnimation.Animation {
    console.clear();
    const welcomeMessage: chalkAnimation.Animation = chalkAnimation.karaoke(
      '\n********************************\n***Welcome to CLI Calculator ***\n********************************\n',
      2
    );
    return welcomeMessage;
  }
  export { welcomeMessage };
  ```

- All the functions are called through `index.ts` so update it with the following content

  ```ts
  #!/usr/bin/env node
  import chalkAnimation from 'chalk-animation';
  import { welcomeMessage } from './startUp.js';
  function runApp(): Promise<boolean> {
    return new Promise((resolve) => {
      resolve(true);
    });
  }
  let appPromise: Promise<boolean> = runApp();
  appPromise.then((): chalkAnimation.Animation => {
    return welcomeMessage();
  });
  ```

### 5. Display table of operations

- Create `operatorsTable.ts` with the following content to define a table of operations to be displayed after welcome message

  ```ts
  import Table from 'cli-table';
  var operatorsTable = new Table({
    head: ['Sr. No.', 'Operator', 'Description', 'Example'],
  });
  let operations: string[][] = [
    ['01', '+', 'Add two numbers', 'x + y'],
    ['02', '-', 'Subtract a number from other', 'x - y'],
    ['03', '*', 'Multiply two numbers', 'x * y'],
    ['04', '/', 'Divide a number by other', 'x / y'],
    ['05', '%', 'Percentage of a number', 'x % of y'],
    ['06', '+/-', 'Alternate sign of a number', '+/- (x)'],
    ['07', '**', 'Square of a number', 'x ** 2'],
    ['08', '^', 'Find power of a number', 'x ^ y'],
    ['09', 'sqrt', 'Square Root of a number', 'sqrt(x)'],
    ['10', '1/x', 'Reciprocal of a number', '1/x'],
  ];
  operatorsTable.push(...operations);
  export { operatorsTable };
  ```

- Update `startUp.ts` to define a function which displays the table and other details

  ```ts
  import { operatorsTable } from './operatorsTable.js';
  function displayTable(value: chalkAnimation.Animation): void {
    setTimeout((): void => {
      value.stop();
      console.log(
        `This CLI based calculator can help you perform any of the following operations.`
      );
      console.log(operatorsTable.toString());
      console.log(
        `Note : \n\t- Result of each operation is input for the next one.\n\t- Clear and start over for new operation\n\t- Undo last operation if something goes wrong\n`
      );
    }, 1600);
  }
  export { displayTable };
  ```

- Update `index.ts` to use displayTable function

  ```ts
  import { displayTable } from './startUp.js';
  .then((value: chalkAnimation.Animation): void => {
    displayTable(value);
  });
  ```

### 6. Ask user to start or quit

- Update `startUp.ts` to define a function which asks the user to open calculator or quit the app.

  ```ts
  import inquirer from 'inquirer';
  import { createSpinner } from 'nanospinner';
  function askUserForStart(): void {
    enum Commands {
      Use = 'Use Calculator',
      Quit = 'Quit App',
    }
    async function promptUser(): Promise<void> {
      await inquirer
        .prompt({
          type: 'list',
          name: 'command',
          message: 'Do you want to use the Calculator ? ',
          choices: Object.values(Commands),
        })
        .then((answers): void => {
          if (answers['command'] === Commands.Use) {
            const spinner = createSpinner('starting up').start();
            setTimeout(() => {
              spinner.stop();
              console.log('Calculator');
              // calculator();
            }, 1000);
          } else {
            console.log('App Closed');
            // quitApp();
          }
        });
    }
    setTimeout(() => {
      promptUser();
    }, 2000);
  }
  export { askUserForStart };
  ```

- update `index.ts` to call inquirer function

  ```ts
  import chalk from 'chalk';
  import { askUserForStart } from './startUp.js';
  .then((): void => {
    askUserForStart();
  }).catch((): void => {
    console.log(
      chalk.magenta('\nThere is some Internal Error.\nPlease Try Again Later')
    );
    setTimeout((): void => {
      console.clear();
    }, 1000);
  });
  ```

### 7. Add function to quit app

- update `starUp.ts` to define a function which quits the app when called. Dont forget to un-comment function call from the last step

  ```ts
  import chalk from 'chalk';
  function quitApp(): void {
    console.log(chalk.bgRed('\nClosing CLI Calculator, please wait.'));
    setTimeout((): void => {
      console.clear();
    }, 1500);
  }
  export { quitApp };
  ```

### 8. Create calculator function

- create `calculator.ts` to define a function which is actullay the calculator we are planning on using. Intially it is just a console message. Also update function call in `startUp.ts`

  ```ts
  function calculator() {
    console.log('Welcome to calculator');
  }
  export { calculator };
  ```

### 9. Create a class to store runtime data

- create `appData.ts` ro define a class which stores data during application runntime

  ```ts
  interface Data {
    statement: string[];
    getStatements(): string[];
    addStatements(v: string): void;
    removeStatements(): void;
    results: number[];
    getResults(): number[];
    addResults(v: number): void;
    removeResults(): void;
    temp: number;
    setTemp(v: number): void;
    getTemp(): number;
    reset(): void;
  }
  class OperationsData implements Data {
    statement: string[] = [];
    public getStatements(): string[] {
      return this.statement;
    }
    public addStatements(v: string) {
      this.statement.unshift(v);
    }
    public removeStatements() {
      this.statement.shift();
    }
    results: number[] = [];
    public getResults(): number[] {
      return this.results;
    }
    public addResults(v: number) {
      this.results.unshift(v);
    }
    public removeResults() {
      this.results.shift();
    }
    temp: number = 0;
    public setTemp(v: number): void {
      this.temp = v;
    }
    public getTemp(): number {
      return this.temp;
    }
    public reset(): void {
      this.statement = [];
      this.results = [];
      this.temp = 0;
    }
  }
  let data = new OperationsData();
  export { data };
  ```

### 10. Ask user to input numbers

- Create `calculatorUtilities.ts` to define a function which ask user for a number and store it to the data class

```ts
import inquirer from 'inquirer';
import chalk from 'chalk';
import { data } from './appData.js';
let askforNumberPromise: (firstEntry: boolean) => Promise<void | boolean> = (
  firstEntry: boolean
): Promise<void | boolean> => {
  return new Promise((resolve) => {
    async function askForNumber(firstEntry: boolean): Promise<void | boolean> {
      let userInput = await inquirer.prompt([
        {
          name: 'aNum',
          type: 'number',
          message: `Enter ${firstEntry ? '1st' : '2nd'} Number : `,
        },
      ]);
      if (isNaN(userInput.aNum)) {
        console.log(chalk.red('Entered value is not a number '));
        askForNumber(firstEntry);
      } else {
        if (firstEntry) {
          data.addResults(userInput.aNum);
          data.addStatements(userInput.aNum);
        } else {
          data.setTemp(userInput.aNum);
        }
        resolve(true);
      }
    }
    askForNumber(firstEntry);
  });
};
export { askforNumberPromise };
```

- update `calculator.ts` to include above function in the app

```ts
import chalk from 'chalk';
import { data } from './appData.js';
import { askforNumberPromise } from './calculatorUtilities.js';
async function calculator(): Promise<void> {
  let iter: boolean = true;
  while (iter) {
    if (data.getResults().length === 0) {
      console.clear();
      console.log(chalk.greenBright('CLI Calculator\n'));
      await askforNumberPromise(true);
    }
  }
}
export { calculator };
```
