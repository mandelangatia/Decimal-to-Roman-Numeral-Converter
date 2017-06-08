// Business logic
var convertToRoman = function(num){
  var decimalValue = [1000,900,500,400,100,90,50,40,10,10,9,5,4,1]
  var romanNumeral = ['M','CM','D','CD','C','XC','L','XL','X','LX','V','IV','V','I']
  var romanized = ' ';
  if (num <=3999) {
  for(var index=0; index<decimalValue.length; index++){
    while(decimalValue[index]<=num){
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }
  return romanized;}
  else {
    return false;
  }
}
// user interface logic
$(document).ready(function() {
  $("form#roman-number").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    var result = convertToRoman(userInput);
    $("#showResult").text(result);
  });
});
