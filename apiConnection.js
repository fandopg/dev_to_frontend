const urlDB = "http://localhost:8000";

const postPost = (title, image, content, date, tags, token, funcion) => {
  const url = `${urlDB}/publications`;
  const post = {
    title,
    image,
    content,
    date,
    tags,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
      token,
    },
  })
    .then((respuesta) => respuesta.json())
    .then((body) => funcion(body.payload))
    .catch((error) => console.log(error));
};

const getPost = (funcion) => {
  const url = `${urlDB}/publications`;
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((body) => {
      funcion(body.payload);
    })
    .catch((error) => console.log(error));
};

//aqui hace falta arreglar el getOne
const getPostConId = (funcion) => {
  const url = `${urlDB}/publications`;
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((mPost) => {
      const postCreados = Object.keys(mPost.payload).map((id) => {
        const post = mPost.payload[id];
        return {
          id,
          title: post.title,
          image: post.image,
          content: post.content,
          date: post.date,
          tags: post.tags,
        };
      });
      funcion(postCreados);
    })
    .catch((error) => console.log(error));
};

const deletePost = (id, token, funcion) => {
  const url = `${urlDB}/publications/${id}`;
  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      token,
    },
  })
    .then((respuesta) => respuesta.json())
    .then((body) => {
      funcion(body.payload);
    })
    .catch((error) => console.log(error));
};

const putPost = (title, image, content, date, tags, id, token, funcion) => {
  const url = `${urlDB}/publications/${id}`;
  const post = {
    title,
    image,
    content,
    date,
    tags,
  };

  fetch(url, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
      token,
    },
  })
    .then((respuesta) => respuesta.json())
    .then((body) => funcion(body.payload))
    .catch((error) => console.log(error));
};

const postUser = (userName, email, password, funcion) => {
  const url = `${urlDB}/users`;
  const user = {
    userName,
    email,
    password,
  };
  fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((respuesta) => respuesta.json())
    .then((body) => {
      funcion(body.payload);
      console.log(body.payload);
    })
    .catch((error) => console.log(error));
};

const postLogIn = (email, password, funcion) => {
  const url = `${urlDB}/auth/login`;
  const user = {
    email,
    password,
  };
  fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((respuesta) => respuesta.json())
    .then((body) => {
      funcion(body.payload);
      saveToken(body.payload);
    })
    .catch((error) => console.log(error));
};
