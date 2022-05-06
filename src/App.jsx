import React from "react";
import './App.css'
import Card from "./Card"
import Sdata from "./sdata"


function ncard(val){
    return (
        <Card 
              key={val.key}
              imgsrc= {val.imgsrc}
              title={val.title}
              sname= {val.sname}
              link= {val.link}
        />
    );
}


function App() {
    return(
        <>
        <div className="AppGlass">
        <h1 className="heading">List of Web Series</h1>
        
        {Sdata.map(ncard)}
       
        </div>
        
        
        
       
        
        </>
    );
}


export default App;












//import Heading from "./Heading"
// import Para from "./Para.jsx";
// import * as fun from "./cal"


/* <Heading/>
        <Para/> */

/* <ol>
            <li>Sum of 5+4 =  {fun.default(5,4)}</li>
            <li>subtrractions of 5-4 =  {fun.sub(5,4)}</li>
            <li>Multiplecation of 5*4 =  {fun.mul(5,4)}</li>
            <li>Division of 5/4 =   {fun.divi(5,4)}</li>
        </ol> */




