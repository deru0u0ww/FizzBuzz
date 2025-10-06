//DOM
const $ = (sel) => document.querySelector(sel);
const $input            = $('.add-button');
const $resetButton      = $('.reset-button');
const $inputNumber      = $('.input-number');
const $errorMessage     = $('.error-message');
const $resultList       = $('result-list');
$resetButton.disabled   = true;

$addButton.addEventListener('click', () => {
    const n = parseAndValidate();
    if (n == null) return;   // エラー時は処理しない
    createItem(n);
    $inputNumber.value = '';
  });

  // Enterキーでも実行
  $inputNumber.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      $addButton.click();
    }
  });

  // クリア
  $resetButton.addEventListener('click', clearAll);
function parseAndValidate() {
    const n = Number($inputNumber.value);
    if (!Number.isInteger(n) || n < 1 || n > 100) {
      showError('1〜100までの整数を入力してください。');
      return null;
    }
    showError('');
    return n;
}
function createItem(n) {
    $resultList.replaceChildren();
    const flag = document.createDocumentFragment();
    for(let i = 1; i<=n;i++ ) {
        const $li = document.createElement('li');
        if(i % 15 === 0) {
            output = 'FizzBuzz';
            $li.classList.add('fizzbuzz');
        }else if(i % 3 === 0) {
            output = 'Fizz';
            $li.classList.add('fizz');
        }else if(i % 5 === 0) {
            output = 'Buzz';
            $li.classList.add('buzz');
        }else{
            output = i;
        }
        flag.appendChild($li);
    }
    $resultList.appendChild(flag);
    $resetButton.disabled = false;
}
function clearAll() {
    $resultList.replaceChildren();
    showError('');
    $resetButton.disabled = true;
}

function showError() {
    $errorMessage.textContent = msg || '';
}