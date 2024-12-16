import React from "react";
import { useNavigate } from "react-router-dom";
import '../../css/styles/legal/Pricing.css';
import Header from "../components/header";
import Footer from "../components/footer";

const Pricing: React.FC = () => {
    const navigate = useNavigate();
    return (
        <body className="page-four">
            <Header />
            <main className="main_content">
                <section className="section_one">
                    <h1 className="feature_title">
                        Pricing Policy
                    </h1>
                    <p className="feature_text">
                        At Cubicles, we aim to create a transparent and fair pricing model that reflects the value of our platform while fostering engagement and community growth. Below, you will find an outline of our pricing structure, including how our virtual currency works and available subscription plans.
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Virtual Currency: CubiCoins
                    </h1>
                    <p className="feature_text">
                        All transactions within Cubicles are powered by our virtual currency, CubiCoins. This ensures a seamless and unified experience for users engaging with various platform features. <br />
                        a. Earning CubiCoins <br />
                        • Participate in forum discussions and contribute valuable content. <br />
                        • Complete challenges and minigames. <br />
                        • Engage in community events and mentoring programs. <br />
                        b. Using CubiCoins <br />
                        CubiCoins can be used to: <br />
                        • Purchase and trade NFTs in our marketplace. <br />
                        • Unlock premium customization features for your Cubicle. <br />
                        • Access exclusive learning materials and mentorship sessions. <br />
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Subscription Plans
                    </h1>
                    <p className="feature_text">
                        Our subscription plans are designed to offer flexibility and additional benefits for users who wish to enhance their experience on Cubicles. <br />
                        a. Free Tier <br />
                        Cost: Free <br />
                        • Access to basic features, forums, and community events. <br />
                        • Earn CubiCoins through participation and engagement. <br />
                        • Limited customization options for Cubicles. <br />
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        NFT Marketplace Fees
                    </h1>
                    <p className="feature_text">
                        • A small transaction fee (2% in CubiCoins) is applied to all NFT purchases, sales, and trades. <br />
                        • Premium members (Pro and Elite Tiers) receive a discount on transaction fees.
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Refund and Cancellation Policy
                    </h1>
                    <p className="feature_text">
                        • Subscriptions can be canceled at any time through your account settings.  <br />
                        • Refunds for subscriptions are available on a case-by-case basis and must be requested within 14 days of payment. <br />
                        • CubiCoins are non-refundable and non-transferable outside the platform. <br />
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Special Promotions and Discounts
                    </h1>
                    <p className="feature_text">
                        We periodically offer: <br />
                        • Bonus CubiCoins for new users and referrals. <br />
                        • Discounts on subscriptions during special events. <br />
                        • Limited-time offers on exclusive NFTs and items. <br />
                    </p>
                </section>
                <section className="section_one">
                    <h1 className="feature_title">
                        Contact Us
                    </h1>
                    <p className="feature_text">
                        For any questions or assistance regarding pricing or subscriptions, please contact our support team: <br />
                        • Email: cubiclesbra@gmail.com
                    </p>
                </section>
            </main>
            <Footer />
        </body>
    )
}

export default Pricing;