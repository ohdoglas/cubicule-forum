import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Accessibility from "./pages/Accessibility";
import Pricing from "./pages/Pricing";
import Help from "./pages/Help";
import Contact from "./pages/Contact";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route>
                    <Route path="/" element={<Home />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/accessibility" element={<Accessibility />} />
                    <Route path="/pricing" element={ <Pricing />} />
                    <Route path="/help" element={ <Help /> } />
                    <Route path="/contact" element={ <Contact /> } />
                    </Route>
            </Routes>
        </Router>
    )
}

export default App;