const { ipcRenderer } = require("electron");

window.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.getElementById("closeBtn");
  const minimizeBtn = document.getElementById("minimizeBtn");
  const maximizeBtn = document.getElementById("maximizeBtn");

  closeBtn.addEventListener("click", () => {
    ipcRenderer.invoke("closeBtnPress");
  });
  minimizeBtn.addEventListener("click", () => {
    ipcRenderer.invoke("minimizeBtnPress");
  });
  maximizeBtn.addEventListener("click", () => {
    ipcRenderer.invoke("maximizeBtnPress");
  });
});
