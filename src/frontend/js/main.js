document.getElementById('fToC').addEventListener('click', () => {
  const temp = document.getElementById('f1').value;

  convertFtoC(temp);
});

document.getElementById('cToF').addEventListener('click', () => {
  const temp = document.getElementById('c2').value;
  convertCtoF(temp);
});


function convertFtoC(num) {
  const final = fahrenheitToCelsius(num);
  document.getElementById('c1').value = final;
}

function convertCtoF(num) {
  const final = celsiusToFahrenheit(num);
  document.getElementById('f2').value = final;
}

// Dynamic API Example
document.querySelector('button').addEventListener('click', () => {
  alert('Howdy!');
  fetch('http://localhost:3000/color')
    .then((resp) => resp.json())
    .then((json) => {
      document.querySelector('#dynamic-selector').innerHTML = json.color;
    })
    .then(alert('I\'m done!'));
});
