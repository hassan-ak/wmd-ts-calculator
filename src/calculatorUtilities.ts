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
      // check for valid number
      // add number to result and statement if 1st entry
      // add to temp if not 1st entry
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

/**************************************************************************/
// Ask user for operation to perform
// inquirer displays a list to chose from
// return selected operations
let askforOperationPromise: () => Promise<string> = (): Promise<string> => {
  return new Promise((resolve) => {
    async function askForOperation(): Promise<string> {
      // List of commands
      enum Commands {
        addition = '( + )     addition',
        subtraction = '( - )     subtraction',
        multiplication = '( * )     multiplication',
        divison = '( / )     division',
        percentage = '( % )     percentage',
        negation = '( +/- )   negation',
        square = '( ** )    square',
        power = '( ^ )     power',
        squareRoot = '( sqrt )  square root',
        reciprocal = '( 1/x )   reciprocal',
        revert = '( < )     undo last operation',
        quit = '( q )     quit calculator',
        clear = '( c )     clear and startOver',
      }
      // ask user for input
      let userInput = await inquirer.prompt({
        type: 'list',
        name: 'command',
        message: 'Select an operation to perform : ',
        choices: Object.values(Commands),
      });
      return userInput.command;
    }
    resolve(askForOperation());
  });
};

/**************************************************************************/
export { askforNumberPromise, askforOperationPromise };
