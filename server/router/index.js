const { model } = require('mongoose');
const movieController = require('../controllers/movie-controller');

const Router = require('express').Router;

const router = new Router();


router.get('/lists', movieController.getLists);
router.get('/list/:list_name', movieController.getMovies);

router.post('/create_list/', movieController.createList);
router.post('/delete_list/', movieController.deleteList);
router.post('/create_movie/', movieController.createMovie);
router.post('/delete_movie/', movieController.deleteMovie);
router.post('/list_name/', movieController.getListName);


module.exports = router