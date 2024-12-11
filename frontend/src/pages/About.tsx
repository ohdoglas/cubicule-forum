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
                <section className="section_one">
                    <h1 className="feature_title">
                    about us
                    </h1>
                    <p className="feature_text">
                    Welcome to Cubicles – the ultimate hub for tech enthusiasts, developers, and digital artists. Our platform combines interactive social spaces, thematic forums, and a virtual marketplace for NFTs and digital assets, providing a fully immersive experience.
                    </p>
                    <p className="feature_text">
                    Whether you're here to learn, share, or trade, Cubicles is designed to empower your creativity, collaboration, and growth. With customizable profiles, gamified activities, and a thriving community, we aim to redefine how professionals and hobbyists connect in the digital age.
                    </p>
                    <button className="get_started_button">
                        GET STARTED FOR FREE
                    </button>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                    Terms of Service
                    </h1>
                    <p className="feature_text">
                    By using Cubicles, you agree to our Terms of Service. These terms govern your use of our platform, ensuring a safe and fair environment for all users. <br /> Key guidelines include respecting community standards, refraining from unauthorized transactions, and adhering to intellectual property rules. <br /> Breach of terms may result in restricted access or account termination. For full details, visit <Link to={"/terms"}>cubicles.com/terms</Link>.
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                    Cookie Policy
                    </h1>
                    <p className="feature_text">
                    Cubicles uses cookies to enhance your experience. These small data files help us remember your preferences, improve site performance, and provide personalized content. You can manage your cookie preferences anytime through your browser settings. By continuing to use Cubicles, you consent to our use of cookies as outlined in our <Link to={"/cookies"}>Cookie Policy</Link>.
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                    Accessibility
                    </h1>
                    <p className="feature_text">
                    We are dedicated to making Cubicles inclusive for everyone. Our platform supports screen readers, keyboard navigation, and other accessibility tools to ensure a seamless experience for users with disabilities. If you encounter any challenges or have suggestions for improvement, reach out to us at <Link to={"/"}>accessibility@cubicles.com</Link>.
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                    Help Center
                    </h1>
                    <p className="feature_text">
                    Need assistance? Our <Link to={"/help"}>Help Center</Link> is here for you. Explore our extensive knowledge base for tutorials, FAQs, and troubleshooting guides. Can’t find what you’re looking for? Contact our support team via live chat or email at support@cubicles.com. We're committed to helping you make the most of your Cubicles experience.
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                    Privacy Policy
                    </h1>
                    <p className="feature_text">
                    At Cubicles, your privacy is our priority. We are committed to safeguarding your personal data and ensuring a secure experience on our platform. Our Privacy Policy outlines how we collect, use, and protect your information, including your interactions, digital assets, and preferences. We use state-of-the-art encryption and adhere to global data protection standards. For any inquiries regarding your data, contact our support team at privacy@cubicles.com.
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                    Pricing
                    </h1>
                    <p className="feature_text">
                    Cubicles offers a variety of subscription plans to suit your needs:
Free Tier: Access basic features, join forums, and interact with the community.
Pro Tier: Unlock premium features, including advanced customization and marketplace tools.
Enterprise: Tailored solutions for teams and organizations.
For more details, visit our <Link to={"/pricing"}>Pricing Page</Link>.

                    </p>
                </section>
            </main>
            <Footer />
        </body>
    )
}

export default About;