// Calculator Operations Functions
import { data } from './appData.js';
/**************************************************************************/
// gets 3 strings and combine them to make an expression
function addStatementBinary(p1, p2, p3) {
    let statement = `(${p1}) ${p2} ${p3}`;
    data.addStatements(statement);
}
// gets 3 strings and combine them to make an expression
// skip  params 2 in case of negate and sqrt
function addStatementBinaryR(p1, p2, p3) {
    if (p2 === '') {
        let stat = `${p3} (${p1})`;
        data.addStatements(stat);
    }
    else {
        let stat = `${p3} ${p2} (${p1})`;
        data.addStatements(stat);
    }
}
/**************************************************************************/
// get previous result from data
// get tmp variable from data
// perform operation
// call function to create and store a string expression
// returns result
function addition() {
    let temp1 = data.getResults()[0];
    let temp2 = data.getTemp();
    addStatementBinary(data.getStatements()[0], '+', temp2.toString());
    let operationResult = temp1 + temp2;
    return operationResult;
}
function subtraction() {
    let temp1 = data.getResults()[0];
    let temp2 = data.getTemp();
    addStatementBinary(data.getStatements()[0], '-', temp2.toString());
    let operationResult = temp1 - temp2;
    return operationResult;
}
function multiplication() {
    let temp1 = data.getResults()[0];
    let temp2 = data.getTemp();
    addStatementBinary(data.getStatements()[0], '*', temp2.toString());
    let operationResult = temp1 * temp2;
    return operationResult;
}
function divison() {
    let temp1 = data.getResults()[0];
    let temp2 = data.getTemp();
    addStatementBinary(data.getStatements()[0], '/', temp2.toString());
    let operationResult = temp1 / temp2;
    return operationResult;
}
function power() {
    let temp1 = data.getResults()[0];
    let temp2 = data.getTemp();
    addStatementBinary(data.getStatements()[0], '^', temp2.toString());
    let operationResult = temp1 ** temp2;
    return operationResult;
}
function percent() {
    let temp1 = data.getResults()[0];
    let temp2 = data.getTemp();
    addStatementBinaryR(data.getStatements()[0], '% of', temp2.toString());
    let operationResult = temp1 * (temp2 / 100);
    return operationResult;
}
/**************************************************************************/
// get previous result from data
// perform operation
// call function to create and store a string expression
// returns result
function square() {
    let temp1 = data.getResults()[0];
    addStatementBinary(data.getStatements()[0], '**', '2');
    let operationResult = temp1 ** 2;
    return operationResult;
}
function squareRoot() {
    let temp1 = data.getResults()[0];
    addStatementBinaryR(data.getStatements()[0], '', 'sqrt');
    let operationResult = Math.sqrt(temp1);
    return operationResult;
}
function reciprocal() {
    let temp1 = data.getResults()[0];
    addStatementBinaryR(data.getStatements()[0], '/', '1');
    let operationResult = 1 / temp1;
    return operationResult;
}
function negate() {
    let temp1 = data.getResults()[0];
    addStatementBinaryR(data.getStatements()[0], '', 'negate');
    let operationResult = -1 * temp1;
    return operationResult;
}
/**************************************************************************/
// remove last entries from results and statements
// returns a string to show success
function revert() {
    data.removeResults();
    data.removeStatements();
    return 'r';
}
/**************************************************************************/
// clear data and console
// returns a string to show success
function clear() {
    data.reset();
    console.clear();
    return 'c';
}
/**************************************************************************/
// clear data and console
// returns a string to show success
function quitCalculator() {
    data.reset();
    console.clear();
    return 'q';
}
/**************************************************************************/
export { clear, power, square, negate, revert, percent, divison, addition, reciprocal, squareRoot, subtraction, multiplication, quitCalculator, };
