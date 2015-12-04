var store = require("./DataStore.js").store;
module.exports = Model;
// var extend = require("./extend.js");


function Model(schema){
  this.schema = schema;
  this.id = null;
  for (var k in schema){
    this[k] = null;
  }
  store[this.constructor.name] = store[this.constructor.name] || [];
}

Model.prototype.save = function(){
 if(this.id === null){
    //Model is hard coded...
   this.id = this.constructor.getNextId();

 } 
  store[this.constructor.name].push(this);
};


Model.prototype.destroy = function(){
  //testing to see if there is an id
  if (this.id){
    //if it is true find the object associated with this id and set it to a variable
    var getId = this.constructor.find(this.id);
    //get the index of the object in the store array
    var idx = store[this.constructor.name].indexOf(getId);
    //test to see if the object exists in the array remove it
    if (idx > -1){
      store[this.constructor.name].splice(idx, 1);
    }
 }
  
};

// //Inheritable Static Methods
Model.getNextId = function(){
  var nextId = 0;
  if (store[this.name].length === 0){
    nextId = 1;
    return nextId;
  }
  for (var i = 0; i < store[this.name].length; i++){
    if (store[this.name][i].id > nextId){
      nextId = store[this.name][i].id;
    }
  }
  return nextId + 1;
};

Model.find = function(id){

  for (var i = 0; i < store[this.name].length; i++){
    if (store[this.name][i].id === id){
      return store[this.name][i];
    }
  }
    return null;
}; 

Model.extend = function(klass){
  
  //iterate over this "static methods"
  for (var k in this){
    if (this.hasOwnProperty(k)){
      klass[k] = this[k];
    }
  } 
  //iterating over prototypal methods
  for (var j in this.prototype){
    if (this.prototype.hasOwnProperty(j)){
      klass.prototype[j] = this.prototype[j];
    }
  }

};

