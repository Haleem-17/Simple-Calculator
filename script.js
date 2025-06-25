function appendValue(val) {
  document.getElementById('display').value += val;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    let expression = document.getElementById('display').value;

    // Replace functions with actual JavaScript
    expression = expression
       .replace(/sin([^)]+)/g, 'Math.sin(1 * Math.PI / 180)')
      .replace(/cos([^)]+)/g, 'Math.cos(1 * Math.PI / 180)')
      .replace(/tan([^)]+)/g, 'Math.tan(1 * Math.PI / 180)')
      .replace(/√\(/g, 'Math.sqrt(');

    let result = eval(expression);
    document.getElementById('display').value = result;

    // Save to history
    let historyItem = document.createElement('li');
    historyItem.textContent = expression ={result};
    document.getElementById('history').appendChild(historyItem);

  } catch {
    document.getElementById('display').value = 'Error';
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
