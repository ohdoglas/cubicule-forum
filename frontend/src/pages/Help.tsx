import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/styles/Help.css';
import Header from "./components/header";
import Footer from "./components/footer";

const Help: React.FC = () => {
    const navigate = useNavigate();

    return (
        <body className="page-four">
            <Header />

            <main className="main_content">
                <section className="section_one">
                    <h1 className="feature_title">
                    Help Center
                    </h1>
                    <p className="feature_text">
                    Welcome to the Cubicles Help Center
                    </p>
                    <p className="feature_text">
                    We’re here to assist you with all aspects of your journey on Cubicles. Explore our resources or contact us directly for support.
                    </p>
                </section>

                <section className="section_one">
                    <h1 className="feature_title">
                    Getting Started
                    </h1>
                    <p className="feature_text">
                    How to create your account and set up your Cubicle.
                    </p>
                    <p className="feature_text">
                    An introduction to CubiCoins and NFTs.
                    </p>
                    <p className="feature_text">
                    First steps for customizing your profile and engaging with the community.
                    </p>
                </section>

                <section className="section_one">
                    <h1 className="feature_title">
                    FAQs
                    </h1>
                    <p className="feature_text">
                    Answers to common questions about:
                    </p>
                    <p className="feature_text">
                    Account management (registration, login, password recovery).
                    </p>
                    <p className="feature_text">
                    Using CubiCoins for transactions.
                    </p>
                    <p className="feature_text">
                    Navigating the NFT marketplace.
                    </p>
                    <p className="feature_text">
                    Subscription plans and benefits.
                    </p>
                </section>

                <section className="section_one">
                    <h1 className="feature_title">
                    Guides and Tutorials
                    </h1>
                    <p className="feature_text">
                    Step-by-step instructions on:
                    </p>
                    <p className="feature_text">
                    How to earn CubiCoins through activities and engagement.
                    </p>
                    <p className="feature_text">
                    Buying, selling, and trading NFTs.
                    </p>
                    <p className="feature_text">
                    Enhancing your Cubicle with themes and badges.
                    </p>
                    <p className="feature_text">
                    Participating in forums and minigames.
                    </p>
                </section>

                <section className="section_one">
                    <h1 className="feature_title">
                    Troubleshooting
                    </h1>
                    <p className="feature_text">
                    Solutions for common technical issues:
                    </p>
                    <p className="feature_text">
                    Login problems.
                    </p>
                    <p className="feature_text">
                    Payment and subscription errors.
                    </p>
                    <p className="feature_text">
                    NFT transactions and marketplace challenges.
                    </p>
                </section>

                <section className="section_one">
                    <h1 className="feature_title">
                    Contact Support
                    </h1>
                    <p className="feature_text">
                    Need personalized help? Reach out to us: <br />
Email: support@cubicles.com
                    </p>
                </section>

                <section className="section_one">
                    <h1 className="feature_title">
                    Community Support
                    </h1>
                    <p className="feature_text">
                    Engage with our community in dedicated forums for tips and advice.
                    </p>                    <p className="feature_text">
                    Search user-contributed solutions and guides.
                    </p>
                </section>
            </main>
            <Footer />
        </body>
    )
}

export default Help;