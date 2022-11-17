import { useState, useEffect } from "react";
import axios from "axios";



function Destinies(props) {

    const [selected, setSelected] = useState("nothing");
    const [destinies, setDestinies] = useState(["Marruecos","barcelona"]);
 
    /* useEffect(() => {
       axios
         .get("http://localhost:4000/")
         .then((response) => {
           setOrigins(response.data);
          
         });
     }, []);*/

     const getDestinies = async () => {
     console.log("calculando destinos")
     console.log(`http://localhost:8080/destinies/${props.origin}`)
      try {
        axios
        .get(`http://localhost:8080/destinies/${props.origin}`)
        .then((response) => { 
          console.log(response.data)
          setDestinies(response.data) 
        });
     
      } catch (err) {
        console.log(err);
      }
    };

     useEffect(() => {
      getDestinies();
    }, [props.origin]);

     const handleChange = event => {
        setSelected(event.target.value)
        props.setDestiny(event.target.value)
       
      };

    return (
        <div>
       
        <select defaultValue={'DEFAULT'} onChange={(e)=>handleChange(e)}>
        <option value="DEFAULT" disabled>Choose a destiny ...</option>
        {destinies?.map((destiny,index) => {
          return (
            
              <option key={index} value={destiny.name}>{destiny.name}</option>
            
          );
        })}
         
         
        </select>
  
        </div>
    );
  }
  
  export default Destinies;