const user = localStorage.getItem("axisUser");
if (!user) {
  window.location.href = "index.html";
}

const habitInput = document.getElementById("newHabit");
const addHabitBtn = document.getElementById("addHabit");
const habitList = document.getElementById("habitList");

let habits = JSON.parse(localStorage.getItem("axisHabits")) || [];

function renderHabits() {
  habitList.innerHTML = "";

  habits.forEach((habit, index) => {
    const div = document.createElement("div");
    div.className = "habit";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = habit.done;

    checkbox.addEventListener("change", () => {
      habits[index].done = checkbox.checked;
      saveHabits();
    });

    const span = document.createElement("span");
    span.textContent = habit.text;

    div.appendChild(checkbox);
    div.appendChild(span);

    habitList.appendChild(div);
  });
}

function saveHabits() {
  localStorage.setItem("axisHabits", JSON.stringify(habits));
}

addHabitBtn.addEventListener("click", () => {
  const text = habitInput.value.trim();
  if (!text) return;

  habits.push({ text, done: false });
  habitInput.value = "";
  saveHabits();
  renderHabits();
});

renderHabits();

// Logout
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("axisUser");
  window.location.href = "index.html";
});
