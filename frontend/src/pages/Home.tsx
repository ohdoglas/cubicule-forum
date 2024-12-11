import React from "react";
import { useNavigate, Link } from "react-router-dom";
import '../css/styles/Home.css';
import Header from "./components/header";
import Footer from "./components/footer";

const Home: React.FC = () => {
    const navigate = useNavigate();
    return (
        <body className="page-one">
            <Header />

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
        <Footer />


        </body>
    )
}

export default Home;