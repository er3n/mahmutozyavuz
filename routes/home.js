var express = require("express");
var router = express.Router();
var cmsApi = require("../api/cmsApi");

/* GET home page. */
/*
router.get("/", function(req, res, next) {
  menuApi
    .getMenu()
    .then(menuRes => {
      console.log(menuRes);
      const menuHarran = menuRes.data.filter(
        menuItem => menuItem.type === "harran"
      );
      const menuGalery = menuRes.data.filter(
        menuItem => menuItem.type === "galery"
      );

      res.render("home/home", {
        title: "Mahmut Özyavuz | Resmi Web Sayfası",
        menuHarran: menuHarran,
        menuGalery: menuGalery
      });
    })
    .catch(err => console.log(err));
});
*/

router.get("/", function(req, res, next) {
  cmsApi.getAnnouncements().then(announcementsResponse => {
    console.log(res.locals.galeryNavigations);
    res.render("home/home", {
      title: "Mahmut Özyavuz | Resmi Web Sayfası",
      announcements: announcementsResponse.data
    });
  });
});

module.exports = router;
