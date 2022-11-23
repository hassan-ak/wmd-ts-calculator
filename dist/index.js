#!/usr/bin/env node
import chalk from 'chalk';
import { welcomeMessage, displayTable, askUserForStart } from './startUp.js';
// Base function to start the program
// It returns a promise and will always resolve
function runApp() {
    return new Promise((resolve) => {
        resolve(true);
    });
}
let appPromise = runApp();
appPromise
    .then(() => {
    return welcomeMessage();
})
    .then((value) => {
    displayTable(value);
})
    .then(() => {
    askUserForStart();
})
    .catch(() => {
    console.log(chalk.magenta('\nThere is some Internal Error.\nPlease Try Again Later'));
    setTimeout(() => {
        console.clear();
    }, 1000);
});
