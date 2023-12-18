import React from 'react';
import '../App.css'

function Footer() {
    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer>
            <button onClick={handleBackToTop}>Back to Top</button>
            <a href="https://github.com/ArsonistChoir" id='github-link'>My Github</a>
        </footer>
    );
}

export default Footer;