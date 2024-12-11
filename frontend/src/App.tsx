import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Terms from "./pages/Terms";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route>
                    <Route path="/" element={<Home />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/terms" element={ <Terms />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App;