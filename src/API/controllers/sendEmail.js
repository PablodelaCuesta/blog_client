import axios from "axios";
import { emailDataTransform, joinNameAndSubject } from "../helpers/contactExtract";


export const sendEmail = async ( message ) => {
    const baseURL = 'http://localhost:8080/api';

    try {

        const messageTransformed = emailDataTransform( message );
        const joinNameWithSubject = joinNameAndSubject( messageTransformed );

        const resp = await axios.post(`${baseURL}/email/contact`, joinNameWithSubject);
        console.log(resp);
        if (resp.data.code === 200 && resp.data.msg === 'success') {
            return true
        }

        return false

    } catch (error) {
        console.log(error);

        return false;
    }
}