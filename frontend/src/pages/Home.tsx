import React from "react";
import { useNavigate, Link } from "react-router-dom";
import '../css/styles/Home.css';

const Home: React.FC = () => {
    const navigate = useNavigate();
    return (
        <body>
            <header className="header">
            <nav className="header_nav">
                <div className="header_nav_logo">
                    <Link to={"/"}><img className="header_nav_logo_img" alt=""/></Link>
                    <Link to={"/"}><img className="header_nav_logo_name" alt="" /></Link>
                </div>
            </nav>
            <div className="header_nav_buttons">
                    <button className="header_nav_login_button">LOGIN</button>
                    <button className="header_nav_register_button">REGISTER</button>
                </div>
        </header>

        <main className="main_content">
            <section>
                <h1 className="welcome">
                    WELCOME TO CUBICLES.
                </h1>
                <p className="welcome_text">
                A pixel-perfect workspace designed for seamless collaboration
                and unmatched creativity. Join us and transform the way you work, share, and grow!
                </p>
                <button className="get_started_button">
                    GET STARTED FOR FREE
                </button>
            </section>
            <section>
                <h1 className="intro">
                    COLLABORATE.
                    CREATE.
                    ACHIEVE.
                </h1>
                <p className="intro_text">
                Cubicles is more than just a platform—it’s your digital workspace revolution. From real-time collaboration tools to intuitive task management, we bring teams together to build ideas and make them thrive. Designed for innovators, creators, and doers, Cubicles empowers you to work smarter, faster, and with style.
                </p>
                <h1 className="features">
                What Makes Cubicles Different?
                </h1>
                <Link to={"/features"}>
                    <button className="features_button">
                        discover our features
                    </button>
                </Link>
            </section>
        </main>

        <footer className="footer">
            <div className="links_left">
                <a href="#">ABOUT US</a>
                <a href="#">HELP CENTER</a>
                <a href="#">CONTACT US</a>
                <a href="#">TERMS OF SERVICE</a>
            </div>

            <div className="social_links">
                <div className="img_instagram" aria-label="instagram"></div>
                <div className="img_linkedin" aria-label="linkedin"></div>
                <div className="img_github" aria-label="github"></div>
                <div className="img_facebook" aria-label="facebook"></div>
                <div className="img_discord" aria-label="discord"></div>
            </div>

            <div className="links_right">
                <a href="#">ACCESSIBILITY</a>
                <a href="#">PRICING</a>
                <a href="#">PRIVACY POLICY</a>
                <a href="#">COOKIE POLICY</a>
            </div>
        </footer>
        </body>
    )
}

export default Home;