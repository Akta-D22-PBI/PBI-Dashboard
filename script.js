
const firebaseConfig = {
  apiKey: "AIzaSyBHE1aJIkSGu-3X6uMCoFmw3Gah14dng58",
  authDomain: "my-pbi-dashboard.firebaseapp.com",
  projectId: "my-pbi-dashboard",
  storageBucket: "my-pbi-dashboard.appspot.com",
  messagingSenderId: "776252651257",
  appId: "1:776252651257:web:757618a489ed6123d95428",
  measurementId: "G-263J3ZLSJJ"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.getElementById("btn").onclick = () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  auth.signInWithEmailAndPassword(email, pass)
    .then(() => {
      console.log("Login berhasil");
      window.location = "index.html";
    })
    .catch(err => {
      console.error("Login gagal:", err.message);
      document.getElementById("msg").textContent = err.message;
    });
};
