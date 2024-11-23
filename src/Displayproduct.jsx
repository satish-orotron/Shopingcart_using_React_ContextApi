import React, { useContext, useState } from 'react';
import { store } from './App';


const Displayproduct = () => {
  const [data, setData] = useContext(store);
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setData([...data, { brandname: name }]); 
      setName("");
    }
  };

  return (
    <div>
      <h2>Product List:</h2>
      
      {data.map((item, index) => (
        <p key={index}>{item.brandname}</p>
      ))}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={name}
          
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter the Brand Name"
          
        />
       {/* <button onClick={SubmitHandler}>add</button> */}
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Displayproduct;
