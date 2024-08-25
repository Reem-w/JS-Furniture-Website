/*  -- Its in a script tag in index.html
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed , from index");
  displayCartCount();
});
*/

//cookies
function setCookie(key, value) {
  var expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + 5);
  document.cookie =
    key + "=" + value + ";expires=" + expireDate.toUTCString() + ";path=/";
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var splits = value.split("; " + name + "=");
  if (splits.length == 2) return splits.pop().split(";").shift();
}

function deleteCookie(key) {
  var expireDate = new Date();
  expireDate.setDate(expireDate.getDate() - 1);
  document.cookie = key + "=deleting;expires=" + expireDate;
}

function hasCookie(name) {
  return getCookie(name) ? true : false;
}

function allCookieList() {
  return document.cookie;
}

//Put Name from cookies in navbar
var Name = document.querySelectorAll(".navbar-nav a")[0];
Name.innerHTML = "hello, " + getCookie("name");

//Logout Function
function logout() {
  console.log("Logging out");
  deleteCookie("name");
  window.location.replace("./login.html");
  localStorage.clear();
}

//Slider
var img = document.getElementsByTagName("img")[0];
var indx = img.getAttribute("src")[9];
// console.log(indx);

var before = document.getElementsByClassName("left-arrow")[0];
var after = document.getElementsByClassName("right-arrow")[0];
// console.log(before);
// console.log(after);

function moveToNext() {
  if (indx == 3) indx = 1;
  else indx++;
  img.setAttribute("src", "./images/" + indx + ".jpg");
}

function moveToPre() {
  if (indx == 1) indx = 3;
  else indx--;
  img.setAttribute("src", "./images/" + indx + ".jpg");
}

before.onclick = moveToPre;

after.onclick = moveToNext;

var interval = setInterval(moveToNext, 4000);

//ArrowUP

var scrollBtn = document.getElementById("arrowUp");

window.onscroll = scrollUpFunction;

function scrollUpFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

scrollBtn.onclick = function () {
  window.scroll(0, 0);
};
