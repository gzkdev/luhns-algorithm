// LUHN'S ALGORITHM
function checkLuhnSum(numbers) {
  const CREDIT_CARD_NUMBER_LENGTH = 16;
  if (numbers.length !== CREDIT_CARD_NUMBER_LENGTH) return false;

  let sum = 0;
  for (let i = CREDIT_CARD_NUMBER_LENGTH - 1; i >= 0; i--) {
    let num = numbers[i];
    if ((CREDIT_CARD_NUMBER_LENGTH - i) % 2 === 0) {
      num *= 2;
      if (num > 9) num -= 9;
    }
    sum += num;
  }

  return sum % 10 === 0;
}

// UI LOGIC
document.addEventListener("DOMContentLoaded", () => {
  const cardInput = document.getElementById("card-input");
  const statusBadge = document.getElementById("status-badge");
  const resultMessage = document.getElementById("result-message");
  const clearBtn = document.getElementById("clear-btn");

  if (!cardInput) return;

  cardInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (value.length > 16) value = value.slice(0, 16);

    const formattedValue = value.replace(/(.{4})/g, "$1 ").trim();
    e.target.value = formattedValue;

    if (value.length === 16) {
      const digitArray = value.split("").map(Number);
      const isValid = checkLuhnSum(digitArray);

      updateUI(isValid);
    } else {
      resetUI();
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      cardInput.value = "";
      resetUI();
      cardInput.focus();
    });
  }

  function updateUI(isValid) {
    if (!resultMessage || !statusBadge || !cardInput) return;

    resultMessage.classList.remove("opacity-0");
    cardInput.classList.remove("input-success", "input-error", "shake");

    if (isValid) {
      statusBadge.textContent = "Valid";
      statusBadge.className = "status-badge badge-success";
      resultMessage.textContent = "This is a valid credit card number.";
      resultMessage.className = "text-sm text-green-600 transition-opacity";
      cardInput.classList.add("input-success");
    } else {
      statusBadge.textContent = "Invalid";
      statusBadge.className = "status-badge badge-destructive";
      resultMessage.textContent = "Invalid checksum. Please check the digits.";
      resultMessage.className = "text-sm text-red-600 transition-opacity";

      cardInput.classList.add("input-error");

      // Trigger shake animation on input
      void cardInput.offsetWidth; // Force reflow
      cardInput.classList.add("shake");
    }
  }

  function resetUI() {
    if (!resultMessage || !statusBadge || !cardInput) return;

    statusBadge.textContent = "Waiting";
    statusBadge.className = "status-badge badge-secondary";
    resultMessage.classList.add("opacity-0");
    cardInput.classList.remove("input-success", "input-error", "shake");
  }
});
