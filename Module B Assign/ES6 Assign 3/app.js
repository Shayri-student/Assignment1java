let mblarr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        
    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
]
const dropDown = document.getElementById("brandslt")
const input = document.getElementById("input");



function searchmbl(){
    let filtered_array;
    if(dropDown.value === "brand"){
         filtered_array = mblarr.filter((currentobj,currentindex)=>{
             if(currentobj.brand.toLowerCase()=== input.value.toLowerCase()){
                return currentobj;
             }})
            }
    else if(dropDown.value === "model"){
        console.log(dropDown.value);
                filtered_array = mblarr.filter((currentobj)=>{
                    if(currentobj.model.toLowerCase()=== input.value.toLowerCase()){
                       return currentobj;
                    }})
                   }
    else if(dropDown.value === "price"){
                    filtered_array = mblarr.filter((currentobj,currentindex)=>{
                        if(currentobj.price.toLowerCase()=== input.value.toLowerCase()){
                           return currentobj;
                        }})
                       }
    else if(dropDown.value === "camera"){
                        filtered_array = mblarr.filter((currentobj,currentindex)=>{
                            if(currentobj.camera.toLowerCase()=== input.value.toLowerCase()){
                               return currentobj;
                            }})
                           }
            console.log(filtered_array);
            displayvalues(filtered_array);
        }

function displayvalues(filtered_array){
    const displayarray = document.getElementById("mobilesbrands");
    displayarray.innerHTML = "";
    filtered_array.forEach((currentobj)=>{
        displayarray.innerHTML+= ` <ul>
        <li>brand: ${currentobj.brand}</li>
        <li>model: ${currentobj.model}</li>
        <li>price: ${currentobj.price}</li>
        <li>camera: ${currentobj.camera}</li>
        <li>ram: ${currentobj.ram}</li>
        <li>rom : ${currentobj.rom}</li>
    </ul>`


    })

    
}
        
 
// }
// function searchmbl(){
//     console.log(input.value);
// }
//             const filtered_array = mblarr.filter((currentobj,currentindex)=>{
//                  if(currentobj.brand=== "Iphone"){
//                     return currentobj;
//                  }})

                //  console.log(filtered_array);
