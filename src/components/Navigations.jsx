import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Navigations() {
    return (
    <div>
        <nav>
            <ul>
                <li><a href="#AboutMe">About Me</a></li>
                <li><a href="#Portfolio">Portfolio</a></li>
                <li><a href="#ContactMe">Contact Me</a></li>
            </ul>
        </nav> 
    </div>
    );
}
 
export default Navigations;