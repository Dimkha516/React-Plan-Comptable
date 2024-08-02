import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Class5Display from '../components/Class5Display';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Class5 = () => {

    const[class5, setClass5] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("tresorerie.json")
            .then((res) => setClass5(res.data));
    }, [])

    return (
        <div className="class5">
            <Logo />
            <Navigation />

            <div className="search">
                <h3>Recherches</h3>
                <input type="text" placeholder="Intitulé Du Compte" onChange={(e) => setSearch(e.target.value)} />
            </div>

            <ul>
                {class5
                .filter((compte5) => compte5.intitule.toLowerCase().includes(search.toLowerCase()))
                .map((compte5) => (
                    <Class5Display compte5={compte5} key={compte5.numero} />
                ))}
            </ul>
            
        </div>
    );
};

export default Class5;