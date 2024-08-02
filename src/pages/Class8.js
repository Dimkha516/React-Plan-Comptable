import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Class8Display from '../components/Class8Display';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Class8 = () => {

    const[class8, setClass8] = useState([]);
    const[search, setSearch] = useState("");

    useEffect(() => {
        axios.get("autres.json")
        .then((res) => setClass8(res.data));
    }, [])

    return (
        <div className="class8">
            <Logo />
            <Navigation />

            <div className="search">
                <h3>Recherches</h3>
                <input type="text" placeholder="Intitulé Du Compte" onChange={(e) => setSearch(e.target.value)} />
            </div>

            <ul>
                {class8
                .filter((compte8) => compte8.intitule.toLowerCase().includes(search.toLowerCase()))
                .map((compte8) => (
                    <Class8Display compte8={compte8} key={compte8.numero} />
                )
                )}
            </ul>

        </div>
    );
};

export default Class8;