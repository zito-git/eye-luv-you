const disabledStyles = {
  backgroundColor: "#E6E6E7",
  cursor: "not-allowed",
};
const abledStyles = {
  backgroundColor: "#DC5788",
  cursor: "pointer",
};

const phoneRegex = /^010-\d{4}-\d{4}$/; // 전화번호 정규식

document.getElementById("identityBtn").addEventListener("click", function () {
    const additionalContent = document.getElementById('additionalContent');
    additionalContent.innerHTML = `
    <div class="mt-8 mx-4 gap-1 flex flex-col border-b group border-[#E6E6E7]">
      <p class="text-[14px] font-medium">인증 번호</p>
      <div class="flex justify-between">
        <input
          type="text"
          placeholder="인증번호를 입력해주세요."
          class="py-2 placeholder:text-[#BABABA] placeholder:text-[16px] group-focus:border-[#DC5788] focus:outline-none"
        />
        <button id="retryBtn" type="button" class="w-[74px] h-[56px] mx-4 rounded-lg text-[#FFFFFF] text-[14px] p-4 abled">
          재전송
        </button>
      </div>
      <span id="error-message" class="error text-[#E53E3E] text-[12px]"></span>
    </div>
    `;
});

document.getElementById("phoneInput").addEventListener("input", function () {
  const inputField = document.getElementById("phoneInput");
  const submitButton = document.getElementById("identityBtn");
  const errorMessage = document.getElementById("error-message");

  // 전화번호 형식 자동으로 적용
  let phoneNumber = inputField.value.replace(/[^0-9]/g, ""); // 숫자만 남김
  if (phoneNumber.length > 3) {
    phoneNumber = phoneNumber.slice(0, 3) + "-" + phoneNumber.slice(3);
  }
  if (phoneNumber.length > 8) {
    phoneNumber = phoneNumber.slice(0, 8) + "-" + phoneNumber.slice(8);
  }

  if (phoneNumber.length > 13) {
    phoneNumber = phoneNumber.slice(0, 13); // 최대 길이 초과 시 잘라냄
  }

  inputField.value = phoneNumber;

  // 전화번호 형식 검증
  if (phoneNumber.length < 13 || !phoneRegex.test(phoneNumber)) {
    submitButton.disabled = true;
    submitButton.classList.add("disabled");
    submitButton.classList.remove("abled");
    errorMessage.textContent = "전화번호를 확인해주세요.";
  } else {
    submitButton.disabled = false;
    submitButton.classList.remove("disabled");
    submitButton.classList.add("abled");
    errorMessage.textContent = "";
  }
});
