import React from 'react';

function Footer() {
    return (
        <footer className=" footer">
            <section className="d-flex container">
                <div className="footer-social">
                    <a href="https://facebook.com/josheytee"><img src="/icons/facebook.svg" /></a>
                    <a href="https://www.linkedin.com/in/oluwatobiloba-joshua-agbeja-2a4250108" target="_blank"><img src="/icons/linkedin.svg" /></a>

                    <a href="https://twitter.com/josheytee" target="_blank"><img src="/icons/twitter.svg" /></a>
                    <a href="https://www.github.com/josheytee" target="_blank"><img src="/icons/github.svg" /></a>
                </div>
                <div>
                    Designed with <span role="img" aria-label="love">💖</span> by Oluwatobiloba Agbeja
                </div>
            </section>
        </footer>
    )
}

export default Footer;