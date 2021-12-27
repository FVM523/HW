//Get the button
var mybutton = document.getElementById("back2Top");

// When the user scrolls down 30px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//cookies
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    var cook2 = document.getElementById("cook2");
    cook2.setAttribute("style", "display: block");
    document.getElementById("user").innerHTML = user;
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}


function modify() {
    
  var cook = document.getElementById("cook");
          cook.setAttribute("style", "display: none");
  var cook2 = document.getElementById("cook2");
          cook2.setAttribute("style", "display: block");
  document.getElementById("user").innerHTML =user;

  
  
}
// Formulaire
function validateEmail(champsText){
  var Email = document.getElementById('nc_mail').value;
  const pattern = /\S+\@\S+\.\S/;
  var champsText = true;
  if(pattern.test(Email)== false){
      alert('ce que vous avez saisi ne ressemble pas à une adresse e-mail valide!!');
  }
  return champsText;
}