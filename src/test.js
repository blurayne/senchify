import Parser from './Parser.js';

const parser = new Parser();

parser.parse('./spec/resources/overrides.js');
const dependencies = parser.dependencies;

console.log(JSON.stringify(dependencies, null, 4));
