
import NetContext from "./NetContext";
import React,{ useState} from "react";


function GlobalState(props){
    const [
      login, 
      setLogin
    ] = useState(localStorage.getItem("login"));
    const loginUser = token=> {
      setLogin(true); 
      localStorage.setItem("login",true);
      localStorage.setItem("token",token)
    }
    const logoutUser = () => {
      setLogin(false);  
      localStorage.removeItem("login");
      localStorage.removeItem("token")
    }
    return (
      <NetContext.Provider
        value={{
          login:login,
          loginUser:loginUser,
          logoutUser:logoutUser
        }}
      >
        {props.children}
      </NetContext.Provider>
    );
  }

  export default GlobalState