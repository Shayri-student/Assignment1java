import backImage from "../assets/backImage.jpg" 
import { Hero_Sec_Content_Component, Hero_Sec_Content_ProductDetails_Component } from "./Hero_Sec_Content_Component"
import { Nav_Component } from "./Nav_Component"
import { Image_Component } from "./image_component"

const Product_Details_Component = ()=>{
    return (
        <>
        <div className="mb-5" style={{ backgroundImage: `url(${backImage})`, backgroundPosition: "center", backgroundSize: "cover", width: "100%", height: "700px",backgroundRepeat:"no-repeat" }}>
                <Nav_Component/>
                <Hero_Sec_Content_ProductDetails_Component/>
            </div>
            <div className="container">
                <div className="row" >
                    <div className="col-6" style={{width:"600px",height:"600px"}}>
                        <Image_Component height="100%" width="100%" src="./src/assets/Product-ser-1/pro-hm1-1.jpg"/>
                    </div>
                    <div className="col-6">
                        <p>Life Style</p>
                        <h2>LaaVista Depro, FX 829 v1</h2>
                        <div className="color-selector">
                            <span>Color :</span>
                            <div className="color-options">
                            <ul>
                                <li className="green"></li>
                                <li className="yellow"></li>
                                <li className="red"></li>
                                <li className="blue"></li>
                            </ul>
                        </div>
                        </div> <br />
                        <div className="size-selector">
                            <span>Size:</span>
                            <div className="size-options">
                            <ul>
                                <li>S</li>
                                <li>M</li>
                                <li>XL</li>
                                <li>XXL</li>
                            </ul>
                        </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}
export {Product_Details_Component}