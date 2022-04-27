const iniciarSesion = (e) => {
  e.preventDefault();
  let user = {};
  user["email"] = document.getElementById("emailInput").value;
  user["password"] = document.getElementById("passwordInput").value;

  postLogIn(user.email, user.password, (body) => {
    alert("Bienvenido!");
  });
};

const saveToken = (token) => {
  localStorage.setItem("token", token);
};
