import React,{useState} from 'react'
import "./entry.style.css";
import {Login} from "../../components/login/Login.comp"
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";


export const EntryPage = () => {
  const [frmLoad, setFrmLoad] = useState("login");
      
    
    const handleOnResetSubmit = (e) => {
      e.preventDefault();
  
    };
  
    const formSwitcher = (frmType) => {
      setFrmLoad(frmType);
    };
    
    
    return (  <div>

      {frmLoad === "login" && (
        <Login
          
          formSwitcher={formSwitcher}

        />
      )}

      {frmLoad === "rest" && (
        <ResetPassword
         // handleOnChange={handleOnChange}
          handleOnResetSubmit={handleOnResetSubmit}
          formSwitcher={formSwitcher}
         
        />
      )}

  </div>
            
        
    )
}