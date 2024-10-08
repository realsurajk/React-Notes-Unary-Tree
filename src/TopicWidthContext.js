import React, {useContext, useState} from "react";

const WidthContext = React.createContext()
const WidthUpdateContext = React.createContext();

export function useWidth(){
    return useContext(WidthContext)
}

export function useWidthUpdate() {
  return useContext(WidthUpdateContext);
}

export function WidthProvider({ children }) {
  const [topicWidth, setTopicWidth] = useState(1000);

  const increaseWidth = () => {
    setTopicWidth((prevTopicWidth) => prevTopicWidth + 400);
  };

  const decreaseWidth = () => {
    setTopicWidth((prevTopicWidth) => prevTopicWidth - 400);
  };

  return (
    <WidthContext.Provider value={topicWidth}>
      <WidthUpdateContext.Provider value={{ increaseWidth, decreaseWidth }}>
        {children}
      </WidthUpdateContext.Provider>
    </WidthContext.Provider>
  );
}