
function checkCode() {
  const code = document.getElementById('codeInput').value;
  const correctCode = "05.09.2003"; // Replace with your desired code

  if (code === correctCode) {
    document.body.style.backgroundImage = "url('assets/confetti.gif')"; // Change to the new GIF path
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";

    // Set a delay before showing the alert
    setTimeout(function() {
      alert("Glückwunsch du hast deinen Wichtel gefunden. Beim nächsten mal wird er dir einen Al Gadafi ausgeben :D");
    }, 10); // 10ms = 0.01 second delay (you can adjust this time)// Change the background after success
} else {
  // Display the failure message
  alert("Leider Falsch! Versuche s mit einer anderen Person");
}
}
