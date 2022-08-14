const ListModel = require('../models/movie-list-model');
const MovieModel = require('../models/movie-model');

class MovieLIist{
    async getLists(req, res, next) {
        try {
            const lists = await ListModel.find()
            return res.json(lists)
        }
        catch (e) {
            res.status(404)
            return res.json({error: `Фильмы не найдены`})
        }
    }

    async createList(req, res, next) {
        try {
            const {name} = req.body
            const findList = await ListModel.findOne({name})
            if (findList) {
                return res.json({error: `Лист с названием ${name} уже существует!`})
            }

            const list = await ListModel.create({name})
            const lists = await ListModel.find()
            return res.json(lists)
        }
        catch (e) {
            return res.json({error: e.message})
        }
    }

    async deleteList(req, res, next) {
        try {
            const {id} = req.body
            const deleted = await ListModel.deleteOne({_id: id})
            await MovieModel.deleteMany({list: id})
            if (deleted) {
                const lists = await ListModel.find()
                return res.json(lists)
            }
            else {
                return res.json({error: `Лист с названием ${id} не найден`})
            }
        }
        catch (e) {
            return res.json({error: e.message})
        }
    }

    async getMovies(req, res, next) {
        try {
            const list_name = req.params.list_name
            const movies = await MovieModel.find({list: list_name})
            return res.json(movies)
        }
        catch (e) {
            res.status(404)
            return res.json({error: `Фильмы не найдены`})
        }
    }

    async createMovie(req, res, next) {
        try {
            const {list_id, movie_name} = req.body
            const list = await ListModel.findById(list_id)
            if (list) {
                const movie = await MovieModel.create({name: movie_name, list: list_id})
                const movies = await MovieModel.find({list: list_id})
                res.json(movies)
            } 
            else {
                res.json({error: `Лист не найден`})
            }
        }
        catch (e) {
            return res.json({error: e.message})
        }
    }

    async deleteMovie(req, res, next) {
        try {
            const {id, list_id} = req.body
            const del = await MovieModel.deleteOne({_id: id, list: list_id})
            const movies = await MovieModel.find({list: list_id})
            res.json(movies)
            
        }
        catch (e) {
            return res.json({error: e.message})
        }
    }

    async getListName(req, res, next) {
        try {
            const {id} = req.body
            const list = await ListModel.findOne({_id: id})
            if (list) {
                res.json(list)
            }else{
                res.status(404)
                return res.json({error: "Not found"})
            }
        }
        catch (e) {
            return res.json({error: e.message})
        }
    }

    
}


module.exports = new MovieLIist();