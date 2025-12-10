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
const db = firebase.database();


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

document.addEventListener("DOMContentLoaded", () => {

  const addToolBtn = document.getElementById("addToolBtn");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const addBorrowBtn = document.getElementById("addBorrowBtn");

  const newToolName = document.getElementById("newToolName");
  const newTaskText = document.getElementById("newTaskText");
  const borrowToolName = document.getElementById("borrowToolName");
  const borrowerName = document.getElementById("borrowerName");

  /* ADD TOOL */
  addToolBtn?.addEventListener("click", () => {
    const toolName = newToolName.value.trim();
    if(!toolName || !auth.currentUser) return;

    const uid = auth.currentUser.uid;
    db.ref("inventory/" + uid).push({ name: toolName });
    newToolName.value = "";
  });

  /* ADD TASK */
  addTaskBtn?.addEventListener("click", () => {
    const taskText = newTaskText.value.trim();
    if(!taskText || !auth.currentUser) return;

    const uid = auth.currentUser.uid;
    db.ref("tasks/" + uid).push({ text: taskText });
    newTaskText.value = "";
  });

  /* ADD BORROW */
  addBorrowBtn?.addEventListener("click", () => {
    const tool = borrowToolName.value.trim();
    const person = borrowerName.value.trim();
    if(!tool || !person || !auth.currentUser) return;

    const uid = auth.currentUser.uid;
    db.ref("borrow/" + uid).push({ tool, person });
    borrowToolName.value = "";
    borrowerName.value = "";
  });
});

