import React from "react";
import { Link } from "react-router-dom";
import logoPokeapi from "../img/logoPokeapi.png";
import "../css/navbar.css";

export default function Navbar(){
    return(
        <>
            <div class="nav-wrapper">
                <div className="logo">
                    <Link to="/">
                        <img src={logoPokeapi} alt="Logo PokeApi"/>
                    </Link> 
                </div>
                <div class="menu">
                    <div>
                        <Link to={"/"}>
                            <h2>Home</h2>
                        </Link>
                    </div>
                    <div>
                        <Link to={"/pokemons"}>
                            <h2>Pokemons</h2>
                        </Link>
                    </div>
                    <div>
                        <Link to={"/contacts"}>
                            <h2>Contato</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}