var express = require("express");
var router = express.Router();
var cmsApi = require("../api/cmsApi");

router.get("/", function(req, res, next) {
  cmsApi.getAnnouncements().then(announcementsResponse => {
    cmsApi.getVideos().then(videosResponse => {

      announcementsResponse.data = announcementsResponse.data.filter(i => {
        if(!i.post) {
          console.warn("Announcement with id " + i.id + " does not have post");
          return false;
        }
        return true;
      });

      res.render("home/home", {
        title: "Mahmut Özyavuz | Resmi Web Sayfası",
        announcements: announcementsResponse.data,
        videos: videosResponse.data
      });
    });
  });
});

module.exports = router;
