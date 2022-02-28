import { printBlog } from "./print-blog.js";
import { addBlog } from "./add-blog.js";
import { updateBlog } from "./update-blog.js";
import { deleteBlog } from "./delete-blog.js";

const addBlogBtn = document.querySelector(".add-blog");
const updateBlogBtn = document.querySelector(".update-blog");
const deleteBlogBtn = document.querySelector(".delete-blog");

const initialBlogPostings = [
  {
    title: "First Blog",
    date: "1/3/2022",
    summary:
      "This is my first blog posting. I am excited to learn more in this class CSE 134B and am looking forward to having great experience from the class. Today was my first day of the class, and super interesting!",
  },
  {
    title: "Second Blog",
    date: "2/15/2022",
    summary:
      "Today is my boyfriend's birthday. We are planning on going Songhak SD to eat delicious dinner. I bought him an Airpods PRO and he said 'Thank you' to me more than 100 times. He is so cute.",
  },
  {
    title: "Third Blog",
    date: "2/19/2022",
    summary:
      "Today is my birthday!! Tonight I and my boyfriend will invite our friends to celebrate our birthday. Jun bought me a keyboard which has such a wonderful feeling when I'm typing. I love it!",
  },
];

localStorage.setItem("blogPostings", JSON.stringify(initialBlogPostings));

printBlog(initialBlogPostings);

addBlogBtn.addEventListener("click", () => {
  const noBlogPrompt = document.querySelector(".no-blog-prompt");

  if (noBlogPrompt) noBlogPrompt.remove();

  addBlog();
});

updateBlogBtn.addEventListener("click", () => {
  const updateDialog = document.querySelector(".update-dialog");

  if (updateDialog.children) {
    for (let i = 0; i < updateDialog.children.length; i++) {
      updateDialog.children[i].remove();
    }
  }
  updateBlog();
});

deleteBlogBtn.addEventListener("click", () => {
  const deleteDialog = document.querySelector(".delete-dialog");

  if (deleteDialog.children) {
    for (let i = 0; i < deleteDialog.children.length; i++) {
      deleteDialog.children[i].remove();
    }
  }
  deleteBlog();
});
