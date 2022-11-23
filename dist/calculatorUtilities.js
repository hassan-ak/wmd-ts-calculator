var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Calculator sub Functions
import inquirer from 'inquirer';
import chalk from 'chalk';
import { data } from './appData.js';
/**************************************************************************/
// Fnction should ask for a number from user
// If it is the first operation ask for 1st number
// If it is 2nd operation ask for 2nd number
// Also validate if the input value is actually a number or not
// rerun until a valid number is entered
// add input to data.results if 1st entry
// add input to data.temp if 2nd entry
let askforNumberPromise = (firstEntry) => {
    return new Promise((resolve) => {
        function askForNumber(firstEntry) {
            return __awaiter(this, void 0, void 0, function* () {
                let userInput = yield inquirer.prompt([
                    {
                        name: 'aNum',
                        type: 'number',
                        message: `Enter ${firstEntry ? '1st' : '2nd'} Number : `,
                    },
                ]);
                // check for valid number
                // add number to result and statement if 1st entry
                // add to temp if not 1st entry
                if (isNaN(userInput.aNum)) {
                    console.log(chalk.red('Entered value is not a number '));
                    askForNumber(firstEntry);
                }
                else {
                    if (firstEntry) {
                        data.addResults(userInput.aNum);
                        data.addStatements(userInput.aNum);
                    }
                    else {
                        data.setTemp(userInput.aNum);
                    }
                    resolve(true);
                }
            });
        }
        askForNumber(firstEntry);
    });
};
/**************************************************************************/
export { askforNumberPromise };
