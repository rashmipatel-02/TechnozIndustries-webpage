import React from 'react'
import './Contact.css'

const Contact = () => {
    return (<>
        <div className='contact d-flex justify-content-center  row p-4'>
            <div className="text col-12 px-4">
                <h1 style={{ fontSize: "50px" }} className='px-5 pt-3'>Reach Out for Expert Fire <br /> Protection Solutions!</h1>
                <form action="" className='ps-5 pb-5 my-3'>
                    <input type="text" placeholder='Your Name(*)' />
                    <input type="email" placeholder='Your Email(*)' />
                    <input type="text" placeholder='Mobile Number(*)' />
                    <select className='my-3' name="" id="">
                        <option value="">Select Products </option>
                        <option value="">CO2 Flooding System</option>
                        <option value="">Fire Hydrant System</option>
                        <option value="">CO2 Fire Extingushers</option>
                        <option value="">Fire Alarm Systems</option>
                    </select><br />
                    <button className='my-3'>Send Message</button>
                    <span style={{ color: "white", fontSize: "20px", margin: "10px 20px", fontWeight: "bold" }}> Call Us On: <i style={{ color: "white" }} class="fa-solid fa-phone"></i> +1 2345678906</span>
                </form>
            </div>

        </div>
        <div className="row bg-dark" style={{position:"relative", height:"200px"}}> 
              <div className="col-12">
                <div className="image" style={{position:"absolute", right:"10%", bottom:"10%"}}>
                    <img className='' src="https://web.technozindustries.com/wp-content/uploads/2024/09/Fire-Hydrant-5Y9BFX-270x465.png" alt="" width={"100%"}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact