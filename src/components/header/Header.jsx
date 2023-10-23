import React from "react";

const Header = ({ name }) => {
  return (
    <h1
      style={{
        width: "100vw",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#1e1208",
      }}
    >
      {name}
    </h1>
  );
};

export default Header;
