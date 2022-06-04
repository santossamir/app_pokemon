import React, {useState, useEffect} from "react";
import "../../css/pokemons.css";
import Navbar from "../../components/Navbar";
import search from "../../img/iconSearch.svg";
import {api} from "../../service/api.js";

export default function Pokemons(){

    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=18');
    const [pokemons, setPokemons] = useState([]);

async function showPokemons(){
    const {data} = await api.get(`pokemon/`, {method:'GET'});
    const poke = data.results;
    const newPokes = [];
    
    for await (const element of poke){
        const {data} = await api.get(element.url);
        const newPoke = Object.assign({...element}, data);
        console.log("This: ", newPoke); 
        newPokes.push(newPoke);
    }
    setPokemons(newPokes);
} 

useEffect(()=>{
    showPokemons();
}, []);

async function getAllPokemons(){
   const res = api.get(loadMore);

   setLoadMore(res);
}

useEffect(()=> {
    getAllPokemons()
}, []);

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
                        {console.log("My pokemons: ", pokemons)}
                        {pokemons && pokemons.map((item, index) => (
                            <div className="cards" key={index}>
                                <div className="cardNumber">
                                    <small>#0{item.id}</small>
                                </div>
                                <div className="cardName">
                                    <small>{item.name}</small>
                                </div>
                                <div className="cardCategoriesImage">
                                    < div className="cardCategories">
                                        <div className="type">
                                            <small>{item.types[0].type.name}</small>
                                        </div>
                                        <div className="typeTwo">
                                            <small>{''}</small>
                                        </div>
                                    </div>
                                    <div className="cardImage">
                                        <img src={item.sprites.other.dream_world.front_default}/>
                                    </div>
                                </div>
                            </div>
                        ))}
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