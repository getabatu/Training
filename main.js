var firstNumber = document.getElementById('firstNumber');
var secondNumber = document.getElementById('secondNumber');
var operation = document.getElementById('operation');

function checkOperationAndExecute(){
  var first = Number(firstNumber.value);
  var second = Number(secondNumber.value);
  var finalOperation = operation.value.toLowerCase();

  if(finalOperation == "add"){
    add();
  }else if(finalOperation == "divide" ){
    divide();
  }else if(finalOperation == "substract"){
    substract();
  }else if(finalOperation == "multiply"){
    multiply();
  }else{
    console.log("operation not found");
  }
}

function add(){
  var first = Number(firstNumber.value);
  var second = Number(secondNumber.value);

  console.log(first + second);
}

function substract(){
  var first = Number(firstNumber.value);
  var second = Number(secondNumber.value);

  console.log(first - second);
}

function multiply(){
  var first = Number(firstNumber.value);
  var second = Number(secondNumber.value);

  console.log(first * second);
}
function divide(){
  var first = Number(firstNumber.value);
  var second = Number(secondNumber.value);

  console.log(first / second);
}