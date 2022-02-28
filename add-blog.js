import { printBlog } from "./print-blog.js";

const addDialog = document.querySelector(".add-dialog");
const updateDialog = document.querySelector(".update-dialog");
const deleteDialog = document.querySelector(".delete-dialog");

const submitBtn = document.querySelector(".submit");
const cancelBtn = document.querySelector(".cancel");

const title = document.querySelector(".title");
const summary = document.querySelector(".summary");

export function addBlog() {
  const blogPost = document.querySelectorAll(".post");

  addDialog.show();
  updateDialog.close();
  deleteDialog.close();

  const retrievedPosts = JSON.parse(localStorage.getItem("blogPostings")) || [];

  submitBtn.addEventListener("click", () => {
    // remove the blog postings before update
    for (let i = 0; i < blogPost.length; i++) {
      blogPost[i].remove();
    }

    const date = new Date();

    const newPost = {
      title: title.value,
      date: date.toLocaleDateString("en-US"),
      summary: summary.value,
    };

    retrievedPosts.push(newPost);
    localStorage.setItem("blogPostings", JSON.stringify(retrievedPosts));

    printBlog(retrievedPosts);

    addDialog.close();
  });

  cancelBtn.addEventListener("click", () => {
    addDialog.close();
  });
}
