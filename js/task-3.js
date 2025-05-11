const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
    const nameOutput = event.target.value.trim();
    //   Можна ще й і цим способом:
    //   const nameOutput = textInput.value.trim();
    output.textContent = nameOutput || 'Anonymous';
});
