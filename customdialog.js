const msgBox = document.querySelector("#msgBox");
const msg = document.querySelector(".msg");

const alertBtn = document.querySelector(".alert");
const confirmBtn = document.querySelector(".confirm");
const promptBtn = document.querySelector(".prompt");

const alertDialog = document.querySelector(".alert-dialog");
const confirmDialog = document.querySelector(".confirm-dialog");
const promptDialog = document.querySelector(".prompt-dialog");

const alertOK = document.querySelector(".alert-ok");
const confirmOK = document.querySelector(".confirm-ok");
const promptOK = document.querySelector(".prompt-ok");

const confirmCANCEL = document.querySelector(".confirm-cancel");
const promptCANCEL = document.querySelector(".prompt-cancel");
var output_name = document.querySelector("#input");
var result = "";

const addHiddenClass = () => {
  if (!msgBox.classList.contains("hidden")) {
    msgBox.classList.add("hidden");
  }
};

alertBtn.addEventListener("click", () => {
  addHiddenClass();
  confirmDialog.close();
  promptDialog.close();
  alertDialog.show();
});
alertOK.addEventListener("click", () => {
  alertDialog.close();
});

confirmBtn.addEventListener("click", () => {
  addHiddenClass();
  alertDialog.close();
  promptDialog.close();
  confirmDialog.show();
});
confirmOK.addEventListener("click", () => {
  msg.innerHTML = "Confirm result: true";
  msgBox.classList.remove("hidden");
  confirmDialog.close();
});
confirmCANCEL.addEventListener("click", () => {
  msg.innerHTML = "Confirm result: false";
  msgBox.classList.remove("hidden");
  confirmDialog.close();
});

promptBtn.addEventListener("click", () => {
  addHiddenClass();
  alertDialog.close();
  confirmDialog.close();
  promptDialog.show();
});

promptOK.addEventListener("click", () => {
  result = DOMPurify.sanitize(output_name.value);
  msg.innerHTML = `name: ${result}`;
  msgBox.classList.remove("hidden");
  promptDialog.close();
});
