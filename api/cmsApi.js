var axios = require("axios");

const CMS_BASE_PATH = "http://167.99.34.150:1337";

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
  return axios.get(CMS_BASE_PATH + "/announcements?_sort=created_at:DESC");
};

const getBlogs = () => {
  return axios.get(CMS_BASE_PATH + "/blogs?_sort=created_at:DESC");
};

const getVideos = () => {
  return axios.get(CMS_BASE_PATH + "/videos?_sort=created_at:DESC");
};

module.exports = {
  CMS_BASE_PATH: CMS_BASE_PATH,
  getNavigations: getNavigations,
  getPost: getPost,
  getGalery: getGalery,
  getAnnouncements: getAnnouncements,
  getBlogs: getBlogs,
  getVideos: getVideos
};
