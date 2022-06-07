import React, {useState, useEffect} from "react";
import "../../css/pokemons.css";
import Navbar from "../../components/Navbar";
import search from "../../img/iconSearch.svg";
import { api } from "../../service/api.js";
import PokemonsDetails from "../../modal/PokemonDetails";

export default function Pokemons(){

    const [loadMore, setLoadMore] = useState(20);
    const [pokemons, setPokemons] = useState([]);
    const [modalDetails, setModalDetails] = useState(false);

async function showPokemons(){
    const {data} = await api.get(`pokemon`, {method:'GET'});
    const poke = data.results;
    const newPokes = [];
    
    for await (const element of poke){
        const {data} = await api.get(element.url);
        const newPoke = Object.assign({...element}, data);
        newPokes.push(newPoke);
    }
    setPokemons(newPokes);
} 

useEffect(()=>{
    showPokemons();
}, []);

async function getAllPokemons() {
    let number = loadMore + 20;
    setLoadMore(number);
    console.log('Log do number: ', number);
    const data = await api.get(`pokemon?offset=${loadMore}&limit=20`)
    const result = data.data.results;
 }

useEffect(()=> {
    getAllPokemons()
}, []);

function openModal(){
    setModalDetails(true);
}

    return(
        <>
            <Navbar/>
            <div className="containerPokemons">
                <div className="boxTittleSearchSelect">
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
                            {pokemons && pokemons?.map((item, index) =>(
                                <option>{item?.types[0].type.name[0].toUpperCase()+item?.types[0].type.name.substr(1)}</option>
                            ))}
                        </select>

                        <select>
                            <option>Ataque</option>
                        </select>

                        <select>
                            <option>Defesa</option>
                        </select>
                    </div>
                </div>
                <div className="pokemonsCards">
                    <div className="boxCards" onClick={() => openModal()}>
                       
                        {pokemons && pokemons?.map((item, index) => (
                            <div className="cards" key={index}>
                                <div className="cardNumber">
                                    <small>#0{item?.id}</small>
                                </div>
                                <div className="cardName">
                                    <small>{item?.name[0].toUpperCase()+item?.name.substr(1)}</small>
                                </div>
                                <div className="cardCategoriesImage">
                                    < div className="cardCategories">
                                        <div className="type">
                                            <small>{item?.types[0].type.name[0].toUpperCase()+item?.types[0].type.name.substr(1)}</small>
                                        </div>
                                        {item?.types[1]?
                                        <div className="typeTwo">
                                            <small>{item?.types[1].type.name[0].toUpperCase()+item?.types[0].type.name.substr(1)}</small>
                                        </div> :
                                        <div></div>}

                                    </div>
                                    <div className="cardImage">
                                        <img src={item?.sprites.other.dream_world.front_default}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {modalDetails && <PokemonsDetails/>}
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