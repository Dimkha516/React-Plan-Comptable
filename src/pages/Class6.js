import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Class6Display from '../components/Class6Display';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Class6 = () => {

    const[class6, setClass6] = useState([]);
    const[search, setSearch] = useState("");

    useEffect(() => {
        axios.get("charges.json")
            .then((res) => setClass6(res.data));
    }, [])

    return (
        <div className="class6">
            <Logo />
            <Navigation />

            <div className="search">
                <h3>Recherches</h3>
                <input type="text" placeholder="Intitulé Du Compte" onChange={(e) => setSearch(e.target.value)} />
            </div>

            <ul>
                {class6
                .filter((compte6) => compte6.intitule.toLowerCase().includes(search.toLowerCase()))
                .map((compte6) => (
                    <Class6Display compte6={compte6} key={compte6.intitule} />
                ))
            }
            </ul>


        </div>
    );
};

export default Class6;