
export const emailDataTransform = ( email ) => {
    let newEmailObject = {};

    const allKeys = Object.keys(email);

    for (const key of allKeys) {
        const element = email[key];
        newEmailObject[key] = element.value
    }

    return newEmailObject;
}


export const joinNameAndSubject = ( values ) => {
    let newEmailObject = {};

    const { name, subject, email, message } = values;
    const namePlusSubject = name + ' - ' + subject;

    newEmailObject['email'] = email;
    newEmailObject['subject'] = namePlusSubject;
    newEmailObject['message'] = message;

    return newEmailObject;
}
