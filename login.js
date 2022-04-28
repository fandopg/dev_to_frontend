const iniciarSesion = (e) => {
  e.preventDefault();
  let user = {};
  user["email"] = document.getElementById("emailInput").value;
  user["password"] = document.getElementById("passwordInput").value;

  postLogIn(user.email, user.password);
};

const passIncorrecto = () => {
  const mensajePassIncorrecto = document.getElementById(
    "mensajePassIncorrecto"
  );
  mensajePassIncorrecto.innerHTML = `<h4 class="text-danger">Invalid password, please try again</h4>`;
};

const loginResponse = (res) => {
  if (res.success) {
    saveLocalStorage(res.payload.token, res.payload.id);
  } else {
    passIncorrecto();
  }
};

const saveLocalStorage = (token, id) => {
  localStorage.setItem("token", token);
  localStorage.setItem("userLoginId", id);
  // window.location.href = "./index.html";
};
