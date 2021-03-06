import React, {useState, useEffect} from "react";
import "../../css/pokemons.css";
import NavbarPokemons from "../../components/NavbarPokemons";
import TittleSearchSelect from "../../components/TittleSearchSelect";
import PokemonsDetails from "../../modal/PokemonDetails";
import button from "../../img/button.svg";
import { api } from "../../service/api.js";


export default function Pokemons(){

    const [pokemons, setPokemons] = useState([]);
    const [loadMore, setLoadMore] = useState(0);
    const [modalDetails, setModalDetails] = useState(false);
    const [detailsPokemon, setDetailsPokemon] = useState([]);

async function showPokemons(){
    const {data} = await api.get(`pokemon`, {method:'GET'});
    const poke = data.results;
    const newPokes = [];
    
    for (const element of poke){
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
    const data = await api.get(`pokemon?offset=${loadMore}&limit=20`)
    const result = data.data.results;

    let newPokes = pokemons;
    
    for (const element of result){
        const {data} = await api.get(element.url);
        const newPoke = Object.assign({...element}, data);
        newPokes.push(newPoke);

    }
    setPokemons(newPokes);
 }

useEffect(()=> {
    getAllPokemons()
}, []);


function openModal(){
    setModalDetails(true);
}

    return(
        <>
            <NavbarPokemons/>
            <div className="containerPokemons">
                <TittleSearchSelect/>
                <div className="pokemonsCards">
                    <div className="boxCards">
                        {pokemons && pokemons?.map((item, index) => (
                            <div className={'cards '+item?.types[0].type.name} key={index} onClick={()=> (openModal(), setDetailsPokemon(item))}>
                                <div className="cardNumber">
                                    <small>{item.id <= 9?'#00'+item?.id : '#0'+item?.id}</small>
                                </div>
                                <div className="cardName">
                                    <small>{item?.name[0].toUpperCase()+item?.name.substr(1)}</small>
                                </div>
                                <div className="cardCategoriesImage">
                                    <div className="cardCategories">
                                        <div className="type">
                                            <small>{item?.types[0].type.name[0].toUpperCase()+item?.types[0].type.name.substr(1)}</small>
                                        </div>
                                        {item?.types[1]?
                                            <div className="typeTwo">
                                                <small>{item?.types[1].type.name[0].toUpperCase()+item?.types[0].type.name.substr(1)}</small>
                                            </div> :
                                            <div></div>
                                        }
                                    </div>
                                    <div className="cardImage">
                                        <img src={item?.sprites.other.dream_world.front_default}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {modalDetails && 
                        <PokemonsDetails  
                            modalState={modalDetails} 
                            setModalState={setModalDetails} 
                            details={detailsPokemon}
                        />
                    }
                    <div className="cardsButtonMore">
                        <img src={button} onClick={() => getAllPokemons()}/>
                        <img src={button} onClick={() => getAllPokemons()}/>
                        <img src={button} onClick={() => getAllPokemons()}/>
                    </div>
                </div>
            </div>
        </>
    )
}