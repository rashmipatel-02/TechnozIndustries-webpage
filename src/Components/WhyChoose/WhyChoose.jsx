import React from 'react'
import './whyChoose.css'

const WhyChoose = () => {
    return (
        <div className='text-center text-light m-5'>
            <h4 className='text-light mt-5 items-center fw-normal'>
                <img src="/Slider Images/faviconimg.png" alt="" style={{ height: "30px", marginRight: "5px" }} />
                <span>Why Choose us</span>
            </h4>

            <h3 className='text-light fs-2'>Choosing Us Means Choosing Safety</h3>

            <div className="WCbox-container my-5">
                <div className="row mx-auto d-flex justify-content-evenly p-2">
                    <div className="WCbox col-md-3 col-12">
                        <h1>
                            <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#f48635"><path d="m438-338 226-226-57-57-169 169-84-84-57 57 141 141Zm42 258q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z" /></svg>
                        </h1>
                        <h2 className='fs-3 fw-normal mt-3'>ISO Certified</h2>
                        <p>Ensuring top-tier quality and safety standards.</p>
                    </div>
                    <div className="WCbox col-md-3 col-12">
                        <h1><svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#f48635"><path d="m385-412 36-115-95-74h116l38-119 37 119h117l-95 74 35 115-94-71-95 71ZM244-40v-304q-45-47-64.5-103T160-560q0-136 92-228t228-92q136 0 228 92t92 228q0 57-19.5 113T716-344v304l-236-79-236 79Zm236-260q109 0 184.5-75.5T740-560q0-109-75.5-184.5T480-820q-109 0-184.5 75.5T220-560q0 109 75.5 184.5T480-300ZM304-124l176-55 176 55v-171q-40 29-86 42t-90 13q-44 0-90-13t-86-42v171Zm176-86Z" /></svg></h1>
                        <h2 className='fs-3 fw-normal mt-3'>Premium Quality Products</h2>
                        <p>Built for reliability and durability.</p>
                    </div>
                    <div className="WCbox col-md-3 col-12">
                        <h1>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={"60px"} width={"70px"} fill='#f48635'><path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16l-97.5 0c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8l97.5 0c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32L0 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32l-64 0z" /></svg>
                        </h1>
                        <h2 className='fs-3 fw-normal mt-3'>Innovative Fire Solutions</h2>
                        <p>Cutting-edge technology for optimal protection.</p>
                    </div>
                </div>
                <div className="row mx-auto d-flex justify-content-evenly">
                    <div className="WCbox col-md-3 col-12">
                        <h1>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={"60px"} width={"70px"} fill='#f48635'><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" /></svg>
                        </h1>
                        <h2 className='fs-3 fw-normal mt-3'>Experienced Team</h2>
                        <p>Expertise you can trust, from installation to support.</p>
                    </div>
                    <div className="WCbox col-md-3 col-12">
                        <h1>
                            <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#f48635"><path d="M480-120 80-600l120-240h560l120 240-400 480ZM368-630h224l-75-150h-74l-75 150Zm82 381v-321H183l267 321Zm60 0 267-321H510v321Zm149-381h136l-75-150H584l75 150Zm-494 0h136l75-150H240l-75 150Z" /></svg>
                        </h1>
                        <h2 className='fs-3 fw-normal mt-3'>Customize Fire Protection</h2>
                        <p>Custom solutions for every environment.</p>
                    </div>
                    <div className="WCbox col-md-3 col-12">
                        <h1>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#f48635"><path d="M880-81 721-240H300q-24.75 0-42.37-17.63Q240-275.25 240-300v-80h440q24.75 0 42.38-17.63Q740-415.25 740-440v-280h80q24.75 0 42.38 17.62Q880-684.75 880-660v579ZM140-425l75-75h405v-320H140v395ZM80-280v-540q0-24.75 17.63-42.38Q115.25-880 140-880h480q24.75 0 42.38 17.62Q680-844.75 680-820v320q0 24.75-17.62 42.37Q644.75-440 620-440H240L80-280Zm60-220v-320 320Z" /></svg>
                        </h1>
                        <h2 className='fs-3 fw-normal mt-3'>24/7 Support</h2>
                        <p>Always available for your fire safety needs.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhyChoose