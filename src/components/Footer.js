import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    
    return (
        <div>
            <footer className="footer">
                ⓒ {year} All Rights Reserved by Shankar
            </footer>
        </div>
    );
}

export default Footer;