const num = Math.floor(Math.random() *100)+1;

//DOM
const $addButton    = document.querySelector('.add-button');
const $inputNumber  = document.querySelector('.input-number');
const $errorMessage = document.querySelector('.error-message');
const $resultList   = document.querySelector('.result-list');


function createItem() {
    for(let i = 1;i < num;i++) {
        const $li = document.createElement('li');
        let output = '';
        $li.textContent = i % 15 === 0 ? 'FizzBuzz'
                        : i %  3 === 0 ? 'Fizz'
                        : i %  5 === 0 ? 'Buzz'
                        : String(i);
        $resultList.appendChild($li);
    }
}
createItem();