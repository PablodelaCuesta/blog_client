import axios from "axios"
import { BASE_API } from "../../Core/constants/connections"


export const getallCategories = async () => {
    try {
        const res = await axios.get(BASE_API + "/category")
        return res.data

    } catch (error) {
        console.log(error)
    }
}

