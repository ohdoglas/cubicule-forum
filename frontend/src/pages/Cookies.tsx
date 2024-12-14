import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/styles/Cookie.css';
import Header from "./components/header";
import Footer from "./components/footer";


const Cookies: React.FC = () => {
    const navigate = useNavigate();

    return (
        <body className="page-four">
            <Header />
            <main className="main_content">
                <section className="section_one">
                    <h1 className="feature_title">
                        Cookie Policy
                    </h1>
                    <p className="feature_text">
                        At Cubicles, we are committed to providing a personalized and seamless experience while respecting your privacy. This Cookie Policy explains how we use cookies and similar tracking technologies to enhance your interaction with our platform.
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        What Are Cookies?
                    </h1>
                    <p className="feature_text">
                        Cookies are small text files stored on your device when you visit a website. They help us recognize your preferences, improve site functionality, and deliver relevant content. Cookies may be temporary (session cookies) or persistent (stored on your device for a set period).
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Types of Cookies We Use
                    </h1>
                    <p className="feature_text">
                        Essential Cookies <br />
                        These cookies are necessary for the platform to function correctly. <br /> They enable core features, such as: <br />
                        • Secure login <br />
                        • Navigation between pages <br />
                    </p>
                    <p className="feature_text">
                        Performance and Analytics Cookies <br />
                        We use these cookies to: <br />
                        • Track user behavior on the platform <br />
                        • Understand which features are most popular <br />
                        • Improve site speed and functionality <br />
                    </p>
                    <p className="feature_text">
                        Functional Cookies <br />
                        These cookies allow us to remember your preferences, such as: <br />
                        • Language settings <br />
                        • Cubicle customizations <br />
                    </p>
                    <p className="feature_text">
                        Advertising and Targeting Cookies <br />
                        With your consent, we use these cookies to: <br />
                        • Display relevant ads based on your interests <br />
                        • Measure the effectiveness of marketing campaigns <br />
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Why We Use Cookies
                    </h1>
                    <p className="feature_text">
                        We use cookies to: <br />
                        • Ensure the platform operates smoothly <br />
                        • Provide personalized experiences, such as tailored cubicle designs <br />
                        • Reward user engagement through gamified activities and virtual currency tracking <br />
                        • Improve security and prevent fraudulent activity <br />
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Third-Party Cookies
                    </h1>
                    <p className="feature_text">
                        We may collaborate with third-party services that use cookies for analytics, marketing, and payment processing. These services include, but are not limited to: <br />
                        • Google Analytics for site performance tracking <br />
                        • Payment gateways for secure transactions <br />
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Your Cookie Choices
                    </h1>
                    <p className="feature_text">
                        You can manage or disable cookies by: <br />
                        • Adjusting your browser settings <br />
                        • Using our in-platform cookie consent manager <br />
                        Please note that disabling cookies may limit certain features of our platform, such as personalized cubicles or forum interactions.
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Updates to This Policy
                    </h1>
                    <p className="feature_text">
                        We may update this Cookie Policy periodically to reflect changes in our practices or legal requirements. Significant updates will be communicated via email or platform notifications. Please review this policy regularly.
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Contact Us
                    </h1>
                    <p className="feature_text">
                        If you have questions about this Cookie Policy or how we use cookies, please contact us:
                        Email: [support email]
                    </p>
                </section>
            </main>

            <Footer />
        </body>
    )
}

export default Cookies;