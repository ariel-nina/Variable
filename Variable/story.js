
//"<h2>There once was a ${noun} and it never ${verb} One day there was a ${adj} monster who was ${color} and was always cranky. And had a best friend was a ${noun2} </h2>"


var noun = prompt("please enter a noun");
var verb = prompt("please enter a verb");
var adj = prompt("please enter a adjective");
var color = prompt("please enter a color");
var noun2 = prompt("please enter a noun");

alert("Finished!")



var story = "A time long ago there lived a " + noun + " that never learned how to " + verb + ". They had a best friend who was a " + adj + " monster that was bright " + color + ". And always cranky. " + "They both lived far far away within a " +noun2 + ".";

//var story =+ "and it never" + verb; 
//var story =+ "One day there was a" + adj;
//var story =+ "monster who was" + color;
//var story =+ "and was always cranky.";
//var story =+ "And had a best friend was a" + noun2 + ".";

document.write(story);
