import { useState, useEffect } from "react";
import SliderData from "../../DataBase/SliderData";
import Slider from "react-slick";
import './Home.css'

export default function HomeScreen() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [triggerAnimation, setTriggerAnimation] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        beforeChange: (_, next) => {
            setTriggerAnimation(false); 
            setTimeout(() => setTriggerAnimation(true), 100); 
            setActiveIndex(next); 
        },
    };

    useEffect(() => {
        setTriggerAnimation(true);
    }, []);

    return (
        <div className="slider">
            <Slider {...settings}>
                {SliderData.map((slide, index) => (
                    <div key={index} className="slide mb-5 pb-5">
                        <img src={slide.image} alt={slide.content.title} className="slide-image" />
                        <div className="slide-content">
                            <div className={`title ${triggerAnimation ? "animate-title" : ""}`}>
                                <div className="box title_box"></div>
                                <h1 className="h1">{slide.content.title}</h1>
                            </div>
                            <div className={`note ${triggerAnimation ? "animate-note" : ""}`}>
                                <div className="box note_box"></div>
                                <p>{slide.content.note}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
