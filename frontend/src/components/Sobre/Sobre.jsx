import './Sobre.css';

export function Sobre() {
  return (
    <section className="secao-sobre" id="sobre">
      <div className="container sobre-conteudo">
        <div className="sobre-texto">
          <small className="sobre-tag">SOBRE A ARENA</small>
          <h2 className="sobre-titulo">
            Arena Solar <br />
          </h2>
          <p>
            A <strong>Arena Solar</strong> nasceu para reunir atletas, amigos e
            famílias em um espaço completo dedicado aos esportes de areia.
            Contamos com quadras de areia especial que não esquenta, iluminação
            profissional em LED e amplo recuo para você jogar com segurança.
          </p>
          <p>
            Mais do que quadras para jogar, oferecemos uma estrutura pensada
            para o seu conforto: vestiários equipados, aluguel de raquetes e
            bolas, espaço de convivência no deck central e turmas para todos os
            níveis — do iniciante ao competitivo.
          </p>
        </div>

        <div className="sobre-destaques">
          <div className="card-destaque-sobre">
            <strong>06</strong>
            <span>Quadras oficiais</span>
            <p>Areia tratada e iluminação em LED para jogos diurnos e noturnos.</p>
          </div>

          <div className="card-destaque-sobre">
            <strong>03</strong>
            <span>Modalidades</span>
            <p>Quadras preparadas para Beach Tennis, Vôlei de Praia e Futevôlei.</p>
          </div>
          <div className="card-destaque-sobre">
            <strong>06h–23h</strong>
            <span>Todos os dias</span>
            <p>Horários flexíveis de segunda a domingo para treinar ou jogar com amigos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
