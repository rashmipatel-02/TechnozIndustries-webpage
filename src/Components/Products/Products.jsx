import React from 'react'
import './Product.css';

const Products = () => {
    return (
        <div className='product text-center w-100 mx-auto'>

            <h4 className='text-light mt-5 items-center fw-normal'>
                <img src="/Slider Images/faviconimg.png" alt="" style={{ height: "30px", marginRight: "5px" }} />
                <span>Our Products</span>
            </h4>

            <h3 className='text-light fs-2'>Your Complete Fire Protection Products</h3>

            <div className="box-container mx-5">
                <div className="row">
                    <div className=" col-12 col-lg-7 d-flex justify-content-center">
                        <div className='box1 d-flex flex-column flex-md-row' style={{ width: "100%" }}>
                            <div className="boxtext text-light text-start">
                                <h3>CO2 Flooding System</h3>
                                <p className='box-des'>A CO2 Gas Based Automatic Fire Suppression System reduces the oxygen levels and controls the fire.</p>
                                <p className='read-more'>Read More <i class="fa-solid fa-chevron-right"></i></p>
                            </div>
                            <div className="boximg  d-flex justify-content-center">
                                <img  src="https://web.technozindustries.com/wp-content/uploads/2024/10/TEchnoz-Services-300x223.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 d-flex justify-content-center">
                        <div className='box2 d-flex flex-column flex-md-row' style={{ width: "100%" }}>
                            <div className="boxtext text-light text-start px-2 pe-5">
                                <h4>Fire Hydrant System</h4>
                                <p className='box-des'>Water Sprinkler Based Fire Suppression System</p>
                                <p className='read-more'>Read More <i class="fa-solid fa-chevron-right"></i></p>
                            </div>
                            <div className="boximg  d-flex justify-content-center">
                                <img src="https://web.technozindustries.com/wp-content/uploads/2024/09/Co2-2-95x212.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 d-flex justify-content-center">
                        <div className='box1 d-flex flex-column flex-md-row gap-3' style={{ width: "100%" }}>
                            <div className="boxtext text-light text-start">
                                <h4>Fire Supression System</h4>
                                <p className='box-des'>Gas Based Automatic Fire Suppression System</p>
                                <p className='read-more'>Read More <i class="fa-solid fa-chevron-right"></i></p>
                            </div>
                            <div className="boximg  d-flex justify-content-center">
                                <img src="https://web.technozindustries.com/wp-content/uploads/2024/09/Fire-Extinguisher-ECARUJB-594x1024-1-110x220.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 d-flex flex-md-row">
                        <div className='box2 d-flex flex-column flex-md-row' style={{ width: "100%" }}>
                            <div className="boxtext text-light text-start">
                                <h3>Fire Extinguishers</h3>
                                <p className='box-des'>Various Extinguishers Useful to Extinguish Type B and Electrical Fire Events</p>
                                <p className='read-more'>Read More <i class="fa-solid fa-chevron-right"></i></p>
                            </div>
                            <div className="boximg d-flex justify-content-center">
                                <img src="https://web.technozindustries.com/wp-content/uploads/2024/09/group-of-firefighters-in-protective-uniform-UCMY9D-1024x760-1-300x223.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                        <div className='box1 d-flex flex-column flex-md-row' style={{ width: "100%" }}>
                            <div className="boxtext text-light text-start">
                                <h4>Fire Alarm Systems</h4>
                                <p className='box-des'>We Provide Addressable and Wireless Fire Alarm Systems for fire safety purposes.</p>
                                <p className='read-more'>Read More <i class="fa-solid fa-chevron-right"></i></p>
                            </div>
                            <div className="boximg">
                                <img className='container-fluid' src="https://web.technozindustries.com/wp-content/uploads/2024/09/TEchnoz-Services.png" alt="" style={{ width: "70%" }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                        <div className='box2 d-flex flex-column flex-md-row' style={{ width: "100%" }}>
                            <div className="boxtext text-light text-start">
                                <h4>Tube Based Fire Suppression Systems</h4>
                                <p className='box-des'>Tube based alarm system for Automatic Fire Supressin System</p>
                                <p className='read-more'>Read More <i class="fa-solid fa-chevron-right"></i></p>
                            </div>
                            <div className="boximg d-flex justify-content-center">
                                <img className='container-fluid' src="https://web.technozindustries.com/wp-content/uploads/2024/09/TEchnoz-Services-1.png" alt="" style={{ width: "70%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products