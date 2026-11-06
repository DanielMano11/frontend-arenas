import './Rodape.css';

export function Rodape() {
  return (
    <footer className="rodape">
      <div className="container">
        <div className="rodape-info">
          <h3>ARENA SOLAR</h3>
          <p>O melhor espaço para esportes de areia da região.</p>
        </div>

        <div className="rodape-contato">
          <p>Rua das Palmeiras, 120 - Tabuleiro do Norte, CE</p>
          <p>Segunda a Sábado: 06h às 22h | Domingo: 07h às 18h</p>
        </div>
      </div>

      <div className="rodape-direitos">
        <p>IFCE Campus Tabuleiro do Norte - Disciplina de Web 2</p>
      </div>
    </footer>
  );
}

export default Rodape;

