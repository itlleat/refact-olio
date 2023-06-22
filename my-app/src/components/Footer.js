import React from "react";

function Footer() {
    return (
        <footer className="footer col-3">
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'fixed',
                bottom: '0',
            }}>
             <a href="https://github.com/itlleat/">
                    <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                </a>
                
                <a href="https://www.linkedin.com/in/scott-schulman-b7b290202/">
                    <img className="logo" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedIn" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;


