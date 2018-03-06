

// $(document).ready(function(){

var wins = 0;
var losses = 0;
var targetNumber = 0;
var userGuess = 0;
var jewel1 = 0;
var jewel2 = 0;
var jewel3 = 0;
var jewel4 = 0;

function jewelValues(){
jewel1 = Math.floor((Math.random() * 12) + 1);
jewel2 = Math.floor((Math.random() * 12) + 1);
jewel3 = Math.floor((Math.random() * 12) + 1);
jewel4 = Math.floor((Math.random() * 12) + 1);
}

// console.log(jewelValues())

function main (){
  jewelValues()
  console.log(
    jewel1 + jewel2 + jewel3 + jewel4
  )
}








// });





