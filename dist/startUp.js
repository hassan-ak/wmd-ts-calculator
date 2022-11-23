// Functions to run at starup
import chalkAnimation from 'chalk-animation';
/**************************************************************************/
// Display Welcome message
// used chalk animations
function welcomeMessage() {
    console.clear();
    const welcomeMessage = chalkAnimation.karaoke('\n********************************\n***Welcome to CLI Calculator ***\n********************************\n', 2);
    return welcomeMessage;
}
/**************************************************************************/
export { welcomeMessage };
