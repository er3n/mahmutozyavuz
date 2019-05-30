var axios = require("axios");

const CMS_BASE_PATH = "http://165.22.193.183:1337";

const getNavigations = () => {
  return axios.get(CMS_BASE_PATH + "/navigations");
};

const getPost = id => {
  return axios.get(CMS_BASE_PATH + "/posts/" + id);
};

const getGalery = id => {
  return axios.get(CMS_BASE_PATH + "/galeries/" + id);
};

const getAnnouncements = () => {
  return axios.get(CMS_BASE_PATH + "/announcements");
};

const getBlogs = () => {
  return axios.get(CMS_BASE_PATH + "/blogs");
};

module.exports = {
  CMS_BASE_PATH: CMS_BASE_PATH,
  getNavigations: getNavigations,
  getPost: getPost,
  getGalery: getGalery,
  getAnnouncements: getAnnouncements,
  getBlogs: getBlogs
};
