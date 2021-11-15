function CardRota({rota}) {
    return (
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">Rota de número: {rota.id}</h5>
                <p class="card-text">Horario de Saida do terminal: {rota.horario_saida_terminal}</p>
                <p class="card-text">Horario de chegada no terminal: {rota.horario_chegada_terminal}</p>
                <p class="card-text">Terminal de número: {rota.id_ponto}</p>
                </div>
            </div>
        </div>
    )
}

export default CardRota;