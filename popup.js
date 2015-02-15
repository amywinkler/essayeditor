chrome.tabs.query({active: true}, function(tabs){

  chrome.tabs.sendMessage(tabs[0].id, "getData", function(object){
    object.repeats
    object.words


    for (var i = 0; i < object.words.length; i++) {
    	if(object.words[i] !== "")
    	{
    		document.write(object.words[i] + " repeats " + object.repeats[i] + " times." + "<br>");
    	}
    	
    };
  })
})