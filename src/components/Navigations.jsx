import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
    return <div>Home Page</div>;
}

function About() {
    return <div>About Me Page</div>;
}

function Portfolio() {
    return <div>Portfolio Page</div>;
}

function Contact() {
    return <div>Contact Page</div>;
}

function Navigations() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Me</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
            </div>
        </Router>
    );
}

export default Navigations;