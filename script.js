//DOM
const $addButton    = document.querySelector('.add-button');
const $inputNumber  = document.querySelector('.input-number');
const $errorMessage = document.querySelector('.error-message');
const $resultList   = document.querySelector('.result-list');


function createItem(input) {
    $resultList.replaceChildren();
    for(let i = 1;i <= input;i++) {
        const $li = document.createElement('li');
        let output = '';
        $li.textContent = i % 15 === 0 ? 'FizzBuzz'
                        : i %  3 === 0 ? 'Fizz'
                        : i %  5 === 0 ? 'Buzz'
                        : String(i);
        $resultList.appendChild($li);
    }
}
$addButton.addEventListener('click', function() {
    const input = $inputNumber.value;
    input < 0 || input === '' || isNaN(input) ? $errorMessage.textContent = '1~100までの数字を入れてください。'
                             : $errorMessage.textContent = '';
    createItem(input);
    $inputNumber.value = '';
})