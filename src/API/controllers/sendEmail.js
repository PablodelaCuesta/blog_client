import axios from "axios";
import { BASE_API } from "../../Core/constants/connections";
import { emailDataTransform, joinNameAndSubject } from "../helpers/contactExtract";


export const sendEmail = async ( message ) => {

    try {

        const messageTransformed = emailDataTransform( message );
        const joinNameWithSubject = joinNameAndSubject( messageTransformed );

        const resp = await axios.post(`${BASE_API}/email/contact`, joinNameWithSubject);
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