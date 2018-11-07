var orm = require("../config/orm.js");

//Burger ORM
const burger = {
    all: function(cb){
    orm.all("eats", function(res){
        cb(res);
    });
    },
    create: function(cols, vals, cb){
        orm.create("eats", cols, vals, function(res){
            cb(res)
        })
    },
    update: function(objColVals, condition, cb) {
        orm.update("eats", objColVals, condition, function(res) {
          cb(res);
        });
      },
      delete: function(condition, cb) {
        orm.delete("eats", condition, function(res) {
          cb(res);
        });
      }
}
//Exports orm for controller
module.exports = burger;