import React from "react";
import { useNavigate } from "react-router-dom";
import '../../css/styles/legal/Terms.css';
import Header from "../components/header";
import Footer from "../components/footer";

const Terms: React.FC = () => {
    const navigate = useNavigate();
    return (
        <body className="page-four">
            <Header />
            <main className="main_content">
                <section className="section_one">
                    <h1 className="feature_title">
                        Terms of Service
                    </h1>
                    <p className="feature_text">
                        Welcome to Cubicles! By accessing or using our platform, you agree to be bound by these Terms of Service (“Terms”). Please read them carefully, as they govern your use of Cubicles and your interactions with other users, content, and features.
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Acceptance of Terms
                    </h1>
                    <p className="feature_text">
                        By registering for an account, purchasing a subscription, or interacting with any part of our platform, you confirm that you have read, understood, and agreed to these Terms. If you do not agree, you must discontinue use immediately.
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Eligibility
                    </h1>
                    <p className="feature_text">
                        To use Cubicles, you must:
                        Be at least 13 years old or the minimum age of digital consent in your country.
                        Not have been previously banned or removed from the platform.
                        Provide accurate, complete, and current information during registration.
                        If you are using Cubicles on behalf of a business or organization, you warrant that you have the authority to bind that entity to these Terms.
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        User Responsibilities
                    </h1>
                    <p className="feature_text">
                        Community Standards: <br />
                        Treat other users with respect. Harassment, hate speech, or abusive behavior will not be tolerated. <br />
                        Account Security: <br />
                        You are responsible for maintaining the confidentiality of your account credentials and are liable for all activities under your account. Notify us immediately of any unauthorized access. <br />
                        Prohibited Activities: <br />
                        Using the platform for unlawful purposes. <br />
                        Uploading harmful code, phishing, or spamming. <br />
                        Selling, buying, or trading accounts. <br />
                        Misrepresenting your identity or affiliations. <br />
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Digital Assets and NFTs
                    </h1>
                    <p className="feature_text">
                        Cubicles allows users to trade, showcase, and interact with NFTs and digital assets. By using these features, you agree to the following:<br />
                        Ownership: Cubicles does not guarantee the authenticity or legality of NFTs displayed or traded on the platform. Users are responsible for verifying asset details. <br />
                        Transactions: All transactions are final and processed through third-party systems. Cubicles is not liable for transaction errors or disputes. <br />
                        Marketplace Guidelines: Follow all platform rules for buying, selling, or trading NFTs. Violation of marketplace policies may result in account suspension. <br />
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Virtual Currency
                    </h1>
                    <p className="feature_text">
                        Cubicles features a virtual currency system for rewards and purchases: <br />
                        Earning Coins: Coins are earned through activities like forum participation, creating content, and completing challenges. <br />
                        Spending Coins: Coins can be used to purchase virtual goods, profile upgrades, or participate in platform events. <br />
                        No Monetary Value: Virtual currency has no real-world value and cannot be exchanged for fiat currency. <br />
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Intellectual Property
                    </h1>
                    <p className="feature_text">
                        Your Content: <br />
                        You retain ownership of any content you upload, such as posts, articles, and NFTs. By sharing content on Cubicles, you grant us a non-exclusive, royalty-free license to display and distribute it within the platform. <br />
                        Platform Content: <br />
                        All trademarks, logos, and original content of Cubicles remain the property of the platform. You may not use or reproduce our assets without prior consent. <br />
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Termination
                    </h1>
                    <p className="feature_text">
                        We reserve the right to suspend or terminate your account if you: <br />
                        Violate these Terms. <br />
                        Engage in fraudulent or harmful activities. <br />
                        Breach intellectual property laws or community guidelines. <br />
                        You may terminate your account at any time by contacting support. <br />
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Limitation of Liability
                    </h1>
                    <p className="feature_text">
                        Cubicles is provided "as-is" without any warranties, express or implied. We are not liable for: <br />
                        Losses arising from the use or inability to use the platform. <br />
                        Technical disruptions, bugs, or errors. <br />
                        Unauthorized access to your account or data breaches caused by third parties. <br />
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Dispute Resolution
                    </h1>
                    <p className="feature_text">
                        Governing Law: These Terms are governed by the laws of Brazil. <br />
                        Arbitration: Disputes will be resolved through binding arbitration, unless prohibited by local law. <br />
                        Class Action Waiver: You agree to resolve disputes on an individual basis, not as part of a class or collective proceeding. <br />
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Changes to Terms
                    </h1>
                    <p className="feature_text">
                        We may update these Terms periodically. You will be notified of significant changes via email or platform notifications. Continued use of the platform signifies acceptance of updated Terms.
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Contact Us
                    </h1>
                    <p className="feature_text">
                        For questions or concerns about these Terms, contact us at cubiclesbra@gmail.com.
                    </p>
                </section>
            </main>
            <Footer />
        </body>
    )
}

export default Terms;