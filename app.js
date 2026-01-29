const dimensions = [
  { id: "life", label: "Life / Responsibilities" },
  { id: "body", label: "Body / Energy" },
  { id: "growth", label: "Personal Growth" }
];

const app = document.getElementById("app");

dimensions.forEach(d => {
  const box = document.createElement("div");
  box.className = "card";
  box.innerHTML = `
    <h3>${d.label}</h3>
    <button onclick="markDone('${d.id}')">Done</button>
  `;
  app.appendChild(box);
});

function markDone(id) {
  alert(id + " marked as done");
}
