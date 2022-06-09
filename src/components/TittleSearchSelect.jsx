import React, {useState, useEffect} from "react";
import { api } from "../service/api.js";
import "../css/pokemons.css";
import search from "../img/iconSearch.svg";

export default function TittleSearchSelect(){

    const [pokemonsName, setPokemonsName] = useState("");
    const [pokemonChoose, setPokemonChoose] = useState(false);
    const [pokemonReturn, setPokemonReturn] = useState({
            name: "",
            id: "",
            type: "",
            //typeTwo: "",
            image: "",
            attack:"",
            defense: "",
            specialAttack: "",
            height: "",
            weight: "",
        });
    
        const searchPokemon = () =>{
            api.get(`pokemon/${pokemonsName}`).then((response)=>{
                setPokemonReturn({
                    name: pokemonsName,
                    id: response.data.id,
                    type: response.data.types[0].type.name,
                    //typeTwo: response.data.types[1].type.name ? response.data.types[1].type.name:'',
                    image: response.data.sprites.other.dream_world.front_default,
                    attack:response.data.stats[1].base_stat,
                    defense: response.data.stats[2].base_stat,
                    specialAttack: response.data.stats[3].base_stat,
                    height: response.data.height,
                    weight: response.data.weight,
                })
                setPokemonChoose(true);
            })
        }
        function openModal(){
            
        }

    return(
        <>
            <div className="boxTittleSearchSelect">
                <div className="pokemonsTittle">
                    <small> Mais de 250 Pokemons para você escolher o seu favorito</small>
                </div>
                <div className="pokemonsSearch">
                    <input type="text" placeholder="Pesquisar pokemon"
                        onChange={(event)=>{
                            setPokemonsName(event.target.value);
                        }}
                    />
                    <button onClick={searchPokemon}>
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
            </div>
            <div className="pokemonsCards">
                <div className="pokemonResponse">
                    {!pokemonChoose ?
                        (<hi></hi>):
                        (<div className={'cards '+pokemonReturn.type}>
                            <div className="cardNumber">
                                <small>{pokemonReturn.id <= 9? '#00'+pokemonReturn.id : '#0'+pokemonReturn.id}</small>
                            </div>
                            <div className="cardName">
                                 <small>{pokemonReturn.name}</small>
                            </div>
                            <div className="cardCategoriesImage">
                                <div className="cardCategories">
                                    <div className="type">
                                        <small>{pokemonReturn.type}</small>
                                    </div>
                                    {/*pokemonReturn.typeTwo?
                                        <div className="typeTwo">
                                            <small>{pokemonReturn.typeTwo}</small>
                                        </div>:
                                        <div></div>
                                    */}
                                </div>
                                <div className="cardImage" onClick={() => (openModal())}>
                                    <img src={pokemonReturn.image}/>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}