const SETUP = {
    ERR: {
        MISSING_FIELDS: "To register as an admin, enter all necessary fields: Username, Email, Password and Verification Token",
        INVALID_TOKEN: "The provided token is not compatible with the token in the database.",
        SEND_EMAIL_FAILED: "Failed to send confirmation email ",
        MISSING_MAIL_ENV: "ADMIN_MAIL not configured",
    },
    SUCCESS: {
        ALREADY_COMPLETED: "The initial setup and super admin configuration has already been completed.",
        ADMIN_CREATED: `Super Admin created successfully! To activate your account, please check your email and click on the confirmation link we just sent.
            If you don't find the email in your inbox, check your spam or junk folder.`
    }
}

export default SETUP;