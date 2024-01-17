import { Button_Shop_Component } from "./Button_Shop_Component"
import { Image_Component } from "./image_component"

const Hero_Sec_Content_Component=()=>{
   return (
    <div className="Herosection">
        <div className="row">
            <div className="col-6">
                <div className="text-center ">
                <Image_Component className="p-0 pe-5" height="450px" src="../src/assets/hm1-single-1.webp"/> 
                </div>
            </div>
            <div className="col-6 pt-5 d-flex justify-content-start">
            <div>
            <h1 className="off30">30% off</h1>
        <h1 className="heading">Comfort Chair</h1>
        <h5 className="fs-4">Collect from Daxone & get 30% Discount. </h5> <br /> <br />
        <Button_Shop_Component/>
        </div>
            </div>
        </div>
        
    </div>
   ) 
}
const Hero_Sec_Content_ProductDetails_Component =()=>{
    return(<>
    <div className="Herosection">
        <div className="row">
            <div className="col pt-5 d-flex justify-content-center ">
            <div>
        <h1 className="heading">Product Details Page</h1>
        <h5 className="fs-4">Home/<p className="color-danger">Product Details</p></h5>
        </div>
            </div>
        </div>
        
    </div>
    </>
    )
}
export {Hero_Sec_Content_Component,Hero_Sec_Content_ProductDetails_Component}