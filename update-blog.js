import { printBlog } from "./print-blog.js";

const updateDialog = document.querySelector(".update-dialog");
const addDialog = document.querySelector(".add-dialog");
const deleteDialog = document.querySelector(".delete-dialog");

export function updateBlog() {
  const retrievedPosts = JSON.parse(localStorage.getItem("blogPostings")) || [];

  const options = [];
  for (let i = 0; i < retrievedPosts.length; i++) {
    options.push(`post-${i}`);
  }

  const chooseUpdate = `
    <div class="choose-update">
      <h3>Choose the post you want to update</h3>
      <label for="post-lists">Select from the lists here</label>
      <br>
      <select id="post-lists">
        <option disabled selected value="0">Please Select Option</option>
        ${retrievedPosts.map((post, index) => {
          return `<option value=${options[index]}>${post.title}</option>`;
        })}
      </select>
    </div>
  `;

  const updateForm = `
    <form id="update-form">
      <label for="title-update">Update Title</label>
      <br>
      <input type="text" id="title-update" class="title-update" size="60">
      <br>
      <label for="summary-update">Update Summary</label>
      <br>
      <textarea id="summary-update" class="summary-update" rows="5" cols="60"></textarea> 
      <br>
      <br>
      <button type="button" class="update-cancel">
        Cancel
      </button>
      <button type="button" class="update-submit">
        Submit
      </button>
    </form>
  `;

  updateDialog.insertAdjacentHTML("beforeend", chooseUpdate);

  const updateLists = document.querySelector("#post-lists");

  let title = "";
  let date = "";
  let summary = "";

  const selectOption = (list) => {
    const whatYouUpdate = updateLists.options[updateLists.selectedIndex].value;

    for (let i = 0; i < list.length; i++) {
      title = document.querySelector(`.title-${i}`).innerHTML;
      date = document.querySelector(`.date-${i}`).innerHTML;
      summary = document.querySelector(`.summary-${i}`).innerHTML;

      if (list[i].classList.contains(whatYouUpdate)) {
        const form = document.querySelector("#update-form");
        if (form) form.remove();

        const chooseUpdateDiv = document.querySelector(".choose-update");
        chooseUpdateDiv.insertAdjacentHTML("beforeend", updateForm);

        return i;
      }
    }
  };
  const chooseOption = () => {
    const list = document.querySelectorAll("li");

    const index = selectOption(list);

    const updatedTitle = document.querySelector(".title-update");
    const updatedSummary = document.querySelector(".summary-update");
    const submitBtn = document.querySelector(".update-submit");
    const cancelBtn = document.querySelector(".update-cancel");
    const blogPost = document.querySelectorAll(".post");

    submitBtn.addEventListener("click", () => {
      for (let j = 0; j < blogPost.length; j++) {
        blogPost[j].remove();
      }

      const updatedDate = new Date();

      retrievedPosts[index].title = updatedTitle.value;
      retrievedPosts[index].date = `${updatedDate.toLocaleDateString(
        "en-US"
      )} (Updated)`;
      retrievedPosts[index].summary = updatedSummary.value;

      localStorage.setItem("blogPostings", JSON.stringify(retrievedPosts));
      printBlog(retrievedPosts);

      updateDialog.close();
    });

    cancelBtn.addEventListener("click", () => {
      updateDialog.close();
    });
  };

  updateLists.onchange = chooseOption;

  updateDialog.show();
  addDialog.close();
  deleteDialog.close();
}
