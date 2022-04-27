const crearUsuario = (e) => {
  e.preventDefault();
  let user = {};
  user["userName"] = document.getElementById("userNameInput").value;
  user["email"] = document.getElementById("emailInput").value;
  user["password"] = document.getElementById("passwordInput").value;

  postUser(user.userName, user.email, user.password, (body) => {
    alert("User created!");
  });
};
