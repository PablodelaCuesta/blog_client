const email = {
    name: {
        value: '',
        validation: {
            required: true
        }
    },

    email: {
        value: '',
        validation: {
            required: true,
            pattern: ''
        }
    },

    subject: {
        value: '',
        validation: {
            required: true
        }
    },

    message: {
        value: '',
        validation: {
            required: true,
        }
    }
}

class Email {
    constructor(newName, ) {
        this.name = {
            value: newName,
            validation: {
                required: true
            }
        };
        this.email = {
            value: newEmail,
            validation: {
                required: true,
            }
        };
        this.subject = {};
        this.message = {};
    }
}