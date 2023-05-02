import React from "react";

import Swal from "sweetalert2";

import { useCounterStore } from "store/store";

import "./navbar.css";

const Navbar = () => {
  const { counter, clear } = useCounterStore();

  const handleClick = () => {
    Swal.fire({
      title: "Seguro que quieres limpiar?",
      showConfirmButton: true,
      confirmButtonText: "Si",
      showCancelButton: true,
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        clear();
      }
    });
  };

  return (
    <>
      <h1>Navbar MF - Count {counter.value}</h1>

      <button onClick={handleClick}>Clear</button>
    </>
  );
};

export default Navbar;
