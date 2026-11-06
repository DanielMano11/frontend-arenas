import './Rodape.css';

export function Rodape() {
  return (
    <footer className="rodape">
      <div className="container rodape-principal">
        <div className="rodape-coluna rodape-marca">
          <a href="#inicio">
            <img src="/images/logo.png" alt="Arena Solar" className="rodape-logo" />
          </a>
          <p className="rodape-descricao">
            Esporte, sol e conexão em uma estrutura feita para você viver o melhor da areia.
          </p>
        </div>

        <div className="rodape-coluna">
          <h4 className="rodape-titulo">SOBRE A ARENA</h4>
          <ul className="rodape-links">
            <li><a href="#sobre">Nossa experiência</a></li>
            <li><a href="#estrutura">Estrutura</a></li>
            <li><a href="#cadastro">Seja um atleta</a></li>
          </ul>
        </div>

        <div className="rodape-coluna">
          <h4 className="rodape-titulo">MODALIDADES</h4>
          <ul className="rodape-links">
            <li><a href="#modalidades">Beach Tennis</a></li>
            <li><a href="#modalidades">Vôlei de Praia</a></li>
            <li><a href="#modalidades">Futevôlei</a></li>
          </ul>
        </div>

        <div className="rodape-coluna rodape-contato">
          <h4 className="rodape-titulo">CONTATO & HORÁRIOS</h4>
          <div className="rodape-horario">
            <span className="rodape-dias">Segunda a domingo</span>
            <strong className="rodape-horas">06:00 — 23:00</strong>
          </div>
          <div className="rodape-info-contato">
            <a href="mailto:contato@arenasolar.com.br" className="rodape-email">contato@arenasolar.com.br</a>
            <a href="tel:1134567890" className="rodape-telefone">(88) 99623-7986</a>
          </div>
        </div>
      </div>

      <div className="container rodape-inferior">
        <p className="rodape-copyright">
          © 2026 Arena Solar. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Rodape;
