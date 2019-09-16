import React from 'react';

const Footer = () => {
    return (
        <footer className="w-100 d-md-flex justify-content-around d-none">
            <div className="footer-item lunch">
                <img src="/images/tab_lunch@2x.png" alt="lunch-icon" />
                <h4>lunch</h4>
            </div>
            <div className="footer-item internets">
                <img src="/images/tab_internets@2x.png" alt="internets-icon" />
                <h4>internets</h4>
            </div>
        </footer>
    );
}

export default Footer;