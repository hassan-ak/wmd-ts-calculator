var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Calculator
import chalk from 'chalk';
import { data } from './appData.js';
import { askforNumberPromise, askforOperationPromise, } from './calculatorUtilities.js';
/**************************************************************************/
// Actual calculator function
// iterates until stopped
// if length of results (1st operation) welcome, clear console and  ask for 1st entry
// ask for opearion and based on value ask for second number
// perform operation and check based on result if to quir app
// display result after performing operation
function calculator() {
    return __awaiter(this, void 0, void 0, function* () {
        let iter = true;
        while (iter) {
            if (data.getResults().length === 0) {
                console.clear();
                console.log(chalk.greenBright('CLI Calculator\n'));
                yield askforNumberPromise(true);
            }
            let operation = yield askforOperationPromise();
            if (operation === '( + )     addition' ||
                operation === '( - )     subtraction' ||
                operation === '( * )     multiplication' ||
                operation === '( / )     division' ||
                operation === '( % )     percentage' ||
                operation === '( ^ )     power') {
                yield askforNumberPromise(false);
            }
        }
    });
}
/**************************************************************************/
export { calculator };
