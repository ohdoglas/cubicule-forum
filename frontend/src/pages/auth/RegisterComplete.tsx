import React from "react";
import { useNavigate, Link } from "react-router-dom";
import '../../css/styles/auth/RegisterComplete.css';
import Header from "../components/header";
import Footer from "../components/footer";

const RegisterComplete: React.FC = () => {
    const navigate = useNavigate();

    return (
        <body className="page-five">
            <Header />
            <main className="main_content">
                <section>
                    <h1 className="setup_title">
                        account created successfully
                    </h1>
                    <p className="setup_text">
                        Thank you for registering! We’ve sent a confirmation email to the address you provided.
                    </p>
                    <p className="setup_text">
                        Please check your inbox (and spam folder) to verify your account and complete the registration process.<br />
                    </p>
                </section>
            </main>
            <Footer />
        </body>
    )
}

export default RegisterComplete;