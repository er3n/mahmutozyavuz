var express = require("express");
var router = express.Router();
var menuApi = require("../api/menuApi");

/* GET home page. */
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

module.exports = router;
