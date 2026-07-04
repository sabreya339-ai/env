function checkInputs() {

let f1 = document.getElementById("field1").value;
let f2 = document.getElementById("field2").value;
let f3 = document.getElementById("field3").value;
let f4 = document.getElementById("field4").value;
let msg =document.getElementById("message");

if (f1 === "" || f2 === "" || f3 === "" || f4 === "") {
  msg.innerText = "Please Enter Your Information";
  msg.style.color =  "red";
} else {
  msg.innerText = "Information Had Sent";
  msg.style.color = "#6B8E23";
  }
}

function showText() {
  let text = document.getElementById("myText");
  text.style.display = "block";
}

function showText2() {
  let text = document.getElementById("myText2");
  text.style.display = "block";
}