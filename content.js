$().ready(function() {

$("body").css("background-color", "red");
console.log("hello there");
content= $("#docs-editor-container");

text= content[0].innerText;
console.log(text);

});