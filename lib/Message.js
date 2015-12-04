var Model = require("./Model.js");
var User = require("./User.js");

module.exports = Message;

function Message(){
  var MessageSchema = {
    from: User,
    to: User,
    message: String,
    sent: Date
  };
  Model.call(this, MessageSchema);
  Model.extend(Message);
}