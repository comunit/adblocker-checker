let title = document.getElementsByClassName("display-4");
let innerLead = document.getElementsByClassName("lead");

if (document.getElementById("8778shd99dshb")) {
  document.title = "Adblock not is use";
  title[0].innerHTML = "ADBLOCK NOT IN USE";
  innerLead[0].innerHTML = "ADBLOCK IS NOT ACTIVE ON THIS PAGE";
  title[0].classList.add("text-success");
  innerLead[0].classList.add("text-success");
} else {
  title[0].classList.add("text-danger");
  innerLead[0].classList.add("text-danger");
  document.title = "Adblock in use";
}
