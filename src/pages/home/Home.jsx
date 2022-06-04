import React from "react";
import Navbar from "../../components/Navbar";
import "../../css/home.css";
import banner from "../../img/banner.svg";

export default function Home(){
    return(
        <>
            <Navbar/>
            <div className="containerHome">
                <div className="homeElements">
                    <div className="homeTittle">
                        <h1>Qual pokemon você escolheria?</h1>
                    </div>
                    <div className="homeParagraph">
                        <p>
                            Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e habilidaddes.
                        </p>
                    </div>
                    <div className="homeButton">
                        <button>
                            Veja os pokemons
                        </button>
                    </div>
                </div>
                <div className="homeImages">
                    <div>
                        <img src={banner}/>
                    </div>
                </div>

            </div>
        
        </>
   
    )
}