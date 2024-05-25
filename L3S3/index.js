import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCHggMOZKTspn5FKC4Fx5SZhPXwmUWdA6M",
  authDomain: "l2s3-a38c0.firebaseapp.com",
  projectId: "l2s3-a38c0",
  storageBucket: "l2s3-a38c0.appspot.com",
  messagingSenderId: "970565908689",
  appId: "1:970565908689:web:14ddce625e08a578f06df0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const querySnapshot = await getDocs(collection(db, "user"));
let Header = document.getElementById("TitleHere");
let Body = document.getElementById("DescHere");
const form = document.getElementById("Form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;

  try {
    const docRef = await addDoc(collection(db, "Info"), {
      title: title,
      description: description,
    });
    console.log("submit success");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});
const output = document.getElementById("output");
const querySnapshot = await getDocs(collection(db, "Info"));
querySnapshot.forEach((doc) => {
  output.innerHTML += `<h2>${doc.data().title}</h2>
  <p>${doc.data().description}</p>`;
});
