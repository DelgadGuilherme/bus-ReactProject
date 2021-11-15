function CardPonto({ponto}) {
    return (
        <div class="col-md-4">
           <div class="card">
                <div class="card-body">
                <h5 class="card-title">Ponto de número: {ponto.id}</h5>
                <p class="card-text">Localizacao: {ponto.localizacao}</p>
                </div>
            </div>
        </div>
    )
}

export default CardPonto;