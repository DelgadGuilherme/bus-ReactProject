import { Component } from "react";

export default class FormUsuario extends Component {

    constructor(props){
        super(props);
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        
        let formData = new FormData(document.getElementById('form-usuario'));

        const object = {};
        formData.forEach(function(value, key) {
          object[key] = value;
        });

        console.log(object);

        const response = await fetch("http://localhost:8080/usuario", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(object),
        })
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
      }

      render() {
        return (
            <form id="form-usuario" onSubmit={this.handleSubmit}>
                <div class="row justify-content-center">
                    <div class="form-group col-md-1">
                        <label for="inputId">Id</label>
                        <input type="text" class="form-control" name="id"/>
                    </div>
                    <div class="form-group col-md-5">
                        <label for="inputNome">Nome</label>
                        <input type="text" class="form-control" name="nome"/>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputCPF">CPF</label>
                        <input type="text" class="form-control" name="cpf"/>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="form-group col-md-5">
                        <label for="inputEmail">E-mail</label>
                        <input type="text" class="form-control" id="inputEmail" name="email"/>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputTelefone">Telefone</label>
                        <input type="text" class="form-control" id="inputTelefone"  name="telefone"/>
                    </div>
                    <div class="form-group col-md-1">
                        <label for="inputIdEndereco">Id Endereco</label>
                        <input type="text" class="form-control"  name="endereco_id"/>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" style={{marginTop: 20}}>Enviar</button>
            </form>
        )
    
      }
}
    