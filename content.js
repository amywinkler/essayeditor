$().ready(function() 
{

var content = $("#docs-editor-container"); //content is everything

var nbsp = String.fromCharCode(160);  //chrome is dumb

var text = content[0].innerText;    //text is everything but its a string now

var ListOfStuff = new Array();

text = text.split(nbsp); //split text into array


   for(var i = 0; i <  text.length; i++)
{
var count = 0;

for(var j = 0; j < text.length; j++)
{

if (text[i] ==  text[j])
{
count++;
}
console.log(text[i]);
}
}
});

/*for (i = 0; i < text.length; i++)        
{
ch = text.charAt(i)
if ((ch == " ") || (ch == '\t') || (ch == '\n'))
{
 listOfStuff.push(thing);
 thing= " ";
 }  
 else
 {
 thing += text.charAt(i);
} 
}

for (var i = 0;  i < ListOfStuff.length; i++) 
{
console.log(ListOfStuff[i]);
}*/
