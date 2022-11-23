// Data instance to store data during app use

/**************************************************************************/
// Interface to define Data class
interface Data {
  // Statements are set of methamatical Operations performed
  statement: string[];
  getStatements(): string[];
  addStatements(v: string): void;
  removeStatements(): void;
  // Result of each Operations performed
  results: number[];
  getResults(): number[];
  addResults(v: number): void;
  removeResults(): void;
  // Temp Value of a number during user input
  temp: number;
  setTemp(v: number): void;
  getTemp(): number;
  // reset method to clear data
  reset(): void;
}

/**************************************************************************/
// Class Defination
class OperationsData implements Data {
  // List of all methmatical statements at every step
  // Updated and accessed through a method
  statement: string[] = [];
  public getStatements(): string[] {
    return this.statement;
  }
  public addStatements(v: string) {
    this.statement.unshift(v);
  }
  public removeStatements() {
    this.statement.shift();
  }
  // List of all results at every step
  // Updated and accessed through a method
  results: number[] = [];
  public getResults(): number[] {
    return this.results;
  }
  public addResults(v: number) {
    this.results.unshift(v);
  }
  public removeResults() {
    this.results.shift();
  }
  // Stores a number before performing next operation
  // Updated and accessed through a method
  temp: number = 0;
  public setTemp(v: number): void {
    this.temp = v;
  }
  public getTemp(): number {
    return this.temp;
  }
  // on reset clears all stored data
  public reset(): void {
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
