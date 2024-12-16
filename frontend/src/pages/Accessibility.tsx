import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/styles/Accessibility.css';
import Header from "./components/header";
import Footer from "./components/footer";

const Accessibility: React.FC = () => {
    const navigate = useNavigate();

    return (
        <body className="page-four">
            <Header />
            <main className="main_content">
                <section className="section_one">
                    <h1 className="feature_title">
                        Accessibility Policy
                    </h1>
                    <p className="feature_text">
                        At Cubicles, we are dedicated to creating an inclusive platform that is accessible to everyone, regardless of ability. This Accessibility Policy outlines the steps we take to ensure that our platform is usable by as many people as possible, including those with disabilities.
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Our Commitment
                    </h1>
                    <p className="feature_text">
                        We are committed to: <br />
                        • Ensuring equal access to all features and content on our platform. <br />
                        • Adhering to internationally recognized accessibility standards, including the Web Content Accessibility Guidelines (WCAG). <br />
                        • Continuously improving our platform to address accessibility concerns. <br />
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Accessibility Features
                    </h1>
                    <p className="feature_text">
                        The following features are implemented to enhance accessibility: <br />
                        a. Keyboard Navigation <br />
                            • All interactive elements, such as buttons and links, can be accessed and used via keyboard. <br />
                        b. Screen Reader Compatibility <br />
                            • Our platform is designed to be compatible with major screen readers, providing descriptive alt text for images and clear labeling for navigation elements. <br />
                        c. Adjustable Text and Contrast <br />
                            • Users can adjust text size and contrast settings to improve readability. <br />
                        d. Video and Audio Content <br />
                            • Captions are provided for video content where possible, and transcripts are available for audio materials. <br />
                        e. Error Identification and Suggestions <br />
                            • Forms and input fields include clear instructions and error messages to guide users. <br />
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Feedback and Assistance
                    </h1>
                    <p className="feature_text">
                        We value feedback from our community to improve accessibility. If you encounter any barriers or have suggestions, please contact us: <br />
                        • Email: cubiclesbra@gmail.com<br />
                        Our team is committed to addressing reported issues promptly.
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Ongoing Efforts
                    </h1>
                    <p className="feature_text">
                        We recognize that accessibility is an ongoing process. Our efforts include: <br />
                        • Regular testing and updates to maintain compliance with WCAG standards. <br />
                        • Collaborating with accessibility experts and user groups to identify areas for improvement. <br />
                        • Providing training to our team on inclusive design and development practices. <br />
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Third-Party Content
                    </h1>
                    <p className="feature_text">
                        While we strive to ensure accessibility across all parts of our platform, some third-party content or integrations may not fully meet accessibility standards. We are actively working with our partners to address these issues.
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Legal Compliance
                    </h1>
                    <p className="feature_text">
                        Cubicles complies with applicable accessibility laws and regulations in the regions where we operate, including the Americans with Disabilities Act (ADA) and other international standards.
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Future Goals
                    </h1>
                    <p className="feature_text">
                        To enhance accessibility further, we aim to: <br />
                        • Develop more tools for personalized user experiences, such as customizable layouts and text-to-speech features. <br />
                        • Expand support for assistive technologies.
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Contact Us
                    </h1>
                    <p className="feature_text">
                        If you have any questions, need assistance, or want to provide feedback on our Accessibility Policy, please reach out to us:
                        Email: cubiclesbra@gmail.com
                    </p>
                </section>
            </main>
            <Footer />
        </body>
    )
}

export default Accessibility;