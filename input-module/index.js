import {inputFunction} from './export.js'
var input;
setInterval(function(){
 input = document.getElementById('input').value;
 input = parseInt(input);

   document.getElementById('output').innerHTML = inputFunction(13, input)
 },100);
