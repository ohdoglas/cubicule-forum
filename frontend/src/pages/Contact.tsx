import React from "react";
import { useNavigate, Link } from "react-router-dom";
import '../css/styles/Contact.css';
import Header from "./components/header";
import Footer from "./components/footer";

const Contact: React.FC = () => {
    const navigate = useNavigate();

    return (
        <body className="page-one">

            <Header />

            <main className="main_content">
                <section className="section_one">
                    <h1 className="feature_title">
                    Contact Us
                    </h1>
                    <p className="feature_text">
                    We’d Love to Hear From You!
Whether you have questions, feedback, or need assistance,
the Cubicles team is here to help.
Choose the most convenient way to get in touch with us.
                    </p>
                    <h1 className="feature_title">
                    Submit a Request:
                    </h1>
                    <p className="feature_text">
                    Fill out the form below for detailed
inquiries or specific assistance:
                    </p>

                    <form action="" className="main_form">

                    <label htmlFor="name_input" className="text_label">NAME:</label>
                        <input type="text" className="name_input" id="name_input" /> <br />

                    <label htmlFor="email_input" className="text_label">EMAIL:</label>
                        <input type="email" className="email_input" id="email_input"/> <br />

                    <label htmlFor="category" className="text_label">CATEGORY:</label>
                        <select id="category" className="category_input">
                            <option value="Technical Support">Technical Support</option>
                            <option value="Billing & Subscriptions">Billing & Subscriptions</option>
                            <option value="Feedback & Suggestions">Feedback & Suggestions</option>
                            <option value="Other">Other</option>
                        </select> <br />

                        <label htmlFor="message" className="text_label">MESSAGE:</label>
                        <textarea id="message" name="message" className="message_input" placeholder="Type your message here..."></textarea> <br />

                        <label htmlFor="choose_file">Choose file(s)</label> <br />
                        <input type="file" className="choose_file_input" /> <br />

                        <button className="submit_button">
                            SUBMIT
                        </button>

                    </form>
                </section>

            </main>

            <Footer />

        </body>
    )
}

export default Contact;