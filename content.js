$().ready(function() {

content= $("#docs-editor-container");

text= content[0].innerText;

var info = new Object();

var thing= ' ';

var listOfStuff = text.split(" ");

/*
for (i = 0; i < text.length; i++) 
{
	ch= text.charAt(i);
 if ((ch == ' ') || (ch == '\t') || (ch == '\n'))
 {
 listOfStuff.push(thing);
 thing= " ";
 }  
 else
 {
 thing += text.charAt(i);
 } 
}
*/

console.log(listOfStuff.toString());

});