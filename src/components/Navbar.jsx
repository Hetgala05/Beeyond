import React, { useState, useEffect } from 'react';
import Backdrop from './Backdrop';
import './Navbar.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isFixed, setIsFixed] = useState(true); // Initially fixed at the top

    useEffect (() =>{
        AOS.init({duration:2000});
      },[])

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            if (currentScrollPos > prevScrollPos && isFixed) {
                setIsFixed(false);
            }
            else if (currentScrollPos < prevScrollPos && !isFixed) {
                setIsFixed(true);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, isFixed]);

    return (
        <div className={`Navbar ${isFixed ? 'fixed top-0 left-0 right-0 bg-transparent z-10 transition-all duration-300 ease-in-out' : 'relative'}`}>
            <button onClick={() => setIsOpen(true)}>Menu</button>
            {isOpen && <Backdrop isOpen={isOpen} onClose={() => setIsOpen(false)} />}
            <h1 className="text-3xl font-semibold cursor-pointer">OurRevolution</h1>
            <button onClick={() => setIsOpen(true)}>Work*</button>
            {isOpen && <Backdrop isOpen={isOpen} onClose={() => setIsOpen(false)} />}
        </div>
    );
}

export default Navbar;
