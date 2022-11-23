// Functions to run at starup
import chalkAnimation from 'chalk-animation';
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
export { welcomeMessage, displayTable };
