import { Image_Component } from "./image_component"

const Mid_Section_Prod1 =(props)=>{
return(
    <div className="row">
        <div className="col-3">
            <a href={productDetailpage()}><Image_Component src={props.img1} height="250px"/></a>
            
            <p>Chair <br />
            Golden Easy Spot Chair <br />
            <strong>{props.price1}</strong></p>
        </div>
        <div className="col-3">
            <Image_Component src={props.img2} height="250px" />
            <p>Chair <br />
            Golden Easy Spot Chair <br />
            <strong>{props.price2}</strong></p>
        </div>
        <div className="col-3">
            <Image_Component src={props.img3} height="250px"/>
            <p>Chair <br />
            Golden Easy Spot Chair <br />
           <strong> {props.price3}</strong></p>
        </div>
        <div className="col-3">
            <Image_Component src={props.img4} height="250px"/>
            <p>Chair <br />
            Golden Easy Spot Chair <br />
           <strong>{props.price4}</strong> </p>
        </div>
    </div>
)
}
export{Mid_Section_Prod1}