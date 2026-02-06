document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Preencha todos os campos.");
    return;
  }

  // Simulação de login (MVP)
  localStorage.setItem("axisUser", email);

  // Redireciona
  window.location.href = "dashboard.html";
});

