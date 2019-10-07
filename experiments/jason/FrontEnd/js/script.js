
document.getElementById('autoEmailer').addEventListener('click', () => {
  const url = 'https://api.myjson.co/bins';
  const data = {};
  data.recieverName = document.getElementById('recieverName').value;
  data.recieverEmail = document.getElementById('recieverEmail').value;
  data.expirationDate = document.getElementById('expirationDate').value;
  data.fName = document.getElementById('fName').value;
  data.lName = document.getElementById('lName').value;
  data.email = document.getElementById('email').value;
  data.msg = document.getElementById('msg').value;
  async function sendData() {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      M.toast({ html: 'Successfully set up Auto Eamiler!' });
      console.log('Success:', JSON.stringify(json));
    } catch (error) {
      M.toast({ html: 'Something went wrong )=' });
    }
  }
  sendData();
});
