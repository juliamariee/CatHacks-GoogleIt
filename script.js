function makeSearchSmall() {
  var search = document.getElementById("rcorners2").value;
  document.getElementById("small-logo").src =
    "https://cdn.glitch.com/608d00bb-5a60-43f2-b656-1a498870fd39%2FGoogle%20It..png?v=1607724025790";
  document.getElementById("header-search").style.visibility = "visible";
  document.getElementById("header-submit").style.visibility = "visible";
  document.getElementById("header-search").placeholder = search;
}

function getInput() {
  // alert("button works bois")
}

function search() {
  makeSearchSmall();

  var input = document.getElementById("rcorners2").value;
  document.getElementById("header").innerHTML =
    "About 1 result (0.00 seconds) ";
  document.getElementById("cite").innerHTML = "www.googleit.com";
  document.getElementById("afterLink").innerHTML = "> Just > Google > It";
  document.getElementById("results").innerHTML = "Idk bro just google it";
  document.getElementById("content").innerHTML = `Literally just go to Google and search it there I have no idea what "${input}" is`;
  document.getElementById("homepage").remove();
}

function search2() {
  var input = document.getElementById("header-search").value;
  document.getElementById("header-search").placeholder = input;
  document.getElementById("header").innerHTML =  "About 1 results (0.00 seconds) ";
  document.getElementById("cite").innerHTML = "www.googleit.com";
  document.getElementById("afterLink").innerHTML = "> just > google > it";
  document.getElementById("results").innerHTML = "Idk bro just google it";
  document.getElementById("content").innerHTML = `Literally just go to Google and search it there I have no idea what "${input}" is`;
    
}

function feelingLucky() {
  alert("You shouldn't.");
}

$("button").click(function(event) {
  event.preventDefault();
});
