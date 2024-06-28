import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="left_footer">
                    <h3>sitemap</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Ventures</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                    </ul>
                </div>
                <div className="right_footer">
                    <div className="cpy">
                        <h3>copyright</h3>
                        <li>2023 Our Revolution PTY Ltd</li>
                    </div>
                    <div className="new_business">
                        <h3>new business</h3>
                        <li>hello@our-revolution.com</li>
                    </div>
                    <div className="or_ventures">
                        <h3>or ventures</h3>
                        <li>ventures@our-revolution.com</li>
                    </div>
                    <div className="social">
                        <h3>social</h3>
                        <li><a href="#">Linkedin</a></li>
                        <li><a href="#">Behance</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Pinterest</a></li>
                    </div>
                    <div className="sydney">
                        <h3>sydney</h3>
                        <p>C26, 99 Jones Street, Ultimo, Sydney, 2007, NSW, Australia</p>
                        <li><a href="#">+61 (02) 8034 2611 </a></li>
                    </div>
                    <div className="london">
                        <h3>london</h3>
                        <p>86-90 Paul Street, London, EC2A 4NE, United Kingdom</p>
                        <li><a href="#">+44 (0)20 3131 0036 </a></li>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h1 className="tracking-widest uppercase lg:text-9xl md:text-8xl sm:text-6xl flex justify-center">
                    <div className="mr-2" data-aos="fade-right">our</div>
                    <div data-aos="fade-down">revo</div>
                    <div data-aos="fade-left">lution</div></h1>
            </div>
        </div>
    );
}

export default Footer;
