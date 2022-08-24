

var registervar = document.getElementById('register')
var loginvar = document.getElementById('login')

function register (){
    registervar.style.display = "block"
    loginvar.style.display = "none"

}

var emaillocal = document.getElementById('emailAddress')
var passwordlocal = document.getElementById('phoneNumber')


function login (){
    loginvar.style.display = "block"
    registervar.style.display = "none"

var localpassword = passwordlocal.value
var localemail = emaillocal.value
window.localStorage.setItem("email" , localemail)
window.localStorage.setItem("password" , localpassword)

console.log (localStorage.getItem("email"))
console.log (localStorage.getItem("password"))
}

var loginemailinputpassword = document.getElementById('form2Example27')
var loginemailinputemail = document.getElementById('form2Example17')
var loginMeEmail = loginemailinputemail.value
var loginMePassword = loginemailinputpassword.value
var emailmatch = localStorage.getItem("email")
var passwordmatch = localStorage.getItem("password")

function loginfun (){
    var loginemailinputpassword = document.getElementById('form2Example27')
var loginemailinputemail = document.getElementById('form2Example17')
var loginMeEmail = loginemailinputemail.value
var loginMePassword = loginemailinputpassword.value
var emailmatch = localStorage.getItem("email")
var passwordmatch = localStorage.getItem("password")


if (loginMeEmail === emailmatch  ) {
    if (loginMePassword === passwordmatch){
        window.location.href = "main.html"
       
     
    }else { 
        swal("Opps!", "Incorrect password!", "error");  
    }

    }else{
        swal("Oops!", "Email not registered!", "error");  
    }
    if(loginMeEmail === "" && loginMePassword === ""){
        swal("Error!", "Enter email and password!", "error");  
    }



    
}



    


