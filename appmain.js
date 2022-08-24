

var html = document.getElementById('html')
var css = document.getElementById('css')
var js = document.getElementById('js')

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
