const generateBtn = document.getElementById("generateBtn");
const categorySelect = document.getElementById("category");
const result = document.getElementById("result");

/* ------------------------------
   GENERAZIONE PROCEDURALE
------------------------------ */

// Per brand
function generateBrandName() {
  const start = ["Zen", "Lum", "Kal", "Vel", "Str", "Aur", "Nex", "Syn", "Tal", "Vor"];
  const mid = ["a", "e", "i", "o", "u", "y", "ae", "io", "eo"];
  const end = ["ra", "on", "yx", "ex", "ix", "or", "um", "en", "is"];

  return (
    start[Math.floor(Math.random() * start.length)] +
    mid[Math.floor(Math.random() * mid.length)] +
    end[Math.floor(Math.random() * end.length)]
  );
}

// Per fantasy
function generateFantasyName() {
  const start = ["Ael", "Vor", "Ser", "Thal", "Mor", "Ely", "Zar", "Kel"];
  const mid = ["a", "e", "i", "o", "u", "ae", "ia", "or"];
  const end = ["dor", "mir", "thas", "riel", "drin", "vorn", "lith", "kar"];

  return (
    start[Math.floor(Math.random() * start.length)] +
    mid[Math.floor(Math.random() * mid.length)] +
    end[Math.floor(Math.random() * end.length)]
  );
}

/* ------------------------------
   CARICAMENTO LISTE ESTERNE
------------------------------ */

async function loadNames(category) {
  try {
    const response = await fetch(`data/${category}.txt`);
    const text = await response.text();
    const list = text
      .split("\n")
      .map(n => n.trim())
      .filter(n => n.length > 0);

    return list;
  } catch (e) {
    return [];
  }
}

/* ------------------------------
   GENERATORE PRINCIPALE
------------------------------ */

async function generateName() {
  const category = categorySelect.value;

  if (!category) {
    result.textContent = "Seleziona una categoria";
    return;
  }

  // Carica lista dal file
  const list = await loadNames(category);

  // Se la lista è vuota → generazione procedurale
  if (list.length === 0) {
    if (category === "brand") {
      result.textContent = generateBrandName();
      return;
    }
    if (category === "fantasy") {
      result.textContent = generateFantasyName();
      return;
    }
  }

  // Altrimenti → nome casuale dalla lista
  const randomName = list[Math.floor(Math.random() * list.length)];
  result.textContent = randomName;
}

generateBtn.addEventListener("click", generateName);
