// LeafCountContext.js
import React, { createContext, useContext, useState } from "react";

const LeafCountContext = createContext();

export function useLeafCount() {
  return useContext(LeafCountContext);
}

export function LeafCountProvider({ children }) {
  const [leafCount, setLeafCount] = useState(3); // Initialize with the initial count of main topics

  const increaseLeafCount = () => {
    setLeafCount((prevCount) => prevCount + 1);
  };

  const decreaseLeafCount = () => {
    setLeafCount((prevCount) => prevCount - 1);
  };

  return (
    <LeafCountContext.Provider
      value={{ leafCount, increaseLeafCount, decreaseLeafCount }}
    >
      {children}
    </LeafCountContext.Provider>
  );
}
