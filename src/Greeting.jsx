import React from "react";
import "./index.css";

const d = new Date().toLocaleTimeString()
const h = new Date().getHours()

const clr = {

}

let greet = "";
if (h<=11 && h>=4) {
   greet = "Good Morning."
   clr.color = "#1edd7d"
}
else if(h>=12 && h <16){
   greet = "Good Afternoon."
   clr.color = "#df1b5d"
}
else if(h>=16 && h<22){
   greet = "Good Evening."
   clr.color = "#FB470E"
}
else if(h<=22 && h>=23){
   greet = "Good Night"
   clr.color = "#35101D"
}
else if(h<4 && h>=0){
   greet = "Good Night"
   clr.color = "#35101D"
}


function Greeting() {
    return (<div className="main ">
    <h1 className="hmm">Hello Sir, <h1 style={clr}>{greet}</h1></h1>
    <h3>{d}</h3>
    </div>);
} 

export default Greeting;