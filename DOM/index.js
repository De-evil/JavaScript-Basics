function SumOfNumbers() {
  var one = document.getElementById("One");
  var two = document.getElementById("Two");
  var output = document.getElementById("sum");

  var oneValue = Number(one.value);
  var twoValue = Number(two.value);
  var total = oneValue + twoValue;

  output.textContent = total;
}

function Reset() {
    document.getElementById("One");
    document.getElementById("Two");
    document.getElementById("sum").textContent = 'Result'
}
