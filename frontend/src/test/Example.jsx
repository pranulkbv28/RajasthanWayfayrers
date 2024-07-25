/* eslint-disable react/prop-types */
// import React from 'react'

import { useEffect } from "react";

function Example({ children }) {
  useEffect(() => {
    console.log("test");
  }, []);

  return <div>{children}</div>;
}

export default Example;
