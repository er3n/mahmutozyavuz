var axios = require("axios");
const CONSTANTS = require("../api/constant");

const getMenu = () => {
  return axios.get(CONSTANTS.CMS_BASE_PATH + "/menus");
};

module.exports = {
  getMenu: getMenu
};
