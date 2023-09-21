function setusername(username) {
  //complex data base logic
  this.username = username;
  console.log("called");
}
function createuser(username, emal, password) {
  setusername.call(this, username);
  this.emal = emal;
  this.password = password;
}
const chai = new createuser("adi", "asdf@gmail.com", "122324");
console.log(chai);
