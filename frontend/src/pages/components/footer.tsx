import React from "react";
import { Link } from "react-router-dom";
import '../../css/components/footer.css'

const Footer: React.FC = () => {
    return (
        <footer className="footer">
        <div className="links_left">
            <a href="/about">ABOUT US</a>
            <a href="/help">HELP CENTER</a>
            <a href="/contact">CONTACT US</a>
            <a href="/terms">TERMS OF SERVICE</a>
        </div>

        <div className="social_links">
            <div className="img_instagram" aria-label="instagram"></div>
            <div className="img_linkedin" aria-label="linkedin"></div>
            <div className="img_github" aria-label="github"></div>
            <div className="img_facebook" aria-label="facebook"></div>
            <div className="img_discord" aria-label="discord"></div>
        </div>

        <div className="links_right">
            <a href="/accessibility">ACCESSIBILITY</a>
            <a href="/pricing">PRICING</a>
            <a href="/privacy">PRIVACY POLICY</a>
            <a href="/cookies">COOKIE POLICY</a>
        </div>
    </footer>
    )
}

export default Footer;