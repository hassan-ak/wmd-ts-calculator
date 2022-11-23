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
import { addition, clear, divison, multiplication, negate, percent, power, quitCalculator, reciprocal, revert, square, squareRoot, subtraction, } from './operations.js';
import prettier from 'prettier';
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
// Ask user for operation to perform
// inquirer displays a list to chose from
// return selected operations
let askforOperationPromise = () => {
    return new Promise((resolve) => {
        function askForOperation() {
            return __awaiter(this, void 0, void 0, function* () {
                // List of commands
                let Commands;
                (function (Commands) {
                    Commands["addition"] = "( + )     addition";
                    Commands["subtraction"] = "( - )     subtraction";
                    Commands["multiplication"] = "( * )     multiplication";
                    Commands["divison"] = "( / )     division";
                    Commands["percentage"] = "( % )     percentage";
                    Commands["negation"] = "( +/- )   negation";
                    Commands["square"] = "( ** )    square";
                    Commands["power"] = "( ^ )     power";
                    Commands["squareRoot"] = "( sqrt )  square root";
                    Commands["reciprocal"] = "( 1/x )   reciprocal";
                    Commands["revert"] = "( < )     undo last operation";
                    Commands["quit"] = "( q )     quit calculator";
                    Commands["clear"] = "( c )     clear and startOver";
                })(Commands || (Commands = {}));
                // ask user for input
                let userInput = yield inquirer.prompt({
                    type: 'list',
                    name: 'command',
                    message: 'Select an operation to perform : ',
                    choices: Object.values(Commands),
                });
                return userInput.command;
            });
        }
        resolve(askForOperation());
    });
};
/**************************************************************************/
// Perform Operation based on user selection
// call a function based on operation
// add result to data.results and return the result
let performOperationPromise = (operation) => {
    return new Promise((resolve) => {
        function performOperation(operation) {
            let result;
            switch (operation) {
                case '( + )     addition':
                    result = addition();
                    data.addResults(result);
                    break;
                case '( - )     subtraction':
                    result = subtraction();
                    data.addResults(result);
                    break;
                case '( * )     multiplication':
                    result = multiplication();
                    data.addResults(result);
                    break;
                case '( / )     division':
                    result = divison();
                    data.addResults(result);
                    break;
                case '( ^ )     power':
                    result = power();
                    data.addResults(result);
                    break;
                case '( % )     percentage':
                    result = percent();
                    data.addResults(result);
                    break;
                case '( ** )    square':
                    result = square();
                    data.addResults(result);
                    break;
                case '( 1/x )   reciprocal':
                    result = reciprocal();
                    data.addResults(result);
                    break;
                case '( +/- )   negation':
                    result = negate();
                    data.addResults(result);
                    break;
                case '( sqrt )  square root':
                    result = squareRoot();
                    data.addResults(result);
                    break;
                case '( < )     undo last operation':
                    result = revert();
                    break;
                case '( q )     quit calculator':
                    result = quitCalculator();
                    break;
                case '( c )     clear and startOver':
                    result = clear();
                    break;
                default:
                    result = 0;
                    break;
            }
            return result;
        }
        resolve(performOperation(operation));
    });
};
/**************************************************************************/
// Fetch result along with statement from data
// to be displayed after each operation
// use prettier on the statments
// only use prettier when there is atleast one operation
let showResultPromise = () => {
    return new Promise((resolve) => {
        if (data.getStatements().length > 1) {
            resolve(`\nResult (1st number for next operation) \n\n\t` +
                chalk.cyan(prettier
                    .format(data.getStatements()[0], {
                    semi: false,
                    parser: 'babel',
                })
                    .replace(/(\r\n|\n|\r)/gm, '')
                    .replace(';', '')) +
                ` = ${chalk.blue(data.getResults()[0])}
            `);
        }
        else {
            resolve(`\nResult (1st number for next operation) \n\n\t` +
                chalk.cyan(data.getStatements()[0]) +
                ` = ${chalk.blue(data.getResults()[0])}
          `);
        }
    });
};
/**************************************************************************/
export { askforNumberPromise, askforOperationPromise, performOperationPromise, showResultPromise, };
