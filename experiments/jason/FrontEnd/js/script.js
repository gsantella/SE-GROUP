
document.getElementById('autoEmailer').addEventListener('click', () => {
  const data = {};
  data.recieverName = document.getElementById('recieverName').value;
  data.recieverEmail = document.getElementById('recieverEmail').value;
  data.expirationDate = document.getElementById('expirationDate').value;
  data.fName = document.getElementById('fName').value;
  data.lName = document.getElementById('lName').value;
  data.email = document.getElementById('email').value;
  data.msg = document.getElementById('msg').value;
  console.log(data);
});
