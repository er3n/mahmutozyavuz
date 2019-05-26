var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.render("galery/galery", { title: "Galeri" });
});

module.exports = router;
