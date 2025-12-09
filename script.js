const firebaseConfig={ /* your Firebase config */ };
firebase.initializeApp(firebaseConfig);

const auth=firebase.auth();

/* LOGIN */
loginBtn?.addEventListener("click",()=>{
  auth.signInWithEmailAndPassword(
    emailInput.value,passwordInput.value
  ).then(()=>{
    window.location="index.html";
  }).catch(e=>{
    loginError.textContent=e.message;
  });
});

/* SIGNUP */
signupBtn?.addEventListener("click",()=>{
  auth.createUserWithEmailAndPassword(
    emailInput.value,passwordInput.value
  ).then(()=>{
    window.location="index.html";
  }).catch(e=>{
    loginError.textContent=e.message;
  });
});

/* Redirect if not logged in */
auth.onAuthStateChanged(user=>{
  if(!user && window.location.pathname.includes("index.html")){
    window.location="login.html";
  }
})
