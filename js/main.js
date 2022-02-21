// reverse the number
document.querySelector('#reverse--button--result').onclick = executeResult;
function executeResult() {
    let valueText = document.querySelector('#input-text').value;
    console.log(valueText);
    let valueResult = (('' + valueText).split('').reverse().join(''));
    document.querySelector('#reverse--result-box').innerHTML = valueResult;
}

// summa and multiply of number
document.querySelector('#math--button--result').onclick = executeMathResult;
function executeMathResult() {
    let valueText = document.querySelector('#math-text').value;
    console.log(valueText);
    function getNumbersSum(num){
        return num.toString().split('').reduce(function(a, b) {
            return +a + +b;
        })
    }
    function getNumbersMultiply(num){
        return num.toString().split('').reduce(function(a, b) {
            return +a * +b;
        })
    }
    let valueSumResult = getNumbersSum(valueText);
    let valueMultiplyResult = getNumbersMultiply(valueText);
    document.querySelector('#math-sum--result-box').innerHTML = valueSumResult;
    document.querySelector('#math-multiply--result-box').innerHTML = valueMultiplyResult;
}
document.querySelector('#black-color--button--result').onclick = executeBlackColorResult;
function executeBlackColorResult() {
    document.querySelector('body').classList.add("switchMode");
}
document.querySelector('#default-color--button--result').onclick = executeDefaultColorResult;
function executeDefaultColorResult() {
    document.querySelector('body').classList.remove("switchMode");
}