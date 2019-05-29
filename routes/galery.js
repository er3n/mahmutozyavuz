var express = require("express");
var router = express.Router();
var cmsApi = require("../api/cmsApi");

router.get("/:id", function(req, res, next) {
  cmsApi.getGalery(req.params.id).then(galeryData => {
    const galery = galeryData.data;
    res.render("galery/galery", { title: "Galeri", galery: galeryData.data });
  });
});

module.exports = router;
