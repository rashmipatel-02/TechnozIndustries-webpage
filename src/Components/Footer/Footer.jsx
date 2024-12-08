import React from 'react'

const Footer = () => {
    return (
        <div className="Footer" style={{ background: "black" }}>
            <div className="container p-4 pb-1">
                <div className="row p-4 pb-1">
                    <div className="col-12 col-md-8">   
                        <div className="row pb-4">
                            <div className="col-12 col-md-4">
                                <div className="logo">
                                    <img src="https://web.technozindustries.com/wp-content/uploads/2024/09/logo-final-2-1.png" alt="" width={"100%"} />
                                </div>
                                <div className="text-white my-4" style={{ textAlign: "justify", margin:"30px 5px" }}>Technoz Industries offers innovative fire safety solutions, providing reliable fire suppression systems and equipment to safeguard homes and businesses with a commitment to quality and protection.
                                </div>
                                <div className="icon d-flex gap-3 my-3 ">
                                    <i style={{ background: "chocolate", borderRadius: "5px", color: "white", padding: "5px 8px", fontSize: "24px" }} class="fa-brands fa-facebook-f"></i>
                                    <i style={{ background: "chocolate", borderRadius: "5px", color: "white", padding: "5px", fontSize: "24px" }} class="fa-brands fa-instagram"></i>
                                    <i style={{ background: "chocolate", borderRadius: "5px", color: "white", padding: "5px", fontSize: "24px" }} class="fa-brands fa-x-twitter"></i>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 d-flex justify-content-center">
                                <div>
                                    <div className="h2 text-white">Useful links</div>
                                    <hr style={{borderBottom:"1px dashed white"}}/>
                                    <ul style={{ color: 'white', listStyle: "none" }}>
                                        <li className="my-2">{">"} Home</li>
                                        <li className="my-2">{">"} About Us</li>
                                        <li className="my-2">{">"} Our Products</li>
                                        <li className="my-2">{">"} Client</li>
                                        <li className="my-2">{">"} Contact</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-12 col-md-4">
                                <div className="h2 text-white">Contact</div>
                                <hr style={{borderBottom:"1px dashed white"}}/>
                                <ul style={{ color: 'white', listStyle: "none" }}>
                                    <li className="my-2"><span><i style={{ color: "lightblue" }} class="fa-solid fa-phone"></i></span><span> +91 9313639685</span></li>
                                    <li className="my-2"><span><i style={{ color: "lightblue" }} class="fa-solid fa-phone"></i></span><span> +91 82000256068</span></li>
                                    <li className="my-2"><span><i style={{ color: "lightblue" }} class="fa-solid fa-envelope"></i></span><span className="ms-1">
                                        example123@gmail.com</span></li>
                                    <li className="my-2"><span><i style={{ color: "lightblue" }} class="fa-solid fa-envelope"></i></span><span className="ms-1">technzindusries@gmail.com</span></li>
                                    <li className="my-2"><span><i style={{ color: "lightblue" }} class="fa-solid fa-location-dot"></i></span><span className="ms-1">216 fortune industrial park, <br /> kathwada-singarva road, Ahmedabad, Gujrat-382430</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex align-items-end">
                        <div className="d-flex align-items-end">
                            <img src="https://web.technozindustries.com/wp-content/uploads/2024/09/Untitled-design-2024-09-19T111815.336.png" alt="" width={"100%"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer