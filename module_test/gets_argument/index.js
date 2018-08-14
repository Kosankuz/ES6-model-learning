import {turn} from './export.js';

function compare(a, b){

  b = turn();
  return (a > b ? "a("+ a +") is bigger than turn()" : "turn() (" + turn() + ") is bigger than a ("+ a +") ")
}

console.log(compare(5));
