const bcrypt = require('bcrypt');
const password = 'adminpassword'; // Replace with a secure password of your choice
const saltRounds = 12;
bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log(hash); 
});