import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './frontend/components/Navbar';
import Login from './frontend/pages/auth/Login';
import Register from './frontend/pages/auth/Register';
import ReportAccident from './frontend/pages/accidents/ReportAccident';
import AccidentList from './frontend/pages/accidents/AccidentList';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/report" element={<ReportAccident />} />
                <Route path="/accidents" element={<AccidentList />} />
            </Routes>
        </Router>
    );
}

export default App;
