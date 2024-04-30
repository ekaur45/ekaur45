const contactForm = document.querySelector("#contact-form");
function onContactFormSubmit(e){
    e.preventDefault();
}
if(contactForm){
    contactForm.addEventListener("submit",onContactFormSubmit);
}