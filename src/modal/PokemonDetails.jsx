import React, {useState, useEffect} from "react";
import { api } from '../service/api';
import "../css/pokemonsDetails.css";
import charizard from "../img/charizard.svg";
import closeIcon from "../img/closeIcon.svg";
import vector from "../img/vector.svg";
import vectorTwo from "../img/vector2.svg";

export default function PokemonsDetails(){

    const[modalDetails, setModalDetails] = useState(true);

function closeModal(){
    setModalDetails(false);
}
    return(
        <>
            {modalDetails? 
            <div className="modalContainer">
                <div className="closeModal">
                    <img src={closeIcon} onClick={()=>closeModal()}/>
                </div>
                <div className="boxCardModal">
                    <div className="posterCard">
                        <div className="portesCardImage">
                            <img src={charizard}/>
                            {/*<div className="posterCardTypes">
                                <div className="posterType">
                                    <small>TypeOne</small>
                                </div>
                                <div className="posterTypeTwo">
                                    <small>TypeTwo</small>
                                </div>
                            </div>*/}
                        </div>
                    </div>
                    <div className="detailsCard">
                        <div className="nameId">
                            <div className="name">
                                <small>Charizard</small>
                            </div>
                            <div className="id">#005</div>
                        </div>
                        <div className="description">
                            <p>
                                Charizard é um Pokémon bípede dracônico. É principalmente laranja
                                com uma parte inferior creme do peito até a ponta da cauda. 
                            </p>
                        </div>
                        <div className="screening">
                            <div className="width">
                                <img src={vector}/>
                                <small>90.5 Kg</small>
                                <p>Peso</p>
                            </div>
                            <div className="height">
                                <img src={vectorTwo}/>
                                <small>1.7 m</small>
                                <p>Altura</p>
                            </div>
                            <div className="power">
                                <small>Lança chamas</small>
                                <p>Peder Principal</p>
                            </div>
                        </div>
                        <div className="tableCharacteristics">
                            <table>
                                <tr>
                                    <th>Ataque</th>
                                    <td>65</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Defesa</th>
                                    <td>45</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>VI. Ataque</th>
                                    <td>45</td>
                                    <td></td>
                                </tr>                              
                                <tr>
                                    <th>Total</th>
                                    <td>45</td>
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