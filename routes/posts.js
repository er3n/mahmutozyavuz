var express = require("express");
var router = express.Router();
var cmsApi = require("../api/cmsApi");
var showdown = require("showdown");

const mdToHtml = md => {
  var converter = new showdown.Converter();
  return converter.makeHtml(md);
};

router.get("/:id", function(req, res, next) {
  cmsApi.getPost(req.params.id).then(postResponse => {
    const post = postResponse.data;
    post.content = mdToHtml(post.content);
    res.render("post/posts", { title: "İçerik", post: postResponse.data });
  });
});

module.exports = router;
