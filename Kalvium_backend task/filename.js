const express = require('express');
const app = express();

const history = [];

app.get('/', (req, res) => {
  res.send('Welcome to the Math Server!');
});

app.get('/history', (req, res) => {
  res.json(history);
});

app.get('/:operands*', (req, res) => {
  const { operands } = req.params;
  const operations = operands.split('/');

  let question = '';
  let answer = 0;

  try {
    for (let i = 0; i < operations.length; i += 2) {
      const num1 = parseFloat(operations[i]);
      const operator = operations[i + 1];
      const num2 = parseFloat(operations[i + 2]);

      switch (operator) {
        case 'plus':
          answer += num1 + num2;
          question += `${num1}+${num2}`;
          break;
        case 'minus':
          answer += num1 - num2;
          question += `${num1}-${num2}`;
          break;
        case 'into':
          answer += num1 * num2;
          question += `${num1}*${num2}`;
          break;
        case 'divided':
          answer += num1 / num2;
          question += `${num1}/${num2}`;
          break;
        default:
          throw new Error('Invalid operator');
      }

      if (i !== operations.length - 3) {
        question += operator;
      }
    }

    const operation = {
      question: question,
      answer: answer,
    };

    history.push(operation);
    if (history.length > 20) {
      history.shift();
    }

    res.json(operation);
  } catch (error) {
    res.status(400).json({ error: 'Invalid operation' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
