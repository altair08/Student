import React, { createContext, useState } from "react";

export const ContextHead = createContext();

export const MovieProvider = (props) => {
  const [Studentid, setStudentid] = useState({});
  const [but, setbut] = useState(false);



  return (
    <ContextHead.Provider
      value={{
        Studentid: [Studentid, setStudentid],
        but:[but, setbut]
      }}
    >
      {props.children}
    </ContextHead.Provider>
  );
};
