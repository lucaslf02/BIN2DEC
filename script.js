window.addEventListener("load", start);

var btnConvert = null;
var btnRandom = null;
var inputBynary = null;
var result = null;
var valueBynary = "";

function start() {
  btnConvert = document.querySelector("#btnConvert");
  btnRandom = document.querySelector("#btnRandom");
  inputBynary = document.querySelector("#InputBynary");
  result = document.querySelector("#result");
  input();
  random();
  calculate();
}

function input() {
  function handlerInput(event) {
    let value = event.target.value;
    if (!validate(value)) {
      inputBynary.value = "";
      alert("Only values 0 or 1 are accepted!!!");
    } else {
      valueBynary = value;
    }
  }
  inputBynary.addEventListener("change", handlerInput);
  inputBynary.addEventListener("keyup", handlerInput);
}

function calculate(){
    function handlerButtonCalculate(event){
        let result = "";
        if(valueBynary!==""){
            result = bin2dec(valueBynary);
            textResult(result);
        }else{
            alert("Before calculating the value must be informed!!!");
        }
    }
    btnConvert.addEventListener('click',handlerButtonCalculate);
}

function textResult(value){
    result.innerHTML = value;
}

function random(){
    function handlerButtonRandom(event){
        let amount = Math.floor(Math.random() * 8);
        var valueRandom ="";
        for(i=0;i<=amount;i++){
            valueRandom += Math.floor(Math.random() * 2);
        }
        inputBynary.value = valueRandom;
        valueBynary = valueRandom;
    }
    btnRandom.addEventListener('click',handlerButtonRandom);
}
