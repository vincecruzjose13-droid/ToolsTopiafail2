const firebaseConfig = {
  apiKey: "AIzaSyDF3uAmiKxXSMvh5SxV6P4bJMiyUpJvYhU",
  authDomain: "toolstopia-52884.firebaseapp.com",
  projectId: "toolstopia-52884",
  storageBucket: "toolstopia-52884.firebasestorage.app",
  messagingSenderId: "290382407266",
  appId: "1:290382407266:web:91a35d03492c6c8eee933b",
  measurementId: "G-73BEW8F7YD"
};
firebase.initializeApp(firebaseConfig);

const auth=firebase.auth();

document.addEventListener("DOMContentLoaded", () => {

  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");

  loginBtn?.addEventListener("click", () => {
    auth.signInWithEmailAndPassword(
      emailInput.value, passwordInput.value
    )
    .then(() => window.location = "index.html")
    .catch(e => alert(e.message));
  });

  signupBtn?.addEventListener("click", () => {
    auth.createUserWithEmailAndPassword(
      emailInput.value, passwordInput.value
    )
    .then(() => window.location = "index.html")
    .catch(e => alert(e.message));
  });
});


/* Redirect if not logged in */
auth.onAuthStateChanged(user=>{
  if(!user && window.location.pathname.includes("index.html")){
    window.location="login.html";
  }
})
