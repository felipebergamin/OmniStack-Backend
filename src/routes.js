const { Router } = require('express');
const multer = require('multer');

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');
const uploadConfig = require('./config/upload');

const routes = new Router();
const upload = multer(uploadConfig);

routes
  .route('/posts')
  .get(PostController.index)
  .post(upload.single('image'), PostController.store);

routes
  .route('/posts/:id/like')
  .post(LikeController.store);

module.exports = routes;
