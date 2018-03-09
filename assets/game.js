

$(document).ready(function(){

var wins = 0;
var losses = 0;
var targetNumber = 0;
var userGuess = 0;
var jewel1 = $("#gem");
var jewel2 = $("#gem1");
var jewel3 = $("#gem2");
var jewel4 = $("#gem3");
var userguessdiv = $("#yournumber")
var gemcounter = 0;
var targetnumber = 0;


$("#gem" ).attr("value", (Math.floor((Math.random() * 12) + 1)));
$("#gem1").attr("value", (Math.floor((Math.random() * 12) + 1)));
$("#gem2").attr("value", (Math.floor((Math.random() * 12) + 1)));
$("#gem3").attr("value", (Math.floor((Math.random() * 12) + 1)));

var targetnumber = ("value", (Math.floor((Math.random() * 101) + 19)));
$("#targetnumber").text(targetnumber)



$(".gem").on("click", function(){
var gemvalue = ($(this).attr("value"));
gemvalue = parseInt(gemvalue);
gemcounter += gemvalue;
userguessdiv.text(gemcounter);
console.log(gemvalue)

if (targetnumber === gemcounter){
++wins;
$("#wins").text(wins)
reset();
}

if (gemcounter > targetnumber){
++losses;
$("#losses").text(losses);
reset()
}

});


function reset(){
userGuess = 0;
gemcounter = 0;


$("#gem" ).attr("value", (Math.floor((Math.random() * 12) + 1)));
$("#gem1").attr("value", (Math.floor((Math.random() * 12) + 1)));
$("#gem2").attr("value", (Math.floor((Math.random() * 12) + 1)));
$("#gem3").attr("value", (Math.floor((Math.random() * 12) + 1)));

targetnumber = ("value", (Math.floor((Math.random() * 101) + 19)));
$("#targetnumber").text(targetnumber)

userguessdiv.text(gemcounter);
}
});





