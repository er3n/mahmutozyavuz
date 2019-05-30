var express = require("express");
var router = express.Router();
var cmsApi = require("../api/cmsApi");

router.get("/", function(req, res, next) {
  cmsApi.getAnnouncements().then(announcementsResponse => {
    res.render("home/home", {
      title: "Mahmut Özyavuz | Resmi Web Sayfası",
      announcements: announcementsResponse.data
    });
  });
});

module.exports = router;
