import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/styles/Login.css';
import Footer from "./components/footer";
import Header from "./components/header";

const Login: React.FC = () => {
    const navigate = useNavigate();

    return (
        <body className="page-one">
            <Header />
            <main className="main_content">
                <section className="section_one">
                    <h1 className="feature_title">
                        Welcome Back to Cubicles!
                    </h1>
                    <p className="feature_text">
                        Reconnect and continue building your digital world.
                    </p>
                    <form action="" className="main_form">
                    <label htmlFor="email_input" className="text_label">EMAIL OR USERNAME:</label>
                        <input type="email" className="email_input" id="email_input"/> <br />
                    <label htmlFor="password_input" className="text_label">PASSWORD:</label>
                        <input type="password" className="password_input" id="password_input" /> <br />
                    <p className="feature_text_two">
                        Forgot your password? <a href="/password-recovery">recover here</a>.
                    </p> <br />
                    <p className="feature_text_two">
                        remember me?
                        <input type="checkbox" className="remember_check" />
                    </p>
                        <button className="submit_button">
                            Log In to Your Cubicle!
                        </button>
                        <div className="login_social_links">
                            <p>
                            or login with:
                            </p>
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

export default Login;