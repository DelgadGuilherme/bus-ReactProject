import { Component } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Rota from "./components/rota/Rota";
import Ponto from "./components/ponto/Ponto";
import Usuario from "./components/usuario/Usuario";


export default class Home extends Component {
    render () {
        return (
            <div style={{backgroundColor: "#eeeeee"}}>
                <Hero/>
                <div class="container">
                    <Rota/>
                    <Ponto/>
                    <Usuario/>
                </div>
            </div>
        );
    }
}