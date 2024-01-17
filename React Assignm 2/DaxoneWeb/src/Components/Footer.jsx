import { Footer_text } from "./Footer_text"
import { Image_Component } from "./image_component"

const Footer =(props)=>{
    return (
        <div className="bg-footer">
            <div className="container">
        <div className="row mt-5">
            <div className="col-3 mt-5 pt-5">
                <Image_Component src="./src/assets/logo-1.webp"/> <br /> <br />
                <h6>Follow us:</h6>
                <div className="mt-4">
                <i class="fa-brands p-2 fa-twitter"></i>
                <i class="fa-brands p-2 fa-facebook-f"></i><i class="fa-brands p-2 fa-pinterest"></i>
                <i class="fa-solid p-2 fa-v"></i></div>
               
            </div>
            <div className="col-3 mt-5 pt-5">
                <Footer_text h2="USEFUL LINK" p1="Shopping Cat" p2="WIshlist" p3="Chekout" p4="Support"/>
                </div>
                <div className="col-3 mt-5 pt-5">
                <Footer_text h2="ABOUT US" p1="About" p2="Products" p3="Terms and conditions" p4="Help Center"/>
                </div>
                <div className="col-3 mt-5 pt-5">
                <Footer_text h2="NEWSLETTER" p1="About" p2="Subscribe to get all new updates" p3={<input type='text' placeholder='Email' width= '200px' />} p4=""/>
                </div>

        </div>
        </div>

        </div>
    )
}
export {Footer}