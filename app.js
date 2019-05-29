var createError = require("http-errors");
var proxy = require("express-http-proxy");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var CMS_BASE_PATH = require("./api/cmsApi").CMS_BASE_PATH;

var genericRouteInterceptor = require("./routes/interceptor/genericRouteInterceptor");

var homeRouter = require("./routes/home");
var aboutRouter = require("./routes/about");
var postsRouter = require("./routes/posts");
var blogRouter = require("./routes/blog");
var galeryRouter = require("./routes/galery");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(genericRouteInterceptor);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  "/uploads",
  proxy(CMS_BASE_PATH, {
    proxyReqPathResolver: function(req) {
      return req.originalUrl;
    }
  })
);

app.use("/", homeRouter);
app.use("/hakkinda", aboutRouter);
app.use("/posts", postsRouter);
app.use("/blog", blogRouter);
app.use("/galeri", galeryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.locals.basedir = path.join(__dirname, "views");

module.exports = app;
