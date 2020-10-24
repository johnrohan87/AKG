import React from "react";
import { Link } from "react-router-dom";

import "animate.css/animate.min.css";
import { Transition } from 'react-transition-group';

const SlideUpBox = ({ in: inProp }) => (
  <Transition in={inProp} timeout={500}>
    {state => (
      <div>
        I am {state}
      </div>
    )}
  </Transition>
); 
