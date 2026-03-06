// Loader

window.addEventListener("load", function(){

document.getElementById("loader").style.display="none";

});

// Mobile Menu

const toggle=document.getElementById("menu-toggle");

const nav=document.getElementById("nav");

toggle.addEventListener("click",()=>{

nav.style.display = nav.style.display === "block" ? "none" : "block";

});

// Booking Form

document.getElementById("bookingForm")

.addEventListener("submit",function(e){

e.preventDefault();

document.getElementById("success").innerText =

"✅ Booking request received! Our team will contact you shortly.";


});