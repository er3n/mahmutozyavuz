var express = require("express");
var router = express.Router();
var cmsApi = require("../api/cmsApi");

router.get("/", function(req, res, next) {
  cmsApi.getBlogs().then(blogsResponse => {
    console.log("blogsResponse");
    res.render("blog/blog", { title: "Blog", blogs: blogsResponse.data });
  });
});

module.exports = router;
