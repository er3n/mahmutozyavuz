var express = require("express");
var router = express.Router();
var cmsApi = require("../api/cmsApi");

router.get("/", function(req, res, next) {
  cmsApi.getAnnouncements().then(blogsResponse => {
    res.render("blog/blog", { title: "Blog", blogs: blogsResponse.data });
  });
});

module.exports = router;
