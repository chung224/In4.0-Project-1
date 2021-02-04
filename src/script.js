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
