let fechaPost = new Date();
fechaPost = fechaPost.toDateString();

let editor = new Editor({
  element: document.getElementById("postBody"),
  status: [],
});
editor.render();

var imageUrl = "";
const addCoverImage = (e) => {
  e.preventDefault();
  imageUrl = prompt("Image URL:");
};

let token = localStorage.getItem("token");

const crearPost = (e) => {
  e.preventDefault();
  let post = {};
  post["title"] = document.getElementById("postTitle").value;
  post["image"] = imageUrl;
  post["content"] = editor.codemirror.getValue();
  post["date"] = fechaPost;
  post["tags"] = document.getElementById("postTags").value;

  postPost(post.title, post.image, post.content, post.date, post.tags, token);
};

const createPostResponse = (res) => {
  console.log(res);
  if (res.success) {
    alert("Post published successfully!");
    window.location.href = "./index.html";
  } else {
    // localStorage.removeItem("token");
    // localStorage.removeItem("userLoginId");
    window.location.href = "./login.html";
  }
};
