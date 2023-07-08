

document.getElementById("btn").addEventListener("click", () => {
  ipc.emit("close");
});
