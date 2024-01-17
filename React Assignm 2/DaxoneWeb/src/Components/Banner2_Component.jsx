import { Button_Shop_Component } from "./Button_Shop_Component"
import { Image_Component } from "./image_component"

const Banner2_Component =()=>{
    return (
        <div  className="row mt-5 mb-5">
            <div className="col-6">
                <Image_Component src="./src/assets/Banner-2/banner-1.jpg "/>
            </div>
            <div className="col-6 pt-5">
                <div className="mt-6 d-flex flex-column justify-content-center ">
                <div >
                <p className="mt-5 pt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <h1 className="mt-2 pt-2">Winter Discount <br />Up to 30%</h1>
                <p className="mt-2 pt-4 mb-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                </div>
                <Button_Shop_Component/>
            </div>

        </div>

        
    )
}
export {Banner2_Component}