import React from "react";
import { useNavigate, Link } from "react-router-dom";
import '../css/styles/About.css';
import Header from "./components/header";
import Footer from "./components/footer";

const About: React.FC = () => {
    const navigate = useNavigate();
    return (
        <body className="page-two">
            <Header />
            <main className="main_content">
            </main>
            <Footer />
        </body>
    )
}

export default About;