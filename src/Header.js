function Header() {
    return (
        <header id="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">Inicio</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                
              </div>
            </nav>
        </header> 
    );
}

export default Header;

/*
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link" href="#">Rotas</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Pontos</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Usuarios</a>
    </li>
  </ul>
</div>
*/