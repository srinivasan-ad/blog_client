import React from "react";
import Quote from "./Quote";
import Create from "./Create";

function Signup() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <Create type="signup" />
        <Quote />
      </div>
    </div>
  );
}

export default Signup;
