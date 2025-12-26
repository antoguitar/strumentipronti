const generateBtn = document.getElementById("generateBtn");
const categorySelect = document.getElementById("category");
const result = document.getElementById("result");

const names = {
  persone: ["Lorenzo", "Giulia", "Matteo", "Sofia", "Alessio", "Chiara", "Davide", "Elena"],
  brand: ["Zentro", "Lumora", "Nexivo", "Velion", "Stralix", "Aurevo", "Kalyx", "Bravico"],
  fantasy: ["Aldurion", "Seraphis", "Velindra", "Thalorien", "Myrakel", "Zerath", "Elowyn", "Drakmor"],
  animali: ["Milo", "Luna", "Rocky", "Nala", "Pippo", "Kira", "Leo", "Maya"],
  bambini: ["Edo", "Lia", "Timo", "Mia", "Nico", "Zoe", "Luca", "Eva"]
};

function generateName() {
  const category = categorySelect.value;

  if (!category) {
    result.textContent = "Seleziona una categoria";
    return;
  }

  const list = names[category];
  const randomName = list[Math.floor(Math.random() * list.length)];

  result.textContent = randomName;
}

generateBtn.addEventListener("click", generateName);

