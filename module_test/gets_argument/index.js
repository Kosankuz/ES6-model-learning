import {turn} from './export.js';

function compare(a, b){

  b = turn(5, 8);
  return (a > b ? "a("+ a +") is bigger than turn()" : "turn() (" + b + ") is bigger than a ("+ a +") ")
}

console.log(compare(5));
