import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import './App.css';
import { Home_Page_Component } from './Components/Home_Page_Component';
import { Product_Details_Component } from './Components/Product_Details_Component';
const App = ()=>{
  const [product_link, productImage] = useState(unclicked);
  const productDetailpage = () => {
    //   const toggle_var = show_more ? false : true;
    //   setShow_more(toggle_var);
    const imageLink = product_link ? unclicked : clicked
    productImage(imageLink);

    };
 
 
 return (
 <div>
  { product_link ? (
    <Home_Page_Component/> 
  ): <Product_Details_Component/>
  }
  {/* <Product_Details_Component/> */}
  </div>
  )
}
export default App;