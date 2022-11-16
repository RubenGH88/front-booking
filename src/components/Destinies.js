import { useState, useEffect } from "react";
import axios from "axios";



function Destinies(props) {

    const [selected, setSelected] = useState("");
    const [destinies, setDestinies] = useState(["Marruecos","barcelona"]);
 
    /* useEffect(() => {
       axios
         .get("http://localhost:4000/")
         .then((response) => {
           setOrigins(response.data);
          
         });
     }, []);*/

     const handleChange = event => {
        setSelected(event.target.value)
        props.setDestiny(event.target.value)
       
      };

    return (
        <div>
       
        <select defaultValue={'DEFAULT'} onChange={(e)=>handleChange(e)}>
        <option value="DEFAULT" disabled>Choose a destiny ...</option>
        {destinies.map((destiny,index) => {
          return (
            
              <option key={index} value={destiny}>{destiny}</option>
            
          );
        })}
         
         
        </select>
  
        </div>
    );
  }
  
  export default Destinies;