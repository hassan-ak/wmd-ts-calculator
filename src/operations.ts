// Calculator Operations Functions

import { data } from './appData.js';

/**************************************************************************/
// gets 3 strings and combine them to make an expression
function addStatementBinary(p1: string, p2: string, p3: string): void {
  let statement: string = `(${p1}) ${p2} ${p3}`;
  data.addStatements(statement);
}
// gets 3 strings and combine them to make an expression
// skip  params 2 in case of negate and sqrt
function addStatementBinaryR(p1: string, p2: string, p3: string) {
  if (p2 === '') {
    let stat: string = `${p3} (${p1})`;
    data.addStatements(stat);
  } else {
    let stat: string = `${p3} ${p2} (${p1})`;
    data.addStatements(stat);
  }
}

/**************************************************************************/
// get previous result from data
// get tmp variable from data
// perform operation
// call function to create and store a string expression
// returns result
function addition(): number {
  let temp1: number = data.getResults()[0];
  let temp2: number = data.getTemp();
  addStatementBinary(data.getStatements()[0], '+', temp2.toString());
  let operationResult: number = temp1 + temp2;
  return operationResult;
}
function subtraction(): number {
  let temp1: number = data.getResults()[0];
  let temp2: number = data.getTemp();
  addStatementBinary(data.getStatements()[0], '-', temp2.toString());
  let operationResult: number = temp1 - temp2;
  return operationResult;
}
function multiplication(): number {
  let temp1: number = data.getResults()[0];
  let temp2: number = data.getTemp();
  addStatementBinary(data.getStatements()[0], '*', temp2.toString());
  let operationResult: number = temp1 * temp2;
  return operationResult;
}
function divison(): number {
  let temp1: number = data.getResults()[0];
  let temp2: number = data.getTemp();
  addStatementBinary(data.getStatements()[0], '/', temp2.toString());
  let operationResult: number = temp1 / temp2;
  return operationResult;
}
function power(): number {
  let temp1: number = data.getResults()[0];
  let temp2: number = data.getTemp();
  addStatementBinary(data.getStatements()[0], '^', temp2.toString());
  let operationResult: number = temp1 ** temp2;
  return operationResult;
}
function percent(): number {
  let temp1: number = data.getResults()[0];
  let temp2: number = data.getTemp();
  addStatementBinaryR(data.getStatements()[0], '% of', temp2.toString());
  let operationResult: number = temp1 * (temp2 / 100);
  return operationResult;
}

/**************************************************************************/
// get previous result from data
// perform operation
// call function to create and store a string expression
// returns result
function square(): number {
  let temp1: number = data.getResults()[0];
  addStatementBinary(data.getStatements()[0], '**', '2');
  let operationResult: number = temp1 ** 2;
  return operationResult;
}
function squareRoot(): number {
  let temp1: number = data.getResults()[0];
  addStatementBinaryR(data.getStatements()[0], '', 'sqrt');
  let operationResult: number = Math.sqrt(temp1);
  return operationResult;
}
function reciprocal(): number {
  let temp1: number = data.getResults()[0];
  addStatementBinaryR(data.getStatements()[0], '/', '1');
  let operationResult: number = 1 / temp1;
  return operationResult;
}
function negate(): number {
  let temp1: number = data.getResults()[0];
  addStatementBinaryR(data.getStatements()[0], '', 'negate');
  let operationResult: number = -1 * temp1;
  return operationResult;
}

/**************************************************************************/
// remove last entries from results and statements
// returns a string to show success
function revert(): string {
  data.removeResults();
  data.removeStatements();
  return 'r';
}

/**************************************************************************/
// clear data and console
// returns a string to show success
function clear(): string {
  data.reset();
  console.clear();
  return 'c';
}

/**************************************************************************/
// clear data and console
// returns a string to show success
function quitCalculator(): string {
  data.reset();
  console.clear();
  return 'q';
}

/**************************************************************************/
export {
  clear,
  power,
  square,
  negate,
  revert,
  percent,
  divison,
  addition,
  reciprocal,
  squareRoot,
  subtraction,
  multiplication,
  quitCalculator,
};
