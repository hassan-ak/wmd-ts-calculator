#!/usr/bin/env node

import chalkAnimation from 'chalk-animation';
import { welcomeMessage } from './startUp.js';

// Base function to start the program
// It returns a promise and will always resolve
function runApp(): Promise<boolean> {
  return new Promise((resolve) => {
    resolve(true);
  });
}
let appPromise: Promise<boolean> = runApp();
appPromise.then((): chalkAnimation.Animation => {
  return welcomeMessage();
});
