import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/styles/Privacy.css';
import Header from "./components/header";
import Footer from "./components/footer";

const Privacy: React.FC = () => {
    const navigate = useNavigate();
    return (
        <body className="page-four">
            <Header />

            <main className="main_content">
                <section className="section_one">
                    <h1 className="feature_title">
                    Privacy Policy
                    </h1>
                    <p className="feature_text">
                    At Cubicles, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines the types of data we collect, how we use it, and your rights as a user of our platform. By using Cubicles, you agree to the practices described in this policy.
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                    Information We Collect
                    </h1>
                    <p className="feature_text">
                    Personal Information
When you register on our platform, we collect:
    • Your username
    • Email address
    • Password (encrypted)
    • Payment information (when applicable)
                    </p>
                    <p className="feature_text">
                    Usage Data
We gather information about your interactions with the platform, including:
    • Pages visited and features used
    • Forum posts and comments
    • Participation in minigames and other activities
                    </p>
                    <p className="feature_text">
                    Technical Data
We collect data to optimize your experience, such as:
    • Device type and browser information
    • IP address and geolocation
    • Cookies and similar technologies
                    </p>
                </section>

                <section className="section_one">
                    <h1 className="feature_title">
                    How We Use Your Information
                    </h1>
                    <p className="feature_text">
                    We use the information collected to:
    • Provide and improve our services
    • Customize your user experience, including your virtual cubicle
    • Process transactions and manage your virtual currency
    • Enable communication through notifications, chat, and forums
    • Ensure the security and functionality of the platform
    • Comply with legal obligations
                    </p>
                </section>

                <section className="section_one">
                    <h1 className="feature_title">
                    Sharing Your Information
                    </h1>
                    <p className="feature_text">
                    We do not sell your personal data. We may share your information with:
    • Service Providers: Trusted third-party services to assist with payment processing, data analytics, and hosting
    • Legal Authorities: When required to comply with applicable laws or protect our platform’s integrity
    • Other Users: Limited data (e.g., username, profile details) visible to other members within the platform
                    </p>
                </section>

                <section className="section_one">
                    <h1 className="feature_title">
                    Cookies and Tracking Technologies
                    </h1>
                    <p className="feature_text">
                    We use cookies to:
    • Remember your preferences
    • Track user engagement and improve our platform
    • Deliver personalized content and ads
You can manage your cookie preferences through your browser settings or our cookie consent manager.
                    </p>
                </section>

                <section className="section_one">
                    <h1 className="feature_title">
                    Data Security
                    </h1>
                    <p className="feature_text">
                    We implement advanced security measures, including:
    • Encryption of sensitive data
    • Regular audits and updates to our systems
    • Limited access to personal data based on roles
Despite our efforts, no system is completely secure. We encourage users to protect their accounts with strong passwords and enable two-factor authentication where possible.
                    </p>
                </section>


                <section className="section_one">
                    <h1 className="feature_title">
                    Your Rights
                    </h1>
                    <p className="feature_text">
                    As a user, you have the right to:
    • Access and review your data
    • Correct or update inaccurate information
    • Request deletion of your account and personal data
    • Opt-out of certain data processing activities
To exercise your rights, contact us at privacy@cubicles.com.
                    </p>
                </section>

                <section className="section_one">
                    <h1 className="feature_title">
                    Data Retention
                    </h1>
                    <p className="feature_text">
                    We retain your data only for as long as necessary to fulfill the purposes outlined in this policy or comply with legal requirements. Once your data is no longer needed, it will be securely deleted or anonymized.
                    </p>
                </section>

                <section className="section_one">
                    <h1 className="feature_title">
                    Children’s Privacy
                    </h1>
                    <p className="feature_text">
                    Our platform is not intended for users under the age of 13. We do not knowingly collect personal data from children. If you believe a child has provided us with personal information, please contact us immediately.
                    </p>
                </section>

                <section className="section_one">
                    <h1 className="feature_title">
                    International Users
                    </h1>
                    <p className="feature_text">
                    Cubicles operates globally. By using our platform, you consent to your data being transferred and processed in countries where we operate, which may have different privacy laws than your home country.
                    </p>
                </section>

                <section className="section_one">
                    <h1 className="feature_title">
                    Updates to This Policy
                    </h1>
                    <p className="feature_text">
                    We may update this Privacy Policy periodically to reflect changes in our practices or for legal reasons. We will notify users of significant changes via email or platform notifications. Please review this policy regularly.
                    </p>
                </section>

                <section className="section_one">
                    <h1 className="feature_title">
                    Contact Us
                    </h1>
                    <p className="feature_text">
                    If you have any questions or concerns about this Privacy Policy, please contact us:
Email: privacy@cubicles.com
                    </p>
                </section>
            </main>

            <Footer />
        </body>
    )
}

export default Privacy;