

var repeats = new Array();
var words = new Array ();

$().ready(function(){

var content = $("#docs-editor-container"); //content is everything

var nbsp = String.fromCharCode(160);  //chrome is dumb

var text = content[0].innerText.toLowerCase();    //text is everything but its a string now

var ListOfStuff = new Array();

text = text.split(nbsp); //split text into array

text.shift();


console.log(text);

/*
	//attempts to get rid of newline character ---NOT WORKING
	if(text[1] == "\n" || text[1] == "\r" || text[1] == "\t" || text[1] == "\b" || text[1] == "")
	{
		text[1] = text[1].substring(1);
	}
	*/

	for(var i = 0; i <  text.length; i++)   // first for loop goes to each element
	{
		if(text[i].charAt(text[i].length-1) == ".")
		{
			text[i] = text[i].substring(0, text[i].length - 1);
		}
	}

/*
	for(var i = 0; i <  text.length; i++)   // first for loop goes to each element
	{
		if(text[i] == "\n" || text[i] == "\r" || text[i] == "\t" || text[i] == "\b" || text[i] == "")
		{
			delete text[i];
			i--;
		}
	}
	*/
	

	console.log(text);	

var print = true;//boolean to determine if something should be printed or not

	for(var i = 0; i <  text.length; i++)   // first for loop goes to each element
	{
		if(text[i] == "\n" || text[i] == "\r" || text[i] == "\t" || text[i] == "\b" )
		{
			text.splice(i,1);
			i--;
		}
		
		else
		{

			print = true;   //set print to true
			var count = 0;//counter starts at 0 and increments each time a word is repeated

			for(var j = 0; j < text.length; j++)
			{
				if (text[i] ==  text[j])    //tests if strings are equal
				{
					if(i > j)
					{
						print = false;   //set print
					}

					else
					{
						count++;//count is incremented if a word is repeated
					}
				}	
			}

			badValues= ["i" , "the", "if", "how", "you", "i", "my", "about"];

			if(print == true && badValues.indexOf(text[i]) == -1 && text[i] !== null && count >= 3 && text[i] != "the" && text[i] != "i" && text[i] != "and" && text[i] != "a" && text[i]
			 != "my" && text[i] != "to" && text[i] != "at" && text[i] != "of" && text[i] != "i" && text[i] != "this" && text[i] != "me" && text[i] != "in" && text[i] != "how") //if the word has not been repeated print
			{
				repeats.push(count);
				words.push(text[i]);
			}
		}

	}
console.log(repeats);
console.log(words);
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse){
	
	if(message === "getData")
	{
		console.log("really got message");
		var object = {
			repeats: repeats, 
			words: words
		};
		console.log(object);
		sendResponse(object);

	}
});


