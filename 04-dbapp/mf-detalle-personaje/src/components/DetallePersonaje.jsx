import React, { useEffect, useState } from "react";

import { useParams, NavLink } from "react-router-dom";

const DetallePersonaje = () => {
  const [personaje, setPersonaje] = useState({});
  const { name } = useParams();

  const getData = async () => {
    const res = await fetch(
      `https://dragon-ball-super-api.herokuapp.com/api/characters/${name}`
    );
    const data = await res.json();

    setPersonaje(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavLink
        className="bg-gray-200 text-gray-700 p-3 shadow-lg rounded-md font-bold"
        to="/personajes"
      >
        {"<"} Regresar
      </NavLink>

      <div className="text-center grid grid-cols-2 gap-3">
        <div>
          <img
            style={{
              maxHeight: "400px",
              margin: "0 auto",
            }}
            src={personaje.imageUrl}
            alt={personaje.name}
          />
        </div>
        <div>
          <table className="table-auto border-collapse border">
            <thead>
              <tr>
                <th className="border p-2">Campo</th>
                <th className="border p-2">Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border p-2">Nombre</th>
                <td className="border p-2">{personaje.name}</td>
              </tr>
              <tr>
                <th className="border p-2">Planeta de Origen</th>
                <td className="border p-2">{personaje.originplanet}</td>
              </tr>
              <tr>
                <th className="border p-2">Role</th>
                <td className="border p-2">{personaje.role}</td>
              </tr>
              <tr>
                <th className="border p-2">Especie</th>
                <td className="border p-2">{personaje.specie}</td>
              </tr>
              <tr>
                <th className="border p-2">Estatus</th>
                <td className="border p-2">{personaje.status}</td>
              </tr>
              <tr>
                <th className="border p-2">Transformaciones</th>
                <td className="border p-2">{personaje.transform}</td>
              </tr>
              <tr>
                <th className="border p-2">Universo</th>
                <td className="border p-2">{personaje.universe}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DetallePersonaje;
