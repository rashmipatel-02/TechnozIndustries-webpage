import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import './Experience.css';

const Experience = () => {
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef(null);

    const counters = [
        { end: 10, duration: 3, label: "Years Of Experience" },
        { end: 100, duration: 2, label: "Projects Completed" },
        { end: 400, duration: 1, label: "Clients" },
        { end: 50, duration: 2, label: "Trained Staff" },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold: 0.5 }
        );

        if (counterRef.current) observer.observe(counterRef.current);

        return () => counterRef.current && observer.unobserve(counterRef.current);
    }, []);

    return (
        <div>
            <div className="fire-bg">
                <div className="playicon"><i className="fa-solid fa-circle-play"></i></div>
            </div>
            <div className="counter-section">
                <div className="counter-box d-flex justify-content-evenly flex-md-row flex-column" ref={counterRef}>
                    {isVisible &&
                        counters.map((counter, index) => (
                            <div key={index} className="counter">
                                <h2>
                                    <CountUp start={0} end={counter.end} duration={counter.duration} />
                                    <span className="fs-1">+</span>
                                </h2>
                                <p>{counter.label}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
