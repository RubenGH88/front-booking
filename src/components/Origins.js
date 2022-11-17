import { useState, useEffect } from "react";
import axios from "axios";



function Origins(props) {
  

      const [origins, setOrigins]= useState(["undefined"])
     
    
      const handleChange = event => {
     
        props.setOrigin(event.target.value)
       
      };
 

     const getOrigins = async () => {
     
      try {
        axios
        .get("http://localhost:8080/origins")
        .then((response) => { 
          setOrigins(response.data) 
        });
     
      } catch (err) {
        console.log(err);
      }
    };

     useEffect(() => {
      getOrigins();
    }, []);


    return (
        <div>

     
        
            { <select defaultValue={'DEFAULT'} onChange={(e)=>handleChange(e)}>
            <option value="DEFAULT" disabled>Choose an origin ...</option>
        {origins?.map((origin,index) => (
          <option key={index} value={origin.name}>
            {origin.name}
          </option>
        ))}
        </select> }
      
        </div>
    );
  }
  
  export default Origins;