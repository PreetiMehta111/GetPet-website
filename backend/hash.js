// const bcrypt = require('bcrypt');
// const password = 'adminpassword'; // Replace with a secure password of your choice
// const saltRounds = 12;
// bcrypt.hash(password, saltRounds, (err, hash) => {
//   if (err) throw err;
//   console.log(hash); 
// });

// hash.js
const bcrypt = require('bcrypt');

const password = 'adminpassword'; // Change to your test password
const saltRounds = 12;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log('Hashed Password:', hash);
});