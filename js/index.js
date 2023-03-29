
const d20 = document.querySelector(".botaod20");
const numeroDoConselho = document.querySelector(".number");
const descricaoDoConselho = document.querySelector(".text");

async function getAdvice() {
    const resposta = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await resposta.json();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    numeroDoConselho.innerHTML = adviceId;
    descricaoDoConselho.innerHTML = adviceText;
}

d20.addEventListener("click", getAdvice);

getAdvice();