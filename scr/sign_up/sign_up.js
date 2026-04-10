function togglePW(id) {
  const pw = document.getElementById(id);
  pw.type = pw.type === "password" ? "text" : "password";
}

document.querySelector(".signup_btn").addEventListener("click", function () {
  this.blur();

  const name = document.getElementById("name").value;
  const nameErr = document.getElementById("name_err");

  const email = document.getElementById("email").value;
  const emailErr = document.getElementById("email_err");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const pw = document.getElementById("pw").value;
  const pwErr = document.getElementById("pw_err");

  const pwConfirm = document.getElementById("pw_confirm").value;
  const pwConfirmErr = document.getElementById("pw_confirm_err");

  let valid = true;

  if (name === "") {
    nameErr.textContent = "⚠ 이름을 입력해주세요.";
    valid = false;
  } else {
    nameErr.textContent = "";
  }

  if (email === "") {
    emailErr.textContent = "⚠ 이메일을 입력해주세요.";
    valid = false;
  } else if (!emailRegex.test(email)) {
    emailErr.textContent = "⚠ 이메일 형식이 올바르지 않습니다.";
    valid = false;
  } else {
    emailErr.textContent = "";
  }

  if (pw === "") {
    pwErr.textContent = "⚠ 비밀번호를 입력해주세요.";
    valid = false;
  } else if (pw.length < 4) {
    pwErr.textContent = "⚠ 비밀번호는 4자 이상이어야 합니다.";
    valid = false;
  } else {
    pwErr.textContent = "";
  }

  if (pwConfirm === "") {
    pwConfirmErr.textContent = "⚠ 비밀번호 확인을 입력해주세요.";
    valid = false;
  } else if (pw !== pwConfirm) {
    pwConfirmErr.textContent = "⚠ 비밀번호가 일치하지 않습니다.";
    valid = false;
  } else {
    pwConfirmErr.textContent = "";
  }

  if (valid) {
    document.getElementById("popup").classList.add("active");
    window.location.href = "/scr/main/main.html";
  }
  function closePopup() {
    document.getElementById("popup").classList.remove("active");
    window.location.href = "/scr/sign_in/sign_in.html";
  }
});
