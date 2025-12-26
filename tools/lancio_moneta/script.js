const flipBtn = document.getElementById("flipBtn");
const coin = document.getElementById("coin");
const front = document.getElementById("coin-front");
const back = document.getElementById("coin-back");
const result = document.getElementById("result");

function flipCoin() {
  // Evita doppi click durante l’animazione
  if (coin.classList.contains("flipping")) return;

  coin.classList.add("flipping");

  const isTesta = Math.random() < 0.5;

  // Cambio faccia a metà animazione (sincronizzato col flip)
  setTimeout(() => {
    if (isTesta) {
      front.style.transform = "rotateY(0deg)";
      back.style.transform = "rotateY(180deg)";
      result.textContent = "È uscito: Testa";
    } else {
      front.style.transform = "rotateY(180deg)";
      back.style.transform = "rotateY(0deg)";
      result.textContent = "È uscito: Croce";
    }
  }, 600);

  // Fine animazione
  setTimeout(() => {
    coin.classList.remove("flipping");
  }, 1200);
}

flipBtn.addEventListener("click", flipCoin);
