import {
  app,
  auth,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./firebase.js";

const formRegister = document.getElementById("FormRegister");
formRegister.addEventListener("submit", (event) => {
  event.preventDefault();
  let email = document.getElementById("Email").value;
  let password = document.getElementById("Password").value;

  if (email.length == 0 || password.length == 0) {
    alert("Email or Password mustn't be empty!");
  } else {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        window.location.href = "./login.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
  formRegister.reset();
});
