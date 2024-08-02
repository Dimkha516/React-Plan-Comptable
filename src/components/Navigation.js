import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="active-page">
                Tous
            </NavLink>

            <NavLink exact to="/class1" activeClassName="active-page">
                1:Ressources Durables
            </NavLink>

            <NavLink exact to="/class2" activeClassName="active-page">
                2:Immobilisations
            </NavLink>

            <NavLink exact to="/class3" activeClassName="active-page">
                3:Stocks
            </NavLink>

            <NavLink exact to="/class4" activeClassName="active-page">
                4:Tiers
            </NavLink>

            <NavLink exact to="/class5" activeClassName="active-page">
                5:Trésorerie
            </NavLink>
            
            <NavLink exact to="/class6" activeClassName="active-page">
                6:Charges
            </NavLink>

            <NavLink exact to="/class7" activeClassName="active-page">
                7:Produits
            </NavLink>

            <NavLink exact to="/class8" activeClassName="active-page">
                8:Autres Charges/Produits
            </NavLink>
        </div>
    );
};

export default Navigation;