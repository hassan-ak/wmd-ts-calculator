// Calculator

import chalk from 'chalk';
import {
  showResultPromise,
  askforNumberPromise,
  askforOperationPromise,
  performOperationPromise,
} from './calculatorUtilities.js';
import { data } from './appData.js';
import { quitApp } from './startUp.js';

/**************************************************************************/
// Actual calculator function
// iterates until stopped
// if length of results (1st operation) welcome, clear console and  ask for 1st entry
// ask for opearion and based on value ask for second number
// perform operation and check based on result if to quir app
// display result after performing operation
async function calculator(): Promise<void> {
  let iter: boolean = true;
  while (iter) {
    if (data.getResults().length === 0) {
      console.clear();
      console.log(chalk.greenBright('CLI Calculator\n'));
      await askforNumberPromise(true);
    }
    let operation: string = await askforOperationPromise();
    if (
      operation === '( + )     addition' ||
      operation === '( - )     subtraction' ||
      operation === '( * )     multiplication' ||
      operation === '( / )     division' ||
      operation === '( % )     percentage' ||
      operation === '( ^ )     power'
    ) {
      await askforNumberPromise(false);
    }
    let operationResult: number | string = await performOperationPromise(
      operation
    );
    if (operationResult === 'q') {
      iter = false;
      quitApp();
      break;
    }
    let result: string = await showResultPromise();
    if (data.getResults().length !== 0) {
      console.log(result);
    }
  }
}

/**************************************************************************/
export { calculator };
