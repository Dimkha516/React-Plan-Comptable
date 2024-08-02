import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AllClassDisp from "../components/AllClassDisp";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const AllClass = () => {
  const [all, setAll] = useState([]);

  const [searchIntitule, setSearchIntitule] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    axios.get("tous.json").then((res) => setAll(res.data));
  }, []);

  return (
    <div className="all">
      <Logo />
      <Navigation />

      <div className="search">
        <h4>RECHERCHES</h4>

        <input
          type="text"
          placeholder="Intitulé Compte"
          onChange={(e) => setSearchIntitule(e.target.value)}
        />

        <input
          type="text"
          placeholder="numéro du compte"
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <ul className="tous">
        {all
          .filter((comptes) =>
            comptes.intitule
              .toLowerCase()
              .includes(searchIntitule.toLowerCase())
          )
          .filter((comptes) =>
            comptes.numero.toLowerCase().includes(number.toLowerCase())
          )
          .map((comptes) => (
            <AllClassDisp comptes={comptes} key={comptes.intitule} />
          ))}
      </ul>
    </div>
  );
};

export default AllClass;
