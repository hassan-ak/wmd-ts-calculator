#!/usr/bin/env node

import chalkAnimation from 'chalk-animation';
import { welcomeMessage, displayTable, askUserForStart } from './startUp.js';
import chalk from 'chalk';

// Base function to start the program
// It returns a promise and will always resolve
function runApp(): Promise<boolean> {
  return new Promise((resolve) => {
    resolve(true);
  });
}
let appPromise: Promise<boolean> = runApp();
appPromise
  .then((): chalkAnimation.Animation => {
    return welcomeMessage();
  })
  .then((value: chalkAnimation.Animation): void => {
    displayTable(value);
  })
  .then((): void => {
    askUserForStart();
  })
  .catch((): void => {
    console.log(
      chalk.magenta('\nThere is some Internal Error.\nPlease Try Again Later')
    );
    setTimeout((): void => {
      console.clear();
    }, 1000);
  });
