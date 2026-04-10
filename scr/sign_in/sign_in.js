const users = [{ email: "admin@admin.com", password: "admin" }];

function switchTab(tab) {
  document.getElementById("member").style.display = "none";
  document.getElementById("guest").style.display = "none";
  document.getElementById(tab).style.display = "flex";

  document
    .querySelectorAll(".tab")
    .forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");
}

function togglePW() {
  const pw = document.getElementById("pw");
  pw.type = pw.type === "password" ? "text" : "password";
}

document.querySelector(".login_btn").addEventListener("click", function () {
  this.blur();

  const email = document.getElementById("email").value;
  const emailError = document.getElementById("email_err");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    emailError.textContent = "⚠ 이메일을 입력해주세요.";
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "⚠ 이메일 형식이 올바르지 않습니다.";
  } else {
    emailError.textContent = "";
  }

  const pw = document.getElementById("pw").value;
  const pwError = document.getElementById("pw_err");
  const user = users.find((u) => u.email === email);

  if (pw === "") {
    pwError.textContent = "⚠ 비밀번호를 입력해주세요.";
  } else if (!user || user.password !== pw) {
    pwError.textContent = "⚠ 비밀번호가 틀렸습니다.";
  } else {
    pwError.textContent = "";
    window.location.href = "/scr/main.html";
  }
});