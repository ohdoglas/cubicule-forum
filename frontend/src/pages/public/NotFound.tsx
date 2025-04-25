import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import '../../css/styles/public/NotFound.css';


const NotFound: React.FC = () => {
    const navigate = useNavigate();
    return (
        <body className="page-six">
            <Header />

            <main className="main_content">
                <section>
                    <div className="title_background">
                    <h1 className="not_found_title">
                        404
                    </h1>
                    <p className="">
                        Sorry, we couldn't find the page you were looking for.  <br />It may have been moved, deleted, or the URL might have been typed incorrectly. 
                    </p>
                    </div>
                    <p className="not_found_text">
                        Please check the URL or go back to the homepage. <br />
                        <Link to={"/"}>
                            <button className="return_button">
                                RETURN TO CUBICLES
                            </button>
                        </Link>
                    </p>
                </section>

            </main>

            <Footer />
        </body>
    )
}

export default NotFound;