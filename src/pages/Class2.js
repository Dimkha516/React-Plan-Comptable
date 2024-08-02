import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Class2Display from '../components/Class2Display';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Class2 = () => {
    
    const[class2, setClass2] = useState([]);
    
    const[search, SetSearch] = useState("");

    useEffect(() => {
        axios.get("immobilisations.json")
            .then((res) => setClass2(res.data));
    }, [])
    
    
    return (
        <div className="class2">
           <Logo />
            <Navigation />

            <div className="search">
                <h3>Recherches</h3>
                <input type="text" placeholder="Intitulé Du Compte..." onChange={(e) => SetSearch(e.target.value)} />
            </div>

            <ul>
                {class2
                .filter((compte2) => compte2.intitule.toLowerCase().includes(search.toLowerCase())) 
                .map((compte2) => (
                    <Class2Display compte2={compte2} key={compte2.intitule} />
                ))}
            </ul>

        </div>
    );
};

export default Class2;