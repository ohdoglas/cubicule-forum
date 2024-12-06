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
        MISSING_EMAIL_CONFIRM_TOKEN: `A token is required to confirm your email. Please use the link sent to your email, which looks like this: "https:ourdomain/token"`,
        INVALID_CONFIRMATION_TOKEN: `The provided token is invalid or does not correspond to any registered user.
        A token is required to confirm your email. Please use the link sent to your email, which looks like this:
        "https:ourdomain/token".`,
        ALREADY_VERIFIED: 'It seems that your email has already been confirmed. If you have any questions or need further assistance, please feel free to reach out to our support team.',
    },
    SUCCESS: {
        EMAIL_CONFIRMATION: 'Email confirmation completed successfully! You can now access your account.',
    }
}

export default USER;