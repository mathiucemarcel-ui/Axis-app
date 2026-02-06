const habitInput = document.getElementById("newHabit");
const addHabitBtn = document.getElementById("addHabit");
const habitList = document.getElementById("habitList");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

let habits = JSON.parse(localStorage.getItem("habits")) || [];

function saveHabits() {
  localStorage.setItem("habits", JSON.stringify(habits));
}

function calculateProgress() {
  if (habits.length === 0) {
    progressFill.style.width = "0%";
    progressText.innerText = "0%";
    return;
  }

  const completed = habits.filter(h => h.done).length;
  const percent = Math.round((completed / habits.length) * 100);

  progressFill.style.width = percent + "%";
  progressText.innerText = percent + "%";
}

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
      calculateProgress();
    });

    const span = document.createElement("span");
    span.innerText = habit.text;

    div.appendChild(checkbox);
    div.appendChild(span);
    habitList.appendChild(div);
  });

  calculateProgress();
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
