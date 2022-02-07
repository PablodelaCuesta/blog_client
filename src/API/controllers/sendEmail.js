import axios from "axios";


export const sendEmail = async ( message ) => {
    const baseURL = 'http://localhost:8080/api';

    try {

        console.log(message);
        const resp = await axios.post(`${baseURL}/email/contact`, message);

        return resp

    } catch (error) {
        console.log(error);

        return false;
    }
}