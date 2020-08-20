import React from "react";

function OnDemandComponent({ name }) {
  return (
    <div>
      <h3>This is a on demand rendered component for {name}</h3>
    </div>
  );
}

export default OnDemandComponent;
