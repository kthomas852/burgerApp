var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//ROUTES
router.get("/", function(req, res){
    burger.all(function(data){
        let hdsObj = {
            ready: data
        };
        console.log(hdsObj);
        res.render("index", hdsObj);
    });
});

router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
    console.log(req.body);

    burger.update({
      eaten: req.body.eaten
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

router.post("/api/burger", function(req, res){
    console.log(req.body);
    burger.create(["bName", "eaten"],
    [req.body.bName, req.body.eaten],
    function(result){
        res.json({ id: result.insertId })
    });
});

router.delete("/api/burger/:id", function(req, res){
    let condition = "id = " + req.params.id;

    burger.delete(condition, function(result){
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
});

// Export routes for server.js to use.
module.exports = router;