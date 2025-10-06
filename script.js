//DOM
const $ =(sel)=> document.querySelector(sel);

const $addButton    = $('.add-button');
const $resetButton  = $('.reset-button');
const $inputNumber  = $('.input-number');
const $errorMessage = $('.error-message');
const $resultList   = $('.result-list');
$resetButton.disabled = true;

function createItem(input) {
    $resultList.replaceChildren();
    for(let i = 1;i <= input;i++) {
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
$addButton.addEventListener('click', function() {
    const input = $inputNumber.value;
    if(input > 100) {
        clear();
        return;
    };
    input < 0 || input === '' || isNaN(input) 
                               ? $errorMessage.textContent = '1~100までの数字を入れてください。'
                               : $errorMessage.textContent = '';
    createItem(input);
    $inputNumber.value = '';
    $resetButton.disabled = false;
})
$resetButton.addEventListener('click',function() {
    $resultList.replaceChildren();
    $errorMessage.textContent = '';
    $resetButton.disabled = true;
})
function clear() {
    $inputNumber.value = '';
    $errorMessage.textContent = '1~100までの数字を入れてください';
}
