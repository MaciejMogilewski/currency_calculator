const submitBtnRef = document.querySelector('[type="submit"]');
const inputsRef = document.querySelectorAll('[class^="form-"]:not(label, div, .form-check-input)');
const addOpinionRef = document.getElementById('addOpinion');

function validateInput(inputRef){
    if (inputRef.value === ''){
        inputRef.classList.add('is-invalid');
    } else {
        inputRef.classList.remove('is-invalid');
    }
}

function validateInputs(inputsRef){
    inputsRef.forEach((input) => {
        validateInput(input);
    })
}
function hackAgreement(btnRef){
    // btnRef.parentElement.previousElementSibling.firstElementChild.firstElementChild.checked = true;
    btnRef.closest('form').querySelector('.form-check-input').checked = true;
}

function addOpinion(target) {
    const  parent = this.parentElement;
    const newOpinion = parent.previousElementSibling.cloneNode(true);
    const textareaRef = newOpinion.querySelector('textarea');
    const labelRef = newOpinion.querySelector('label');

    textareaRef.value = '';
    const id = parseInt(textareaRef.dataset.count) + 1;
    textareaRef.dataset.count = '' + id;
    textareaRef.id = `${textareaRef.id.split('-')[0]}-${id}`
    labelRef.setAttribute('for', textareaRef.id);

    parent.parentElement.insertBefore(newOpinion, parent);
}

submitBtnRef.addEventListener('click', function ( evt) {
    evt.preventDefault();
    validateInputs(inputsRef);
    hackAgreement(evt.target);
});

addOpinionRef.addEventListener('click', function (evt) {
    evt.preventDefault();
    addOpinion.call(this)
})

