// Functions to run at starup
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import chalk from 'chalk';
import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner';
import chalkAnimation from 'chalk-animation';
import { calculator } from './calculator.js';
import { operatorsTable } from './operatorsTable.js';
/**************************************************************************/
// Display Welcome message
// used chalk animations
function welcomeMessage() {
    console.clear();
    const welcomeMessage = chalkAnimation.karaoke('\n********************************\n***Welcome to CLI Calculator ***\n********************************\n', 2);
    return welcomeMessage;
}
/**************************************************************************/
// stop aniomations first
// Display table of operatoins and instructions after wellcome message
function displayTable(value) {
    setTimeout(() => {
        value.stop();
        console.log(`This CLI based calculator can help you perform any of the following operations.`);
        console.log(operatorsTable.toString());
        console.log(`Note : \n\t- Result of each operation is input for the next one.\n\t- Clear and start over for new operation\n\t- Undo last operation if something goes wrong\n`);
    }, 1600);
}
/**************************************************************************/
// Ask user for continuing or quiting app
// based on user input start or quit app
// before starting calculator display a spinner
function askUserForStart() {
    let Commands;
    (function (Commands) {
        Commands["Use"] = "Use Calculator";
        Commands["Quit"] = "Quit App";
    })(Commands || (Commands = {}));
    // function to take input from user
    function promptUser() {
        return __awaiter(this, void 0, void 0, function* () {
            yield inquirer
                .prompt({
                type: 'list',
                name: 'command',
                message: 'Do you want to use the Calculator ? ',
                choices: Object.values(Commands),
            })
                .then((answers) => {
                if (answers['command'] === Commands.Use) {
                    const spinner = createSpinner('starting up').start();
                    setTimeout(() => {
                        spinner.stop();
                        calculator();
                    }, 1000);
                }
                else {
                    quitApp();
                }
            });
        });
    }
    setTimeout(() => {
        promptUser();
    }, 2000);
}
/**************************************************************************/
// Quit App after displaying a message and clear console
function quitApp() {
    console.log(chalk.bgRed('\nClosing CLI Calculator, please wait.'));
    setTimeout(() => {
        console.clear();
    }, 1500);
}
/**************************************************************************/
export { welcomeMessage, displayTable, askUserForStart, quitApp };
