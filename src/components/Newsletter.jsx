import React, { useEffect } from "react";
import "./Newsletter.css";
import AOS from 'aos'; 
import "aos/dist/aos.css";

const Newsletter = () => {
    const handleHover = (e) => {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const distX = Math.max(x, rect.width - x);
        const distY = Math.max(y, rect.height - y);

        button.style.setProperty('--x', `${x}px`);
        button.style.setProperty('--y', `${y}px`);
        button.style.setProperty('--distX', `${distX}px`);
        button.style.setProperty('--distY', `${distY}px`);
    };
    useEffect (() =>{
        AOS.init({duration:2000});
      },[])
    
    return (
        <div className="newsletter" data-aos="fade-up"  data-aos-duration="2000">
            <h3>stay connected</h3>
            <p>New insights. New ideas. New opportunities. All delivered to your inbox.</p>
            <h1 className="h1-responsive">The Newsroom</h1>
            <input
                type="text"
                placeholder="ENTER YOUR EMAIL ADDRESS"
                className="bg-transparent border-b-2 border-b-black w-[20rem] text-center my-4 outline-none focus:placeholder-transparent"
            />
            <button className="signup_btn" onMouseMove={handleHover}>
                <span>SIGN UP</span>
            </button>
        </div>
    );
}

export default Newsletter;
