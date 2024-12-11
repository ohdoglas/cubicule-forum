import React from "react";
import { Link } from "react-router-dom";
import '../../css/components/header.css'

const Header: React.FC = () => {
    return (
        <header className="header">
            <nav className="header_nav">
                <div className="header_nav_logo">
                    <Link to={"/"}><img className="header_nav_logo_img" alt=""/></Link>
                    <Link to={"/"}><img className="header_nav_logo_name" alt="" /></Link>
                </div>
            </nav>
        <div className="header_nav_buttons">
                <button className="header_nav_login_button">LOGIN</button>
                <button className="header_nav_register_button">REGISTER</button>
            </div>
    </header>
    );
}

export default Header;