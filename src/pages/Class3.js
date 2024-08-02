import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Class3Display from '../components/Class3Display';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Class3 = () => {

    const[class3, setClass3] = useState([]);

    const[search, SetSearch] = useState("");

    useEffect(() => {
        axios.get("stock.json")
            .then((res) => setClass3(res.data))
    }, [])

    return (
        <div className="class3">
            <Logo />
            <Navigation />

            <div className="search">
                <h3>Recherches:</h3>
                <input type="text" placeholder="Intitulé Du Compte" onChange={(e) => SetSearch(e.target.value)} />
            </div>

            <ul>
                {class3
                .filter((compte3) => compte3.intitule.toLowerCase().includes(search.toLowerCase()))
                .map((compte3) => (
                    <Class3Display compte3={compte3} key={compte3.intitule} />
                ))}
            </ul>
            
        </div>
    );
};

export default Class3;