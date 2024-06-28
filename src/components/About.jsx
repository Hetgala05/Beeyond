import React,{useEffect} from "react";
import "./About.css";
import AOS from 'aos'; 
import "aos/dist/aos.css";

import img_1 from "../assets/img_p1.webp";
import img_2 from "../assets/img_p2.webp";
import img_3 from "../assets/img_p3.webp";
import img_4 from "../assets/img_p4.webp";
import img_5 from "../assets/img_p5.webp";
import img_6 from "../assets/img_p6.webp";


const About = () => {
    useEffect (() =>{
        AOS.init({duration:2000});
      },[])
    return (
        <div className="about">
            <div className="left">
                <div className="image" >
                    <img 
                        data-aos = "zoom-in"
                        src={img_1}
                        className="image_scroll"
                    />
                    <img 
                        data-aos = "zoom-in"
                        src={img_2}
                        className="image_scroll_2"
                    />
                    <img 
                        data-aos = "zoom-in"
                        src={img_3}
                        className="image_scroll_3"
                    />
                    <img 
                        data-aos = "zoom-in"
                        src={img_4}
                        className="image_scroll_4"
                    />
                    <img 
                        data-aos = "zoom-in"
                        src={img_5}
                        className="image_scroll_5"
                    />
                    <img 
                        data-aos = "zoom-in"
                        src={img_6}
                        className="image_scroll_6"
                    />
                </div>
            </div>
            <div className="right" data-aos="fade-down">
                <h3>We are a design company that helps brands define and thrive in culture. Creating influential strategy, brand identity, packaging design and communications.</h3>
            </div>
        </div>
    );
}

export default About;
