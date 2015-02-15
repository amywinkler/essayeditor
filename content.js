$().ready(function() 
{

var content = $("#docs-editor-container"); //content is everything

var nbsp = String.fromCharCode(160);  //chrome is dumb

var text = content[0].innerText;    //text is everything but its a string now

var ListOfStuff = new Array();

text = text.split(nbsp); //split text into array
text.shift();
text.shift();

boolean print = true;

   for(var i = 0; i <  text.length; i++)   // first for loop goes to each element
{
var count = 0;//counter starts at 0 and increments each time a word is repeated

for(var j = 0; j < text.length; j++)
{
if (text[i] ==  text[j])    //tests if strings are equal
{
count++;//count is incremented if a word is repeated
}
}
console.log(text[i] + " is repeated " + count + " times.");  //output
}
});