
let htmlres = localStorage.getItem("html")
let cssres = localStorage.getItem("css");
let jsres = localStorage.getItem("js");


let htmlresult = document.getElementById("htmlR");
let cssresult = document.getElementById("cssR");
let jsresult = document.getElementById("jsR");

var html = document.getElementById('html')
var css = document.getElementById('css')
var js = document.getElementById('js')

if (htmlres==null){
    // htmlresult.innerHTML= "Not attemped";
}else{
htmlresult.innerHTML = htmlres;
}

if(cssres==null){
    // cssres.innerHTML="Not attemped"
}else{
cssresult.innerHTML = cssres;
}

if(jsres==null){
    // jsres.innerHTML="Not attemped"
}else{
jsresult.innerHTML = jsres;
}

html.onclick = function(){
    window.location.href = "html.html"
}

css.onclick = function(){
    window.location.href = "css.html"
}

js.onclick = function (){
    window.location.href = "js.html"
}

function logoutfun (){
    window.location.href = "index.html"
}
