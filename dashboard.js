const user = localStorage.getItem("axisUser");

if (!user) {
  window.location.href = "index.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("axisUser");
  window.location.href = "index.html";
});
