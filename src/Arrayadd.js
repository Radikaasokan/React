import React, { useState } from 'react'

const Arrayadd =()=> {
  const[inputvalue,setInputvalue]=useState("");
  const[submittedvalue,setsubmittedvalue] = useState([]);

  const handlesubmit=()=>{
    setsubmittedvalue([...submittedvalue,inputvalue]);
    setInputvalue("");
  };

  return (
    <div>
      <input 
      type="text"
      value={inputvalue}
      onChange={(e)=> setInputvalue(e.target.value)}/>

      <button onClick={handlesubmit}>submit</button>
      <ul>
        {submittedvalue.map((items)=>
        <li>{items}
        </li>
        )}
      </ul>
    </div>
  )
}

export default Arrayadd