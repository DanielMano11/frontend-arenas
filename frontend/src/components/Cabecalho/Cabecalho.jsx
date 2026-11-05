import './Cabecalho.css';

export function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="container">
        <a href="#inicio">
          <img src="/images/logo.png" alt="Arena Solar" className="logo" />
        </a>

        <nav className="menu">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre a arena</a>
          <a href="#modalidades">Modalidades</a>
          <a href="#estrutura">Estrutura</a>
          <a href="#cadastro">Cadastro</a>
        </nav>

        <a href="#cadastro" className="botao-atleta">
          <span>ÁREA DO ATLETA</span>
        </a>
      </div>
    </header>
  );
}

export default Cabecalho;
