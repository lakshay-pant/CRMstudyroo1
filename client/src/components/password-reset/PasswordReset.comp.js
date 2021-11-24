import React from "react";
import PropTypes from "prop-types";


export const ResetPassword = ({
  handleOnChange,
  handleOnResetSubmit,
  email,
}) => {
  return (
    <div className="body"><section className="mainlogin">
    <div id="forgot-pas">
         <div className="container">
             <div id="login-row" className="row justify-content-center align-items-center">
                 <div id="login-column">
                     <div className="login-box">
                         <form className="pass-form form" action="" method="post" onSubmit={handleOnResetSubmit}>
                             <div className="logoimg text-center">
                               <img src="images/logo.png" className="img-fluid" alt="logo"/>                
                             </div>
                             <div className="pas-text">
                               <h2>Forgot your password?</h2>
                             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                             </div>
                             <div className="form-group forget-email">
                               <span><i className="fa fa-envelope"></i></span>
                                 <input type="text" name="email" placeholder="Enter your Email Address" id="email" className="form-control" onChange={handleOnChange} value={email}/>
                                  
                             </div>
                              <div className="footersingbtn">
                                <input type="submit" name="submit" className="btn getin-btn" value="Send"/>
                              </div>
                         </form>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </section></div>

  );
};

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};