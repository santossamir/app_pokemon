import React, {useState, useEffect} from "react";
import "../../css/pokemons.css";
import Navbar from "../../components/Navbar";
import search from "../../img/iconSearch.svg";
import {api} from "../../service/api.js";
import img from "../../img/bulbasaurPoke.svg";

export default function Pokemons(){

    //const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=18');
    const [pokemons, setPokemons] = useState([]);

async function showPokemons(){
    await api.get('pokemon/').then(response => {
        setPokemons(response.data);
        console.log(response.data);
    })
} 

useEffect(()=>{
    showPokemons();
}, [])

function getAllPokemons(){
    alert('ok');
}
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
                    <div className="boxCards">
                    
                        <div className="cards">
                            <div className="cardNumber">
                                <small>#001</small>
                            </div>
                            <div className="cardName">
                                <small>Bulbasaur</small>
                            </div>
                            <div className="cardCategoriesImage">
                                < div className="cardCategories">
                                    <div className="type">
                                        <small>Planta</small>
                                    </div>
                                    <div className="typeTwo">
                                        <small>Venenoso</small>
                                    </div>
                                </div>
                                <div className="cardImage">
                                    <img src={img}/>
                                </div>
                            </div>
                              
                        </div>
                        <div className="cards2">

                        </div>
                        <div className="cards">

                        </div>
                        <div className="cards2">

                        </div>
                        <div className="cards">

                        </div>
                        <div className="cards2">

                        </div>
                        <div className="cards">

                        </div>
                        <div className="cards2">

                        </div>
                        <div className="cards">

                        </div>
                        <div className="cards2">

                        </div>
                        <div className="cards">

                        </div>
                        <div className="cards2">

                        </div>
                        <div className="cards">

                        </div>
                        <div className="cards2">

                        </div>
                        <div className="cards">

                        </div>
                        <div className="cards2">

                        </div>
                        <div className="cards">

                        </div>
                        <div className="cards2">

                        </div>
                    </div>
                    <div className="cardsButtonMore">
                        <button onClick={() => getAllPokemons()}>
                            More
                        </button>
                    </div>
                </div>
            </div>
        </>
   
    )
}