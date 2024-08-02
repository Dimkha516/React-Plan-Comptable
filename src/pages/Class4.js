import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Class4Display from '../components/Class4Display';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Class4 = () => {

    const [class4, setClass4] = useState([]);

    const[search, setSearch] = useState("");

    useEffect(() => {
        axios.get("tiers.json")
            .then((res) => setClass4(res.data))
    }, [])

    return (
        <div className="class4">
            <Logo />
            <Navigation />

            <div className="search">
                <h3>Recherches</h3>
                <input type="text" placeholder="Intitulé Du Compte" onChange={(e) => setSearch(e.target.value)} />
            </div>

            <ul>
                {class4
                .filter((compte4) => compte4.intitule.toLowerCase().includes(search.toLowerCase()))
                .map((compte4) => (
                    <Class4Display compte4={compte4} key={compte4.numero} />
                ))}
            </ul>
            
        </div>
    );
};

export default Class4;