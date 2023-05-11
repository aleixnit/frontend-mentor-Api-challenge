let button = document.querySelector('#dado'); // ¡Buena suerte!
let advice = document.querySelector('.card__quote');
let adviceID = document.querySelector('#adviceID');

button.addEventListener("click", function () {
    getNote();
  });

  async function getNote () {
    const respuesta = await fetch("https://api.adviceslip.com/advice");
    const datos = await respuesta.json();

    advice.textContent = datos.slip.advice;
    adviceID.textContent = datos.slip.id;
  }