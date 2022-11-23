import Table from 'cli-table';
/**************************************************************************/
// Create a table instance to display operations
// Available in the calculator
var operatorsTable = new Table({
    head: ['Sr. No.', 'Operator', 'Description', 'Example'],
});
let operations = [
    ['01', '+', 'Add two numbers', 'x + y'],
    ['02', '-', 'Subtract a number from other', 'x - y'],
    ['03', '*', 'Multiply two numbers', 'x * y'],
    ['04', '/', 'Divide a number by other', 'x / y'],
    ['05', '%', 'Percentage of a number', 'x % of y'],
    ['06', '+/-', 'Alternate sign of a number', '+/- (x)'],
    ['07', '**', 'Square of a number', 'x ** 2'],
    ['08', '^', 'Find power of a number', 'x ^ y'],
    ['09', 'sqrt', 'Square Root of a number', 'sqrt(x)'],
    ['10', '1/x', 'Reciprocal of a number', '1/x'],
];
operatorsTable.push(...operations);
/**************************************************************************/
export { operatorsTable };
