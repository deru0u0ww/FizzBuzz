//DOM
const $addButton    = document.querySelector('.add-button');
const $resetButton  = document.querySelector('.reset-button');
const $inputNumber  = document.querySelector('.input-number');
const $errorMessage = document.querySelector('.error-message');
const $resultList   = document.querySelector('.result-list');

$resetButton.disabled = true;

function createItem(input) {
    $resultList.replaceChildren();
    for(let i = 1;i <= input;i++) {
        const $li = document.createElement('li');
        let output = '';
        if(i % 15 === 0) {
            output += 'FizzBuzz';
            $li.classList.add('fizzbuzz');
        }else if(i % 3 === 0) {
            output += 'Fizz';
            $li.classList.add('fizz');
        }else if(i % 5 === 0) {
            output += 'Buzz';
            $li.classList.add('buzz');
        }else{
            output += i;
        }
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
