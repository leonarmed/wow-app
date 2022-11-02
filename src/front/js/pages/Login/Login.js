import React, { useState } from "react";
import LeftPanelLogin from "./LeftPanel";
import RightPanelLogin from "./RightPanel";
import LeftPanelRegister from "./LeftPanelRegister";
import RightPanelRegister from "./RightPanelRegister";
import logo from '../../../img/WOW.png'

export default function Login() {
  const [register, setRegister] = useState(false);
  return (
    <div
      className={`login text-center text-white p-4 ${
        register ? "register" : ""
      }`}
    >
      <div className="container">
        <div className="row h-100 overflow-hidden">
          <img src={logo} className="shadow-wow"/>
          <div
            id="main-login" className={`col-sm-6 col-12 p-0 justify-content-center align-items-center position-relative`}
          >
            <div className="left-panel">
              <LeftPanelLogin />
            </div>
            <div className="left-panel-register">
              <LeftPanelRegister />
            </div>
          </div>
          {/* <div className={`col-sm-6 col-12 left-panel-register justify-content-center align-items-center`}>
            <LeftPanelRegister />
          </div> */}
          <div className="col-sm-6 col-12 right-panel d-flex justify-content-center align-items-center position-relative">
            <div className="right-panel">
              <RightPanelLogin action={setRegister} />
            </div>
            <div className="right-panel-register">
              <RightPanelRegister action={setRegister} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
