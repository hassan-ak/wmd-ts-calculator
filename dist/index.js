#!/usr/bin/env node
import { welcomeMessage, displayTable } from './startUp.js';
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
});
