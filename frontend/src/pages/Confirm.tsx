import React from "react";
import { useNavigate, Link } from "react-router-dom";
import '../css/styles/Confirm.css';

const Confirm: React.FC = () => {
    const navigate = useNavigate();

    return (
        <body className="page-five">

<header className="header">
            <nav className="header_nav">
                <div className="header_nav_logo">
                    <Link to={"/"}><img className="header_nav_logo_img" alt=""/></Link>
                    <Link to={"/"}><img className="header_nav_logo_name" alt="" /></Link>
                </div>
            </nav>
        <div className="header_nav_buttons">
                <button className="header_nav_login_button">LOGIN</button>
            </div>
    </header>

            <main className="main_content">
            <section className="section_one">
            <h1 className="feature_title">
            Your Email is Verified!
                    </h1>
                    <p className="feature_text">
                    Thank you for confirming your email!
You're just one step away from exploring your personalized workspace,
earning rewards, and collaborating seamlessly.
                    </p>

                    <p className="feature_text">
                    Your account is now active!
                    Dive into Cubicles to unleash the power of creativity and collaboration.
                    </p>

                    <button className="confirm_button">
                    Log In to
                    Your Cubicle!
                    </button>
            </section>

            </main>

        <footer className="footer">
            <div className="links_left">
                <a href="#">Resend Email Confirmation</a>
            </div>

            <div className="center_links">
                <p>Powered by Cubicles</p>
            </div>

            <div className="links_right">
                <a href="/help">HELP CENTER</a>
            </div>
        </footer>
        </body>
    )
}

export default Confirm;