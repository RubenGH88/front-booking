import { useState, useEffect } from "react";
import axios from "axios";



function Origins(props) {
  
    const origins = [
        "Sevilla","Barcelona","Londres","Malaga","Estocolmo"
      ];
    
      const [selected, setSelected] = useState("");
    
      const handleChange = event => {
        setSelected(event.target.value)
        props.setOrigin(event.target.value)
       
      };
 
    /* useEffect(() => {
       axios
         .get("http://localhost:4000/")
         .then((response) => {
           setOrigins(response.data);
          
         });
     }, []);*/

   
    return (
        <div>
          
            <select defaultValue={'DEFAULT'} onChange={(e)=>handleChange(e)}>
            <option value="DEFAULT" disabled>Choose an origin ...</option>
        {origins.map((origin,index) => (
          <option key={index} value={origin}>
            {origin}
          </option>
        ))}
        </select>
      
        </div>
    );
  }
  
  export default Origins;