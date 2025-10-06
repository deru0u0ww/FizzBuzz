//DOM --------------------------------------------------
const $ =(sel)=> document.querySelector(sel);

const $addButton    = $('.add-button');
const $resetButton  = $('.reset-button');
const $inputNumber  = $('.input-number');
const $errorMessage = $('.error-message');
const $resultList   = $('.result-list');
$resetButton.disabled = true;

//関数処理 -----------------------------------------------
function createItem(n) {
    $resultList.replaceChildren();
    for(let i = 1; i<=n;i++ ) {
        const $li = document.createElement('li');
        let mod3 = i % 3 === 0;
        let mod5 = i % 5 === 0;
        let output = '';
        mod3 && mod5 ? output = 'FizzBuzz'
                     : mod3 ? output = 'Fizz'
                     : mod5 ? output = 'Buzz'
                     : output = i;
        mod3 && mod5 ? $li.classList.add('fizzbuzz')
                     : mod3 ? $li.classList.add('fizz')
                     : mod5 ? $li.classList.add('buzz')
                     : '';
        $li.textContent = output;
        $resultList.appendChild($li);
    }
}
function handleSubmit() {
    const n = Number($inputNumber.value);
    if(!isValidation(n)) {
        showMessage('1~100までの数字を入れてください');
        return;
    }
    createItem(n);
    clearAll();
}
function clearAll() {
    $errorMessage.textContent = '';
    $inputNumber.value = '';
}
function isValidation(n) { 
    if(n === 0 || isNaN(n)) return false;
    return Number.isInteger(n) && n >= 1 && n <= 100;
 }
 function showMessage(msg) {
    $errorMessage.textContent = msg;
}

//イベント処理 --------------------------------------
$resetButton.addEventListener('click',function() {
    $resultList.replaceChildren();
    clearAll();
    $resetButton.disabled = true;
})
$addButton.addEventListener('click', function(n) {
    handleSubmit();
    $inputNumber.value = '';
    $resetButton.disabled = false;
})