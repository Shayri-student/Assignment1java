import { Footer } from "./Footer"
import { Hero_Sec_Content_Component } from "./Hero_Sec_Content_Component"
import { Mid_Section } from "./Mid_Section"
import { Nav_Component } from "./Nav_Component"
import backImage from "../assets/backImage.jpg" 
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

const Home_Page_Component = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${backImage})`, backgroundPosition: "center", backgroundSize: "cover", width: "100%", height: "770px",backgroundRepeat:"no-repeat" }}>
                <Nav_Component/>
                <Hero_Sec_Content_Component />
            </div>
            <Mid_Section />
            <Footer />
        </>
    )
}
export { Home_Page_Component }