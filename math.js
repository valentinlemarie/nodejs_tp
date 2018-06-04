var Number = require('lodash');

function addition (a,b){
  if(!Number.isInteger(a) || !Number.isInteger(b) || (a+b )<0 ){
    return -1;
  }
  return a+b;
}

function soustraction (a,b){
  if(!Number.isInteger(a) || !Number.isInteger(b) || (a-b )<0 ){
      return -1;
    }

  return a-b;
}

function multiplication (a,b){
   if(!Number.isInteger(a) || !Number.isInteger(b) || (a*b )<0 ){
    return -1;
  }
  return a*b;
}

function division (a,b){
  if(!Number.isInteger(a) || !Number.isInteger(b) || (a/b )<0  || b!=0){
      return -1;
   }
  return a/b;
}

function toStringAll(a,b){
  console.log("addition :"+addition(a,b));
  console.log("soustraction :"+soustraction(a,b));
  console.log("multiplication :"+multiplication(a,b));
  console.log("soustraction :"+soustraction(a,b));
}

module.exports = {
  addition:addition,
  soustraction:soustraction,
  multiplication:multiplication,
  division:division,
  toStringAll:toStringAll
}
