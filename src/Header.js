import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper green lighten-2">
                <NavLink activeStyle={{ fontWeight: "bold" }} to="/" className="brand-logo ml-3"> :: ferreiroCorrea :: Software</NavLink>
                <ul id="nav-mobile" className="right">
                    <li><NavLink activeStyle={{ fontWeight: "bold" }} to="/autores">Autores</NavLink></li>
                    <li><NavLink activeStyle={{ fontWeight: "bold" }} to="/livros">Livros</NavLink></li>
                    <li><NavLink activeStyle={{ fontWeight: "bold" }} to="/sobre">Sobre</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;