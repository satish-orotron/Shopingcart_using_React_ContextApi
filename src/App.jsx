  import React, { createContext,useState, } from 'react'
  import ComA from './ComA'
  import ComB from './ComB'
  export const store=createContext();
  import Countproduct from './Countproduct';
import Displayproduct from './DisplayProduct';

  const App = () => {
  const[data,setData]=useState([
    {
      brandname:"samsung"  },
      {brandname:"nokia"  },
      {brandname:"apple"  },
      {brandname:"nothing" }
  ])
  const change=()=>{
    setData(data+1);
  }
    return (
    <store.Provider value={[data,setData]}> 
        <center>
        
          <Countproduct />
          <Displayproduct />
        
        </center>
        </store.Provider>
    
    )
  } 


  export default App