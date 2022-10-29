import React from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

export default function Login() {
  return (
    <div className="login text-center text-white p-4">
      <div className="container">
        <div className="row h-100">
          <div className="col-sm-6 col-12 left-panel d-flex justify-content-center align-items-center">
            <LeftPanel />
          </div>
          <div className="col-sm-6 col-12 right-panel d-flex justify-content-center align-items-center">
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
