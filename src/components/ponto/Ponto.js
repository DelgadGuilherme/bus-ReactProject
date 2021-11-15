import { Component } from "react";
import { Form } from "react-bootstrap";
import FormPonto from "../formPonto/FormPonto";
import CardPonto from "../pontocard/CardPonto";

export default class Ponto extends Component {
    
    constructor(props){
        super(props);
        this.state = {pontoList: []};
    }

    onCarregamentoPontoFalhou(erro) {
        console.log(erro);
    }

    componentDidMount() {
        fetch("http://localhost:8080/ponto")
        .then(response => response.json(), this.onCarregamentoPontoFalhou)
        .then(json => this.setState({ pontoList : json }), this.onCarregamentoPontoFalhou);
    }

    render() {
        return (
            <section>
                <h2 class="text-center" style={{marginTop: 30}}>Pontos</h2>

                <div class="row justify-content-center text-center"  style={{marginTop: 30}}>
                    {
                        this.state.pontoList.map(function (ponto) {
                            return <CardPonto ponto={ponto} />
                        })
                    }
                </div>

                <div class="row justify-content-center text-center" style={{marginTop: 10}}>
                    <FormPonto/>
                </div>
            </section>
        )
    }
}