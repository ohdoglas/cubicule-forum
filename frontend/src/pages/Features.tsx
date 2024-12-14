import React from "react";
import { useNavigate, Link } from "react-router-dom";
import '../css/styles/Features.css';
import Header from "./components/header";
import Footer from "./components/footer";

const Features: React.FC = () => {
    const navigate = useNavigate();
    return (
        <body className="page-two">
            <Header />

        <main className="main_content">
            <section className="section_one">
                <h1 className="feature_title">
                    What Makes Cubicles Different?
                </h1>
                <p className="feature_text">
                    Pixel-Perfect Collaboration: <br />
                    “Connect and share ideas effortlessly in real-time with pixel-inspired tools that blend creativity and functionality.”
                </p>
                <p className="feature_text">
                    Customizable Workspaces: <br />
                    “Personalize your digital cubicle with themes, layouts, and widgets to make it truly yours.”
                </p>
                <p className="feature_text">
                    Your data, your rules. Cubicles ensures the highest level of encryption and control for your team’s privacy. <br />
                    <Link to={"/register"}>
                        <button className="get_started_button">
                            GET STARTED FOR FREE
                        </button>
                    </Link>
                </p>

            </section>
            <section className="section_two">
                <h1 className="feature_title">
                    Customizable Virtual Cubicles
                </h1>
                <p className="feature_text">
                    Your Cubicle is your personal space in the digital world! <br />
                    Decorate it with unique items, NFTs, and collectibles to showcase your personality. Use exclusive designs and layouts to transform your cubicle into a hub that reflects your style, achievements, and creativity.
                </p>
            </section>
            <section className="section_three">
                <h1 className="feature_title">
                    Dynamic Coin Generation
                </h1>
                <p className="feature_text">
                    Earn coins through a fun and interactive clicker-style mechanic. Whether you're exploring, engaging with the community, or completing tasks, every action helps you generate currency. The more active you are, the more you'll earn!
                </p>
            </section>
            <section className="section_four">
                <h1 className="feature_title">
                    Integrated Marketplace
                </h1>
                <p className="feature_text">
                    The NFT Marketplace is your destination for trading unique digital assets.
                    Buy and sell rare items or unlock special packs using your earned coins.
                    Discover exclusive designs to enhance your cubicle and stand out in the community.
                    Coins act as the lifeblood of the marketplace, offering seamless access to premium features without real-money investment.
                </p>
            </section>
            <section className="section_five">
                <h1 className="feature_title">
                    Cubicles as Interactive Spaces
                </h1>
                <p className="feature_text">
                    Cubicles aren’t just static displays—they’re interactive zones! <br />
                    Host conversations or events directly in your space. <br />
                    Integrate music players, animations, and community features to create a lively atmosphere. <br />
                    Allow visitors to explore your curated NFT collection or engage in real-time chats. <br />
                    <Link to={"/register"}>
                    <button className="get_started_button">
                        GET STARTED FOR FREE
                    </button>
                    </Link>
                </p>
            </section>
        </main>
        <Footer />
        </body>
    )
}

export default Features;