import React, {useState, useEffect} from "react";
import { api } from '../service/api';
import "../css/pokemonsDetails.css";

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
                    <button onClick={()=>closeModal()}> X </button>
                </div>
                <div className="boxCardModal">
                    <div className="posterCard">
                        <div className="portesCardImage">
                            <img src="#"/>
                        </div>
                        <div className="posterCardTypes">
                            <div className="posterType">
                                <small>TypeOne</small>
                            </div>
                            <div className="posterTypeTwo">
                                <small>TypeTwo</small>
                            </div>
                        </div>
                    </div>
                    <div className="detailsCard">
                        <div className="nameId">
                            <div>
                                <small>Charizard</small>
                            </div>
                            <div>#005</div>
                        </div>
                        <div className="description">
                            <p>
                                Charizard é um Pokémon bípede dracônico. É principalmente laranja
                                com uma parte inferior creme do peito até a ponta da cauda. 
                            </p>
                        </div>
                        <div className="screening">
                            <div>90.5 Kg</div>
                            <div>1.7 m</div>
                            <div> Lança Chamas</div>
                        </div>
                        <div className="tablecharacteristics">
                            <table>
                                <tr>
                                    <th>Ataque</th>
                                    <td>65</td>
                                    <td>---</td>
                                </tr>
                                <tr>
                                    <th>Defesa</th>
                                    <td>45</td>
                                    <td>---</td>
                                </tr>
                                <tr>
                                    <th>VI. Ataque</th>
                                    <td>45</td>
                                    <td>---</td>
                                </tr>                              
                                <tr>
                                    <th>Total</th>
                                    <td>45</td>
                                    <td>---</td>
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