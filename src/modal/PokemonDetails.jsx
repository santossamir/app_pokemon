import React, {useState, useEffect} from "react";
import { api } from '../service/api';
import "../css/pokemonsDetails.css";
import charizard from "../img/charizard.svg";
import closeIcon from "../img/closeIcon.svg";
import vector from "../img/vector.svg";
import vectorTwo from "../img/vector2.svg";

export default function PokemonsDetails(props){

    const {id, name, weight, height, types, abilities, sprites, stats } = props.details;
    console.log(props.details)

    return(
        <>
            {props.modalState ? 
            <div className="modalContainer">
                <div className="closeModal">
                    <img src={closeIcon} onClick={()=> props.setModalState(false)} alt="Fechar"/>
                </div>
                <div className="boxCardModal">
                    <div className={'posterCard '+types[0].type.name}>
                        <div className="portesCardImage">
                            <img src={sprites.other.dream_world.front_default} alt={name}/>
                            <div className="posterCardTypes">
                                <div className="posterType">
                                    <small>{types[0].type.name[0].toUpperCase()+types[0].type.name.substr(1)}</small>
                                </div>
                                {types[1]?
                                <div className="posterTypeTwo">
                                    <small>{types[1].type.name[0].toUpperCase()+types[0].type.name.substr(1)}</small>
                                </div>:<dvi></dvi>}
                            </div>
                        </div>
                    </div>
                    <div className="detailsCard">
                        <div className="nameId">
                            <div className="name">
                                <small>{name[0].toUpperCase()+name.substr(1)}</small>
                            </div>
                            <div className="id">{id <= 9 ? '#00'+id : '#0'+id}</div>
                        </div>
                        <div className="description">
                            <p>
                                Charizard é um Pokémon bípede dracônico. É principalmente laranja
                                com uma parte inferior creme do peito até a ponta da cauda. 
                            </p>
                        </div>
                        <div className="screening">
                            <div className="width">
                                <img src={vector} alt="Balança"/>
                                <small>{weight} Kg</small>
                                <p>Peso</p>
                            </div>
                            <div className="height">
                                <img src={vectorTwo} alt="Régua"/>
                                <small>{height} m</small>
                                <p>Altura</p>
                            </div>
                            <div className="power">
                                <small>{abilities[0].ability.name[0].toUpperCase()+abilities[0].ability.name.substr(1)}</small>
                                <p>Peder Principal</p>
                            </div>
                        </div>
                        <div className="tableCharacteristics">
                            <table>
                                <tr>
                                    <th>Ataque</th>
                                    <td>{stats[1].base_stat}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Defesa</th>
                                    <td>{stats[2].base_stat}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>VI. Ataque</th>
                                    <td>{stats[3].base_stat}</td>
                                    <td></td>
                                </tr>                              
                                <tr>
                                    <th>Total</th>
                                    <td>{stats[1].base_stat + stats[2].base_stat + stats[3].base_stat}</td>
                                    <td></td>
                                </tr>
                            </table> 
                        </div>
                    </div>
                </div>
            </div> :
            <div></div>}
        </>
    )
}