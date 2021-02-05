// Start of Navbar JS elements

function nav() {
  document.getElementById("home").className = "homenooverlay";
}
function navout() {
  document.getElementById("home").className = "homeoverlay";
}

function nav2() {
  document.getElementById("Products").className = "homenooverlay2";
}
function navout2() {
  document.getElementById("Products").className = "homeoverlay2";
}

function nav3() {
  document.getElementById("Meet_the_team").className = "homenooverlay3";
}
function navout3() {
  document.getElementById("Meet_the_team").className = "homeoverlay3";
}

function nav4() {
  document.getElementById("Contact_Us").className = "homenooverlay4";
}
function navout4() {
  document.getElementById("Contact_Us").className = "homeoverlay4";
}

function nav() {
  document.getElementById("home").className = "homenooverlay";
}
function navout() {
  document.getElementById("home").className = "homeoverlay";
}

function nav2() {
  document.getElementById("Products").className = "homenooverlay2";
}
function navout2() {
  document.getElementById("Products").className = "homeoverlay2";
}

function nav3() {
  document.getElementById("Meet_the_team").className = "homenooverlay3";
}
function navout3() {
  document.getElementById("Meet_the_team").className = "homeoverlay3";
}

function nav4() {
  document.getElementById("Contact_Us").className = "homenooverlay4";
}
function navout4() {
  document.getElementById("Contact_Us").className = "homeoverlay4";
}

// End of Navbar JS elements

// Start of highlight bg

function highlightBG() {
  document.getElementById("inspire").className = "AttachOnMouseOverText";
}
function highlightOutBG() {
  document.getElementById("inspire").className = "AttachOnMouseOutText";
}

function highlightBG2() {
  document.getElementById("create").className = "AttachOnMouseOverText";
}
function highlightOutBG2() {
  document.getElementById("create").className = "AttachOnMouseOutText";
}

function highlightBG3() {
  document.getElementById("connect").className = "AttachOnMouseOverText";
}
function highlightOutBG3() {
  document.getElementById("connect").className = "AttachOnMouseOutText";
}

// End of highlight bg

// Start of enlarge image on home page

function enlargepic() {
  document.getElementById("card1").className = "card1";
  document.getElementById("artist1").className = "artist1_hover";
}
function enlargepic2() {
  document.getElementById("card1").className = "card1enlarge";
  document.getElementById("artist1").className = "artist1";
}

function enlargepic3() {
  document.getElementById("card2").className = "card2";
  document.getElementById("artist2").className = "artist2_hover";
}
function enlargepic4() {
  document.getElementById("card2").className = "card2enlarge";
  document.getElementById("artist2").className = "artist2";
}

function enlargepic5() {
  document.getElementById("card2").className = "card2";
  document.getElementById("artist2").className = "artist2_hover";
}
function enlargepic6() {
  document.getElementById("card2").className = "card1enlarge";
  document.getElementById("artist2").className = "artist2";
}

function enlargepic5() {
  document.getElementById("card3").className = "card3";
  document.getElementById("artist3").className = "artist3_hover";
}
function enlargepic6() {
  document.getElementById("card3").className = "card3enlarge";
  document.getElementById("artist3").className = "artist3";
}

// End of enlarge image on home page

// Start of JS for Contact page

// form inner html
function validateForm() {
  document.getElementById("contact").innerHTML =
    "Thanks! We'll be in touch soon";
}

// email alert
function alertEmail() {
  alert("You will be redirected to your email application here.");
}

// class alert
function alertClass() {
  alert("You will be redirected to your external booking here.");
}

// chat alert
function alertChat() {
  alert("You will be redirected to your external online chat system here.");
}

// call alert functions: email, class, chat
let element = document.querySelector("#redirect");
element.addEventListener("click", alertEmail);

let classes = document.querySelector("#classes");
classes.addEventListener("click", alertClass);

let chat = document.querySelector("#chat");
chat.addEventListener("click", alertChat);

// End of JS for Contact page

// To top added on each page

$("a[href='#top']").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

// Product page lazy loading

function loadingCheck() {
  if ($(".citOnRock").is(":appeared")) {
    console.log("Work");
  }

  if ($(".vibrant").is(":appeared")) {
    console.log("Vibrant");
  }
}

setInterval(loadingCheck, 1);
