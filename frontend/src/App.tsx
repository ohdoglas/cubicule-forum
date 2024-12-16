import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/public/Home";
import Features from "./pages/public/Features";
import About from "./pages/public/About";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import Cookies from "./pages/legal/Cookies";
import Accessibility from "./pages/public/Accessibility";
import Pricing from "./pages/legal/Pricing";
import Help from "./pages/public/Help";
import Contact from "./pages/public/Contact";
import Confirm from "./pages/auth/Confirm";
import AdminSetup from "./pages/admin/AdminSetup";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import NotFound from "./pages/public/NotFound";
import SetupComplete from "./pages/admin/SetupComplete";

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
                    <Route path="/confirm" element={ <Confirm /> } />
                    <Route path="/admin-setup" element={ <AdminSetup />} />
                    <Route path="/register" element={ <Register />} />
                    <Route path="/login" element={ <Login /> } />
                    <Route path="/not-found" element={ <NotFound /> } />
                    <Route path="/setup-complete" element={ <SetupComplete />} />
                    </Route>
            </Routes>
        </Router>
    )
}

export default App;