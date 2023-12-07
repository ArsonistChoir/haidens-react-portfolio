import React from 'react';

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
        </footer>
    );
}

export default Footer;