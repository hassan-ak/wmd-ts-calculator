// Functions to run at starup
import chalkAnimation from 'chalk-animation';
import { operatorsTable } from './operatorsTable.js';
import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner';
import chalk from 'chalk';

/**************************************************************************/
// Display Welcome message
// used chalk animations
function welcomeMessage(): chalkAnimation.Animation {
  console.clear();
  const welcomeMessage: chalkAnimation.Animation = chalkAnimation.karaoke(
    '\n********************************\n***Welcome to CLI Calculator ***\n********************************\n',
    2
  );
  return welcomeMessage;
}

/**************************************************************************/
// stop aniomations first
// Display table of operatoins and instructions after wellcome message
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

/**************************************************************************/
// Ask user for continuing or quiting app
// based on user input start or quit app
// before starting calculator display a spinner
function askUserForStart(): void {
  enum Commands {
    Use = 'Use Calculator',
    Quit = 'Quit App',
  }
  // function to take input from user
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
          quitApp();
        }
      });
  }
  setTimeout(() => {
    promptUser();
  }, 2000);
}

// Quit App after displaying a message and clear console
function quitApp(): void {
  console.log(chalk.bgRed('\nClosing CLI Calculator, please wait.'));
  setTimeout((): void => {
    console.clear();
  }, 1500);
}

/**************************************************************************/
export { welcomeMessage, displayTable, askUserForStart, quitApp };
