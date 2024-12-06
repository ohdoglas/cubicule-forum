const USER = {
    ERR: {
        MISSING_FIELDS: "",
        INVALID_USERNAME: "Please enter a username with a valid format.",
        INVALID_EMAIL: "Please enter an email with a valid format.",
        WEAK_PASSWORD:  `Weak Password!
        Password must contain the following requirements:
        Contains at least one capital letter.
        Contains at least one number.
        Contains at least one special character.
        It is at least 6 characters long.`,
        NOT_UNIQUE_USERNAME: "The entered user is already in use.",
        NOT_UNIQUE_EMAIL: "The email entered is already in use",
        USER_NOT_FOUND: "User not found. Please check your credentials and try again.",
    },
    SUCCESS: {

    }
}

export default USER;