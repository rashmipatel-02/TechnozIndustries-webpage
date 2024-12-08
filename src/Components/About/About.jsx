import React from 'react'
import './About.css'

const About = () => {

    const featureIcon = "https://img.icons8.com/?size=100&id=86524&format=png&color=FFFFFF";


    return (
        <div className='about-container position-relative d-flex flex-column mb-5'>

            <div className='row mx-4'>
                <div className="about-image col-md-6">
                    <img className='w-100' src="https://web.technozindustries.com/wp-content/uploads/2024/09/Aboout-Technoz-2.webp" alt="" />

                </div>
                <div className="about-content mt-1 col-md-6 px-3">
                    <h4 className='fw-normal about-title'>About Us</h4>
                    <h1 className='pb-2'>Where Fire Safety Meets Innovation</h1>
                    <hr />
                    <p className='pt-3'>At TechnozIndustries, we specialize in delivering cutting-edge fire safety solutions to protect lives and property. Our comprehensive range of fire suppression and prevention systems is designed for both residential and commercial environments, ensuring optimal safety and peace of mind.</p>
                    <p>Our expert team delivers exceptional service, handling everything from installation to ongoing maintenance. With our advanced technology and dedicated support, you can enjoy 24/7 protection and the peace of mind that comes with knowing your safety is in expert hands.</p>
                    <div className='d-flex flex-column flex-md-row justify-content-between me-3 mt-4'>
                        <ul>
                            <li><img src={featureIcon} alt="" /> Own Manufacturing</li>
                            <li><img src={featureIcon} alt="" /> Wide Range of Collection</li>
                            <li><img src={featureIcon} alt="" /> Innovative Technology</li>
                        </ul>
                        <ul>
                            <li><img src={featureIcon} alt="" /> Expert Fire Safety Solutions</li>
                            <li><img src={featureIcon} alt="" /> ISO Certified Quality</li>
                            <li><img src={featureIcon} alt="" /> Dedicated Support Team</li>
                        </ul>
                    </div>
                </div>
            </div>
            <img className='last-img d-none d-md-block position-absolute mb-5 pb-5' src="https://web.technozindustries.com/wp-content/uploads/2024/09/Fire-Extinguisher-370x365.png" alt="" />
        </div>
    )
}

export default About