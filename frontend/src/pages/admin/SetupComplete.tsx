import React from "react";
import { useNavigate, Link } from "react-router-dom";
import '../../css/styles/admin/SetupComplete.css';
import Footer from "../components/footer";

const SetupComplete: React.FC = () => {
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
            </header>
            <main className="main_content">

            <section>
                    <h1 className="setup_title">
                        Setup Complete Ready to Go!
                    </h1>
                    <p className="setup_text">
                        The platform setup is complete, and everything is ready to get started! You can now begin using the full features of Cubicles and manage your workspace efficiently.
                    </p>
                    <p className="setup_text">
                        Thank you for registering! We’ve sent a confirmation email to the address you provided. Please check your inbox (and spam folder) to verify your account and complete the registration process. <br />
                        <Link to={"/login"}>
                            <button className="complete_button">
                                Start Using Cubicles!
                            </button>
                        </Link>
                    </p>
                </section>
            </main>
            <Footer />
        </body>
    )
}

export default SetupComplete;