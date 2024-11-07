import { useContext } from "react";
import React from 'react';
import {store} from './App.jsx'

const ComB = () => {
    const[data,SetData]=useContext(store)
  return <h2><center>This is Component B {data}</center></h2>;
};

export default ComB;
