import React from "react";
import { useNavigate } from "react-router-dom";
import '../../css/styles/auth/Register.css';
import Footer from "../components/footer";
import Header from "../components/header";

const Register: React.FC = () => {
    const navigate = useNavigate();

    return (
        <body className="page-one">
            <Header />
            <main className="main_content">
                <section className="section_one">
                    <h1 className="feature_title">
                        Join Cubicles: Where Creativity Meets Community.
                    </h1>
                    <p className="feature_text">
                        Sign up today to start earning coins, customizing your cubicle,
                        and connecting with a vibrant community.
                    </p>
                    <form action="" className="main_form">
                    <label htmlFor="username_input" className="text_label">USERNAME:</label>
                        <input type="text" className="username_input" id="username_input" /> <br />
                    <label htmlFor="email_input" className="text_label">EMAIL:</label>
                        <input type="email" className="email_input" id="email_input"/> <br />
                    <label htmlFor="password_input" className="text_label">PASSWORD:</label>
                        <input type="password" className="password_input" id="password_input" /> <br />
                    <label htmlFor="repeat_password_input" className="text_label">REPEAT PASSWORD:</label>
                        <input type="password" className="repeat_password_input" id="repeat_password_input" /> <br />
                    <p className="feature_text_two">
                        By signing up, you agree to our <br /><a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
                            <input type="checkbox" className="terms_check" />
                    </p>
                        <button className="submit_button">
                            Let’s Go!
                        </button>
                        <div className="register_social_links">
                            <p>
                                or register with: <br />
                            </p> <br />
                            <div className="img_gmail" aria-label="gmail"></div>
                            <div className="img_github" aria-label="github"></div>
                            <div className="img_facebook" aria-label="facebook"></div>
                            <div className="img_discord" aria-label="discord"></div>
                        </div>
                    </form>
                </section>
            </main>
            <Footer />
        </body>
    )
}

export default Register;