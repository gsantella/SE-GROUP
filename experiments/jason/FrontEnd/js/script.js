
document.getElementById('autoEmailer').addEventListener('click', () => {
  const url = 'https://api.myjson.com/bins';
  const data = {};
  data.recieverName = document.getElementById('recieverName').value;
  data.recieverEmail = document.getElementById('recieverEmail').value;
  data.expirationDate = document.getElementById('expirationDate').value;
  data.fName = document.getElementById('fName').value;
  data.lName = document.getElementById('lName').value;
  data.email = document.getElementById('email').value;
  data.msg = document.getElementById('msg').value;
  console.log(data);
  async function sendData() {
    try {
      const response = await fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      console.log('Success:', JSON.stringify(json));
    } catch (error) {
      console.error('Error:', error);
    }
  }
  sendData();
});
