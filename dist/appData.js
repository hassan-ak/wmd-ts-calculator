// Data instance to store data during app use
/**************************************************************************/
// Class Defination
class OperationsData {
    constructor() {
        // List of all methmatical statements at every step
        // Updated and accessed through a method
        this.statement = [];
        // List of all results at every step
        // Updated and accessed through a method
        this.results = [];
        // Stores a number before performing next operation
        // Updated and accessed through a method
        this.temp = 0;
    }
    getStatements() {
        return this.statement;
    }
    addStatements(v) {
        this.statement.unshift(v);
    }
    removeStatements() {
        this.statement.shift();
    }
    getResults() {
        return this.results;
    }
    addResults(v) {
        this.results.unshift(v);
    }
    removeResults() {
        this.results.shift();
    }
    setTemp(v) {
        this.temp = v;
    }
    getTemp() {
        return this.temp;
    }
    // on reset clears all stored data
    reset() {
        this.statement = [];
        this.results = [];
        this.temp = 0;
    }
}
/**************************************************************************/
// create an instance to access throughout the app
let data = new OperationsData();
/**************************************************************************/
export { data };
