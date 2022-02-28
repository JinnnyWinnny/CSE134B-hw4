import { printBlog } from "./print-blog.js";

const deleteDialog = document.querySelector(".delete-dialog");
const addDialog = document.querySelector(".add-dialog");
const updateDialog = document.querySelector(".update-dialog");

export function deleteBlog() {
  const retrievedPosts = JSON.parse(localStorage.getItem("blogPostings")) || [];
  console.log(retrievedPosts);

  const options = [];
  for (let i = 0; i < retrievedPosts.length; i++) {
    options.push(`post-${i}`);
  }

  const chooseDelete = `
    <div class="choose-delete">
      <h3>Choose the post you want to delete</h3>
      <label for="delete-lists">Select from the lists here</label>
      <br>
      <select id="delete-lists">
        <option disabled selected value="0">Please Select Option</option>
        ${retrievedPosts.map((post, index) => {
          return `<option value=${options[index]} >${post.title}</option>`;
        })}
      </select>
    </div>
  `;

  const promptDelete = `
    <div class="prompt-delete">
      <br>
      <h3>Are you sure you want to delete?</h3>
      <button type="button" class="delete-cancel">
        Cancel
      </button>
      <button type="button" class="delete-submit">
        Submit
      </button>
    </div>
  `;

  deleteDialog.insertAdjacentHTML("beforeend", chooseDelete);

  const deleteLists = document.querySelector("#delete-lists");

  const selectOption = (list) => {
    const whatYouDelete = deleteLists.options[deleteLists.selectedIndex].value;

    for (let i = 0; i < list.length; i++) {
      if (list[i].classList.contains(whatYouDelete)) {
        const promptDeleteDiv = document.querySelector(".prompt-delete");
        if (promptDeleteDiv) promptDeleteDiv.remove();

        const chooseDeleteDiv = document.querySelector(".choose-delete");
        chooseDeleteDiv.insertAdjacentHTML("beforeend", promptDelete);
        return i;
      }
    }
  };

  const chooseOption = () => {
    const list = document.querySelectorAll("li");

    const index = selectOption(list);

    const submitBtn = document.querySelector(".delete-submit");
    const cancelBtn = document.querySelector(".delete-cancel");
    const blogPost = document.querySelectorAll(".post");

    submitBtn.addEventListener("click", () => {
      for (let j = 0; j < blogPost.length; j++) {
        blogPost[j].remove();
      }

      retrievedPosts.splice(index, 1);

      localStorage.setItem("blogPostings", JSON.stringify(retrievedPosts));
      printBlog(retrievedPosts);

      deleteDialog.close();
    });

    cancelBtn.addEventListener("click", () => {
      deleteDialog.close();
    });
  };

  deleteLists.onchange = chooseOption;

  deleteDialog.show();
  addDialog.close();
  updateDialog.close();
}
