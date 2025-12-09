function login(){
  localStorage.setItem("logged","yes");
  window.location="dashboard.html";
}
function register(){
  alert("Registered!");
  window.location="login.html";
}
if(localStorage.getItem("logged")=="yes"){
  if(location.pathname.endsWith("login.html")) location="dashboard.html";
}

