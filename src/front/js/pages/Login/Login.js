import React, { useState } from "react";
import LeftPanelLogin from "./LeftPanel";
import RightPanelLogin from "./RightPanel";
import LeftPanelRegister from "./LeftPanelRegister";

export default function Login() {
  const [register, setRegister] = useState(false);
  return (
    <div
      className={`login text-center text-white p-4 ${
        register ? "register" : ""
      }`}
    >
      <div className="container">
        <div className="row h-100">
          <div className="col-sm-6 col-12 left-panel d-flex justify-content-center align-items-center">
            <LeftPanelLogin />
            {/* <LeftPanelRegister /> */}
          </div>
          <div className="col-sm-6 col-12 right-panel d-flex justify-content-center align-items-center">
            <RightPanelLogin action={setRegister} />
            {/* <RightPanelRegister /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
