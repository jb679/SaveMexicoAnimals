let animalCount = 1;

function updateTicker() {
  document.getElementById("animalTicker").innerText = animalCount;
}

function incrementTicker() {
  animalCount++;
  updateTicker();
}

// Automatically increment every 10 seconds
setInterval(() => {
  incrementTicker();
}, 7000);
