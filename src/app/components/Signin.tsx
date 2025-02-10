import React from "react";
import Quote from "./Quote";
import Create from "./Create";

function Signin() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <Create type="signin" />
        <Quote />
      </div>
    </div>
  );
}

export default Signin;
