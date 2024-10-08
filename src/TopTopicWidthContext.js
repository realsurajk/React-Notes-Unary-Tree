// TopTopicWidthContext.js
import React, { createContext, useContext, useState } from "react";

const TopTopicWidthContext = createContext();

export const useTopTopicWidth = () => {
  const context = useContext(TopTopicWidthContext);
  if (!context) {
    throw new Error(
      "useTopTopicWidth must be used within a TopTopicWidthProvider"
    );
  }
  return context;
};

export const TopTopicWidthProvider = ({ children }) => {
  const [topTopicWidth, setTopTopicWidth] = useState(1000);

  const value = {
    topTopicWidth,
    setTopTopicWidth,
  };

  return (
    <TopTopicWidthContext.Provider value={value}>
      {children}
    </TopTopicWidthContext.Provider>
  );
};
