import React from "react";

function Logo(props) {
  return (
    <img
      alt="Logo"
      // src="/static/kilo-logo.png"
      {...props}
      style={{ width: 75, height: 50 }}
    />
  );
}

export default Logo;
