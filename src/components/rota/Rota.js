import { Component } from "react";
import FormRota from "../formRota/FormRota";
import CardRota from "../rotacard/CardRota";

export default class Rota extends Component {

    constructor(props){
        super(props);
        this.state = {cardList: []};
    }

    onCarregamentoRotasFalhou(erro) {
        console.log(erro);
    }

    componentDidMount() {
        fetch("http://localhost:8080/rota")
        .then(response => response.json(), this.onCarregamentoRotasFalhou)
        .then(json => this.setState({ cardList : json }), this.onCarregamentoRotasFalhou);
    }

    render() {
        console.log(this.state)
        return (
            <section style={{backgroundColor: "#eeeeee"}}>
                <h2 class="text-center" style={{marginTop: 30}}>Rotas</h2>

                <div class="row justify-content-center text-center" style={{marginTop: 30}}>
                    {
                        this.state.cardList.map(function (rota) {
                            return <CardRota rota={rota} />
                        })
                    }
                </div>

                
                <div class="row justify-content-center text-center" style={{marginTop: 10}}>
                    <FormRota/>
                </div>


            </section>
        )
    }
    
}