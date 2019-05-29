const cmsApi = require("../../api/cmsApi");

module.exports = function(req, res, next) {
  cmsApi.getNavigations().then(navigations => {
    const harranNavigations = navigations.data.filter(
      menuItem => menuItem.category === "harran"
    );
    const galeryNavigations = navigations.data.filter(
      menuItem => menuItem.category === "galery"
    );
    res.locals.harranNavigations = harranNavigations;
    res.locals.galeryNavigations = galeryNavigations;
    next();
  });
};
