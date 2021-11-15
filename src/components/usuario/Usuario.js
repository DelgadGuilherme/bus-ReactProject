import { Component } from "react";
import FormUsuario from "../formUsuario/FormUsuario";

export default class Usuario extends Component {

    constructor(props){
        super(props);
    }

    render() {
        console.log(this.state)
        return (
            <section>
                <h2 class="text-center" style={{marginTop: 30}}>Cadastro de usuarios</h2>

                <div class="row justify-content-center text-center" style={{marginTop: 30}}>
                    <FormUsuario/>
                </div>
            </section>
        )
    }
    
}