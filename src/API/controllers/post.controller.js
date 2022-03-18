import axios from "axios"
import { BASE_API } from "../../Core/constants/connections"


export const getallPosts = async ( page = 1 ) => {
    try {
        const res = await axios.get(BASE_API + `/posts?page=${page}&limit=6`)
        return res.data

    } catch (error) {
        console.log(error)
    }
}

export const getLatestPosts = async ( limit = 3 ) => {
    try {
        const res = await axios.get(BASE_API + `/posts?page=1&limit=3`)

        return res.data
    } catch (error) {
        console.log(error);
    }
}

export const postNewPost = async ( post ) => {
    try {
        const resp = await axios.post(BASE_API + '/posts', post)

        return resp
    } catch (error) {
        console.log(error);
    }
}