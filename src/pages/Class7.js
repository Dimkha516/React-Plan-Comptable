import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Class7Display from '../components/Class7Display';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Class7 = () => {

    const[class7, setClass7] = useState([]);
    const[search, setSearch] = useState("");

   useEffect(() => {
       axios.get("produits.json")
        .then((res) => setClass7(res.data));
   }, []) 

    return (
        <div className="class7">
            <Logo />
            <Navigation />

            <div className="search">
                <h3>Recherches</h3>
                <input type="text" placeholder="Intitulé Du Compte" onChange={(e) => setSearch(e.target.value)} />
            </div>

            <ul>
                {class7
                .filter((compte7) => compte7.intitule.toLowerCase().includes(search.toLowerCase()))
                .map((compte7) => (
                    <Class7Display compte7={compte7} key={compte7.numero} />
                ))}
            </ul>

            


        </div>
    );
};

export default Class7;