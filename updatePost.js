let editor2 = new Editor({
  element: document.getElementById("postBodyEdit"),
  status: [],
});

editor2.render();

var imageUrl = "";
const addCoverImage = (e) => {
  e.preventDefault();
  imageUrl = prompt("Image URL:");
};

const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get("id");

const updatePost = (e) => {
  e.preventDefault();

  let post = {};
  post["title"] = document.getElementById("postTitle").value;
  post["image"] = imageUrl;
  post["content"] = editor2.codemirror.getValue();
  post["date"] = document.getElementById("postDate").value;
  post["tags"] = document.getElementById("postTags").value;
  post["id"] = id;
  let token = localStorage.getItem("token");
  putPost(
    post.title,
    post.image,
    post.content,
    post.date,
    post.tags,
    post.id,
    token,
    (body) => {
      alert("Post updated successfully!");

      const delay = setTimeout(reload, 1000);

      function reload() {
        document.getElementById("home").click();
      }
    }
  );
};
