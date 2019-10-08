
document.getElementById('autoEmailer').addEventListener('click', () => {
  const url = 'http://127.0.0.1:3000/data';
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
    } catch (error) {
      M.toast({ html: 'Something went wrong )=' });
    }
  }
  sendData();
});
