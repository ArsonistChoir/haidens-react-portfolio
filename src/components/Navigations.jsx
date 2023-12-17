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
            <div>
            <nav>
            <ul>
                <li><a href="#AboutMe">About Me</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#ContactMe">Contact Me</a></li>
            </ul>
        </nav>
            
            </div>
    );
}

export default Navigations;