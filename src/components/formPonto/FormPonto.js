import { Component } from "react";

export default class FormPonto extends Component {
    
    constructor(props){
        super(props);
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        
        let formData = new FormData(document.getElementById('form-ponto'));

        const object = {};
        formData.forEach(function(value, key) {
          object[key] = value;
        });

        console.log(object);

        const response = await fetch("http://localhost:8080/ponto", {
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
            <form class="form" id="form-ponto" onSubmit={this.handleSubmit}>
                <div class="row justify-content-center">
                    <div class="form-group col-md-2">
                        <label for="inputId">Id do ponto</label>
                        <input type="text" class="form-control" name="id"/>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputHoraChegada">Localizacao</label>
                        <input type="text" class="form-control" id="inputHoraChegada" name="localizacao"/>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" style={{marginTop: 20}}>Enviar</button>
            </form>
        )
    }
}