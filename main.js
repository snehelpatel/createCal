

var runCalculator = function (event){
  event.preventDefault();
  var firstVal= document.getElementById ('value-one');
  var secondVal= document.getElementById ('value-two')
var firstN = Number(firstVal.value);
var secondN = Number(secondVal.value);
var sum = firstN + secondN;
resultsBox.innerHTML = sum;


};

var resultsBox = document.getElementById ('answer')

var goButton = document.getElementById ('calculate-button');

goButton.addEventListener('click', runCalculator);
