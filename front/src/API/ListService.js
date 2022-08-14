import axios from "axios"

export default class ListService{
    static async getAll() {
        const response = await axios.get("http://localhost:5000/api/lists/")
        return response.data
    }

    static async deleteOne(id) {
        const response = await axios.post("http://localhost:5000/api/delete_list",  {id: id})
        return response.data
    }

    static async createList(name) {
        const response = await axios.post("http://localhost:5000/api/create_list", {name: name})
        if (response.data["error"]) {
            
        }else {
            return response.data
        }
    }
}