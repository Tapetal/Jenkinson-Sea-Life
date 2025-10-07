var counterContainer = document.querySelector(".website-counter");
<<<<<<< HEAD
var visitCount = localStorage.getItem("page_view");visitCount

if(visitCount){
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view",visitCount);
}else{
  visitCount = 1;
  localStorage.setItem("page_view");
}
counterContainer.innerHTML = visitCount;

//Update local storage value
localStorage.setItem("page_view", visitCount);
=======
var visitCount = parseInt(localStorage.getItem("page_view") || "0", 10);
visitCount = visitCount + 1;
localStorage.setItem("page_view", String(visitCount));
if (counterContainer) {
counterContainer.textContent = visitCount;
}
>>>>>>> 217b761 (Reinitialized repo)

var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
faq[i].addEventListener("click", function () {
/* Toggle between adding and removing the "active" class,
to highlight the button that controls the panel */
this.classList.toggle("active");

/* Toggle between hiding and showing the active panel */
var body = this.nextElementSibling;
if (body.style.display === "block") {
body.style.display = "none";
} else {
body.style.display = "block";
}
});
}
