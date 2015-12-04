var Model = require("./Model.js");
var store = require("./DataStore.js").store;
module.exports = User;


function User(){
var UserSchema = {
  username: String,
  password: String,
  
};
 
  Model.call(this, UserSchema);
  Model.extend(User);
  
}
