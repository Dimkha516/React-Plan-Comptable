import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Class1Display from '../components/Class1Display';

const Class1 = () => {

    const [class1, setClass1] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("ressourcesDurables.json")
            .then((res) => setClass1(res.data));
    }, [])
    
    
    
    return (
        <div className="class1">
            <Logo />
            <Navigation />

            <div className="search">
                <h3>Recherches :</h3>
                <input type="text" placeholder="Intitulé Du Compte..." onChange={(e) => setSearch(e.target.value)} />
            </div>
            
            <ul>
                {class1
                .filter((compte1) => compte1.intitule.toLowerCase().includes(search.toLowerCase()))
                .map((compte1) => (
                     <Class1Display compte1={compte1} key={compte1.intitule} />
                ))}
            </ul>
        
        </div>
    )
}


export default Class1;