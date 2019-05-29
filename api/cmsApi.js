var axios = require("axios");

const CMS_BASE_PATH = "http://localhost:1337";

const getNavigations = () => {
  return axios.get(CMS_BASE_PATH + "/navigations");
};

const getPost = id => {
  return axios.get(CMS_BASE_PATH + "/posts/" + id);
};

module.exports = {
  CMS_BASE_PATH: CMS_BASE_PATH,
  getNavigations: getNavigations,
  getPost: getPost
};
