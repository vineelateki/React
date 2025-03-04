import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function Home() {
 return <h1>Home Page</h1>;
}
function About() {
 return <h1>About Page</h1>;
}
function App() {
 return (
<Router>
<nav>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
</nav>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
</Routes>
</Router>
 );
}
export default App;