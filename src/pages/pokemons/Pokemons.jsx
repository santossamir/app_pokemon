import React from "react";
import "../../css/pokemons.css";
import Navbar from "../../components/Navbar";
import search from "../../img/iconSearch.svg";

export default function Pokemons(){
    return(
        <>
            <Navbar/>
            <div className="containerPokemons">
                <div className="pokemonsTittle">
                    <small> Mais de 250 Pokemons para você escolher o seu favorito</small>
                </div>
                <div className="pokemonsSearch">
                    
                    <input type="text" placeholder="Pesquisar pokemon"/>
                    
                    <button type="submit">
                        <img src={search}/>
                    </button>

                </div>
                <div className="pokemonsSelects">
                    <select>
                        <option>Tipo</option>
                        <option>Fogo</option>
                        <option>Planta</option>
                        <option>Elétrico</option>
                        <option>Água</option>
                        <option>Normal</option>
                    </select>

                    <select>
                        <option>Ataque</option>
                    </select>

                    <select>
                        <option>Defesa</option>
                    </select>
                </div>
                <div className="pokemonsCards">
                    <div className="cards">

                    </div>
                    <div className="cards2">

                    </div>
                </div>
            </div>
        </>
   
    )
}