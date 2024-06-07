document.getElementById("login-button").addEventListener("click", function () {
  const militaryId = document.getElementById("military-id").value;
  const password = document.getElementById("password").value;
  const militaryIdInput = document.getElementById("military-id");
  const idErrorMessage = document.getElementById("id-error-message");
  const pwErrorMessage = document.getElementById("pw-error-message");
  const militaryIdRegex = /^\d{2}-\d{8}$/;

  if (!militaryId || !password) {
    idErrorMessage.textContent = "군번과 비밀번호를 모두 입력하세요.";
    idErrorMessage.classList.remove("hidden");
    idErrorMessage.style.display = "#E53E3E";
  } else if (!militaryIdRegex.test(militaryId)) {
    idErrorMessage.textContent = "올바른 군번 형식이 아닙니다.";
    idErrorMessage.classList.remove("hidden");
    idErrorMessage.style.display = "#E53E3E";
    militaryIdInput.style.display = "#E53E3E";
  } else {
    if (militaryId !== "올바른 군번" || password !== "올바른 비밀번호") {
      errorMessage.textContent = "군번 또는 비밀번호가 잘못되었습니다.";
      errorMessage.style.display = "#E53E3E";
    } else {
      errorMessage.style.display = "none";
      window.location.href = "main.html";
    }
  }
});
