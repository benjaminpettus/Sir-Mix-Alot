var Model = require("./Model.js");
module.exports = Location;

function Location(){
  var LocationSchema = {
    lng: Number,
    lat: Number
  };
  Model.call(this, LocationSchema);
  Model.extend(Location);
}