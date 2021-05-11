var translate = document.querySelector("#btn-translate");
var inputtxt= document.querySelector("#txt-input"); //All are query selectors to wire the html elements with js to perform task.
var outputtxt= document.querySelector("#output");

var serverUrl="https://api.funtranslations.com/translate/minion.json"



function getTranslatedUrl(text){
    return serverUrl+"?"+"text="+ text
}
function errorHandler(error){
    console.log("error occured", error);
    alert("server problem, Try after sometime.")
}
function js (){
    
    var  textinput= inputtxt.value;

    fetch(getTranslatedUrl(textinput))
    
    .then(response => response.json())
    .then(json => {
        var translatedtext= (json.contents.translated);
        console.log(translatedtext)

        outputtxt.innerText= translatedtext;
    })
    .catch(errorHandler)
}
translate.addEventListener("click" ,  js );  //it will call the function js it's called call back func.