import React from "react";

import Swal from "sweetalert2";

import "./header.css";

const Header = () => {
  return (
    <>
      <h1
        onClick={() => Swal.fire("Shared API", "Shared API use Swal", "info")}
      >
        Shared API
      </h1>
    </>
  );
};

export default Header;
