import React ,{useContext} from 'react';
import {store} from './App'

const ComA = () => {
    const[data,setData]=useContext(store)
  return <h2>This is Component A {data}</h2>;
};

export default ComA;
