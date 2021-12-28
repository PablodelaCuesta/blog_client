import axios from "axios"


const BASE_URL = "http://localhost:8080/api"

export const getallPosts = async ( page = 1 ) => {
    try {
        const res = await axios.get(BASE_URL + `/posts?page=${page}&limit=3`)
        console.log(res);
        return res.data

    } catch (error) {
        console.log(error)
    }
}

export const getLatestPosts = async ( limit = 3 ) => {
    try {
        const res = await axios.get(BASE_URL + `/posts?page=1&limit=3`)

        return res.data
    } catch (error) {
        console.log(error);
    }
}