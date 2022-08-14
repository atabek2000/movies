import axios from "axios"

export default class MovieService{
    static async getAll(id) {
        const response = await axios.get("http://localhost:5000/api/list/"+id)
        return response.data
    }

    static async getListName(id) {
        const response = await axios.post("http://localhost:5000/api/list_name/", {id: id})
        return response.data
    }

    static async createMovie(list_id, name) {
        const response = await axios.post("http://localhost:5000/api/create_movie", {list_id: list_id, movie_name: name})
        if (response.data["error"]) {
            alert(response.data["error"])
        }else {
            return response.data
        }
    }

    static async deleteOne(id, list_id) {
        const response = await axios.post("http://localhost:5000/api/delete_movie",  {id: id, list_id: list_id})
        if (response.data["error"]) {
            alert(response.data["error"])
        }else{
            return response.data
        }
    }


}