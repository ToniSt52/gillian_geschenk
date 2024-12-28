
function checkCode() {
  const code = document.getElementById('codeInput').value;
  const correctCode = "1234"; // Replace with your desired code

  if (code === correctCode) {
    alert("Congratulations! You entered the correct code.");
  } else {
    alert("Wrong code. Try again!");
  }
}
