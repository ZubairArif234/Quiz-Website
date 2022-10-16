

var registervar = document.getElementById('register')
var loginvar = document.getElementById('login')

function register (){
    registervar.style.display = "block"
    loginvar.style.display = "none"

}

var emaillocal = document.getElementById('emailAddress')
var passwordlocal = document.getElementById('phoneNumber')
var FName = document.getElementById('firstName');
var LName = document.getElementById('lastName');
var emailregix = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


function login (){


    if (FName.value.trim() == ""){
        Swal.fire(
        'Error',
        'Enter First Name',
        'error'
      )}else if (LName.value.trim() == "" ){
        Swal.fire(
        'Error',
        'Enter Last Name',
        'error'
      )}else if (emaillocal.value === "" || !emaillocal.value.match(emailregix)){
        Swal.fire(
            'Error',
            'Incorrect Email',
            'error'
          )
      }else if (passwordlocal.value.trim() == "" ){
        Swal.fire(
            'Error',
            'Invalid Password',
            'error'
          )
      }else{



    loginvar.style.display = "block"
    registervar.style.display = "none"

var localpassword = passwordlocal.value
var localemail = emaillocal.value
window.localStorage.setItem("email" , localemail)
window.localStorage.setItem("password" , localpassword)
}

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


if (loginMeEmail != emailmatch  ) {
    Swal.fire(
        'Error',
        'Email not registered',
        'error'
      )

    }else if(loginMePassword != passwordmatch){
        Swal.fire(
            'Error',
            'Invalid Password',
            'error'
          )   
    }else{
        window.location.href = "main.html"
    }
   
    
}



    


