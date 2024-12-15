const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const nameError = document.getElementById("errorName");
  const emailError = document.getElementById("errorMail");
  const messageError = document.getElementById("errorMessage");

  let validForm = true;

  if (name === ""){
    nameError.classList.remove("displayNone");
    validForm = false;
  } else {
    nameError.classList.add("displayNone");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)){
    emailError.classList.remove("displayNone");
    validForm = false; 
  } else {4
    emailError.classList.add("displayNone");
  }

  if (message.length < 10){
    messageError.classList.remove("displayNone");
    validForm = false;
  } else {
    messageError.classList.add("displayNone");
  }

  if (validForm) {
    const contactRequest = {
      name: name,
      emall: email,
      message: messageError,
    };

    alert(name + ", tu mensaje ha sido enviado con éxito!");
  }

});