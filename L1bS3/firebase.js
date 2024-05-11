// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTV-wr6Gkq__OuKnq4Hiqk_TBIeAM714s",
  authDomain: "l1bs3-1c6b6.firebaseapp.com",
  projectId: "l1bs3-1c6b6",
  storageBucket: "l1bs3-1c6b6.appspot.com",
  messagingSenderId: "154948645039",
  appId: "1:154948645039:web:c980399cddd369df14245a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const register = document.getElementById("register");
register.addEventListener("submit", (event) => {
  event.preventDefault();
  let usernameInput = document.getElementById("username").value;
  let passwordInput = document.getElementById("password").value;

  if (passwordInput.length < 6) {
    alert("password requirs at least 6 letters");
  } else {
    createUserWithEmailAndPassword(auth, usernameInput, passwordInput)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log((errorCode, errorMessage));
      });
  }
});
