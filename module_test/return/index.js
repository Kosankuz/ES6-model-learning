import {returnFun} from './export.js';

function chec(){
  if (returnFun() == 5){
    console.log(true);
  }else{
    console.log(false);
  }
}

chec();
