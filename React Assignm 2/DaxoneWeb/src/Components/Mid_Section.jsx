import { Banner2_Component } from "./Banner2_Component"
import { Mid_Section_Prod1 } from "./Mid_Section-Prod1"
import { Image_Component } from "./image_component"

const Mid_Section = ()=>{
    return (
        <div className='container p-2'>
  <div className="row">
    <div className="col">
        <div className="Banner1 d-flex justify-content-center align-items-center flex-column">
            <div className="d-flex flex-column align-items-center ">
            <h1 className="ms-5 banner_h1">Premium Home <br /> Decorator</h1>
            <a className="banner-link" href="">Learn More</a>
            </div>
        </div>
        <div className="row">
            <div className="col p-5">
            <div className="text-center p-5">
                <h1>Best Sell</h1>
                <p className="p-2 ps-5 pe-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, minus?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime saepe porro illo. similique eius quasi dolorem a. Ut aspernatur aliquid dolores nemo repellat.</p>
            </div>
            </div>
        </div>
        <Mid_Section_Prod1 img1="./src/assets/Product-ser-1/pro-hm1-1.jpg" img2="./src/assets/Product-ser-1/pro-hm1-2.jpg" img3="./src/assets/Product-ser-1/pro-hm1-3.jpg" img4="./src/assets/Product-ser-1/pro-hm1-4.jpg" price1 ="210$" price2 ="210$" price3 ="250$" price4 ="250$"/>
    </div>
  </div>
  <Banner2_Component/>
  <Mid_Section_Prod1 img1="./src/assets/Product-ser-1/pro-hm1-1.jpg" img2="./src/assets/Product-ser-1/pro-hm1-2.jpg" img3="./src/assets/Product-ser-1/pro-hm1-3.jpg" img4="./src/assets/Product-ser-1/pro-hm1-4.jpg" price1 ="210$" price2 ="210$" price3 ="250$" price4 ="250$"/>
  <Mid_Section_Prod1 img1="./src/assets/Product-ser-2/pro-hm1-5.jpg" img2="./src/assets/Product-ser-2/pro-hm1-6.jpg" img3="./src/assets/Product-ser-2/pro-hm1-7.jpg" img4="./src/assets/Product-ser-2/pro-hm1-8.jpg" price1 ="210$" price2 ="210$" price3 ="250$" price4 ="250$"/>
  </div>
    )
}
export {Mid_Section}