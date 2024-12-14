import React from "react";
import { useNavigate, Link } from "react-router-dom";
import '../css/styles/AdminSetup.css';

const AdminSetup: React.FC = () => {
    const navigate = useNavigate();

    return (
        <body className="page-one">
            <header className="header">
            <nav className="header_nav">
                <div className="header_nav_logo">
                    <Link to={"/"}><img className="header_nav_logo_img" alt=""/></Link>
                    <Link to={"/"}><img className="header_nav_logo_name" alt="" /></Link>
                </div>
            </nav>
    </header>

    <main className="main_content">
                <section className="section_one">
                    <h1 className="feature_title">
                    Super Admin Initial Setup
                    </h1>
                    <p className="feature_text">
                    Configure your primary administrator
                    account to secure your platform.
                    <br />
                    This page is accessible only
during the initial deployment. <br />

Ensure you save your Super
Admin credentials securely.
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


                        <label htmlFor="token" className="text_label">TOKEN:</label>
                        <textarea id="token" name="token" className="token_input" placeholder="Token here..."></textarea> <br />


                        <button className="submit_button">
                        Create
                        Super Admin
                        </button>

                        <p className="feature_text">
                        Need Help? <a href="/contact">Contact Us</a>
                    </p>

                    </form>
                </section>

            </main>



        </body>
    )
}

export default AdminSetup;
