//DOM
const $addButton    = document.querySelector('.add-button');
const $inputNumber  = document.querySelector('.input-number');
const $errorMessage = document.querySelector('.error-message');
const $resultList   = document.querySelector('.result-list');


function createItem(input) {
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
    const input = Number($inputNumber.value);
    createItem(input);
})