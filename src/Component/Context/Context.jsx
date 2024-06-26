import { createContext, useState } from "react";
import runChat from "../../Config/gemini";

export const Context = createContext();
const ContextProvider = (props) => {

    const[input,setInput] = useState("");
    const[recentPrompt,setRecentPrompt] = useState("");
    const[prevPrompt,setPrevPrompt] = useState("");
    const[showResult,setShowResult] = useState(false);
    const[loading,setLoading] = useState(false);
    const[resultData,setResultData] = useState("");


  const onSent = async (prompt) => {
    await runChat(prompt);
  };

  const contextValue = {};
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
