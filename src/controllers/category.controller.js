import axios from "axios"


const BASE_URL = "http://localhost:8080/api"

export const getallCategories = async () => {
    try {
        const res = await axios.get(BASE_URL + "/category")
        return res.data

    } catch (error) {
        console.log(error)
    }
}

