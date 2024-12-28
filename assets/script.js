
function checkCode() {
  const code = document.getElementById('codeInput').value;
  const correctCode = "05.09.2003"; // Replace with your desired code

  if (code === correctCode) {
    alert("Glückwunsch du hast deinen Wichtel gefunden. Beim nächsten mal wird er dir einen Al Gadafi ausgeben :D");
  } else {
    alert("Leider Falsch! Versuche s mit einer anderen Person");
  }
}
