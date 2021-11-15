import { Component } from "react";

export default class FormRota extends Component {
    
    constructor(props){
        super(props);
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        
        let formData = new FormData(document.getElementById('form-rota'));

        const object = {};
        formData.forEach(function(value, key) {
          object[key] = value;
        });

        console.log(object);

        const response = await fetch("http://localhost:8080/rota", {
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
            <form id="form-rota" style={{marginTop: 20}} onSubmit={this.handleSubmit}>
                <div class="row justify-content-center">
                    <div class="form-group col-md-2">
                        <label for="inputId">Id da Rota</label>
                        <input type="text" class="form-control" name="id"/>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputId">Id do Ponto</label>
                        <input type="text" class="form-control" name="id_ponto"/>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="form-group col-md-2">
                        <label for="inputHoraSaida">Hora Saida do terminal</label>
                        <input type="time" class="form-control" id="inputHoraSaisa" name="horario_saida_terminal"/>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputHoraChegada">Hora Chegada no terminal</label>
                        <input type="time" class="form-control" id="inputHoraChegada" name="horario_chegada_terminal"/>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" style={{marginTop: 20}}>Enviar</button>
            </form>
        )
      }
}