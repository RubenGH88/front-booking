import { useState, useEffect } from "react";
import Origins from "../components/Origins";
import Destinies from "../components/Destinies";

function BookingPage() {
  const [origin, setOrigin] = useState(undefined);
  const [destiny, setDestiny] = useState(undefined);
  const [travel, setTravel] = useState(undefined);
  const [ida, setIda] = useState("");
  const [vuelta, setVuelta] = useState("");

  var date = new Date(Date.now()); 
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  var today = `${year}-${month}-${day}`;
  
 
 /* useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((response) => {
        setOrigins(response.data);
       
      });
  }, []);*/

  const handleChange = event => {
    setTravel(event.target.value)
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("look for flies")

  };

    return (
      <div>
      <h1>Let's go booking!!</h1>
      <form onSubmit={handleSubmit}>
      <Origins setOrigin={setOrigin} />
      {origin && <Destinies setDestiny={setDestiny} origin={origin}/>}
      {destiny && <> 
     
      <input onChange={(e)=>setTravel(e.target.value)} type="radio" name="travel" value="ida" /> Ida
      <input onChange={(e)=>setTravel(e.target.value)} type="radio" name="travel" value="vuelta" /> Vuelta
      
      </>}
      <br/>
      {travel && <>
     <label>Ida:</label>
     <input
       type="date"
       name="ida"
       min={today}
       max={vuelta}
       value={ida}
       onChange={(e) => setIda(e.target.value)}
     />
     </>
     
     
     }
      {travel=="vuelta" && <>
     <label>Vuelta:</label>
     <input
       type="date"
       name="vuelta"
       min={ida}
      
       value={vuelta}
       onChange={(e) => setVuelta(e.target.value)}
     />
     </>
     
     
     }
     {travel && <button type="submit">Search</button>}
      </form>
      
      

      </div>
    );
  }
  
  export default BookingPage;