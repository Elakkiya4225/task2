<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Factorial Calculator</title>
</head>
<body>
  <h1>Factorial Calculator</h1>
  <input type="number" id="numberInput" placeholder="Enter a number">
  <button onclick="calculateFactorial()">Calculate Factorial</button>

  <p id="result"></p>

  <script>
    function calculateFactorial() {
      // Get the number input
      const number = document.getElementById('numberInput').value;
      
      if (number === '' || number < 0) {
        document.getElementById('result').innerHTML = 'Please enter a valid non-negative number.';
        return;
      }
      
      let factorial = 1;
      
      // Calculate factorial
      for (let i = 1; i <= number; i++) {
        factorial *= i;
      }
      
      // Display the result
      document.getElementById('result').innerHTML = Factorial of ${number} is ${factorial};
    }
  </script>
</body>
</html>
