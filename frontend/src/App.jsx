import { Header } from './components/Header/Header';
import { CartaoExperiencia } from './components/Cards/CardExperiencia/CardExperiencia';
import { CartaoEsporte } from './components/Cards/CardEsportes/CardEsporte';
import { Cadastro } from './components/Cadastro/Cadastro';
import { Rodape } from './components/Rodape/Rodape';
import './App.css';

function App() {
  return (
    <div className="aplicacao">
      <Header />

      <main>
        <section className="secao-experiencias" id="estrutura">
          <div id="sobre"></div>
          <header className="cabecalho-experiencias">
            <div>
              <small>POR QUE JOGAR AQUI</small>
              <h2>A experiência <span>da nossa arena</span></h2>
            </div>
            <p>
              Performance, bem-estar e convivência sob o sol.
            </p>
          </header>

          <div className="experiencias">
            <CartaoExperiencia
              numero="01"
              imagem="/images/experiencia/volei.png"
              titulo="Treinamento & clínicas"
              texto="Aulas, clínicas e rachões para evoluir no seu ritmo."
              destaque
            />

            <CartaoExperiencia
              numero="02"
              imagem="/images/experiencia/deck.png"
              titulo="Deck central & convivência"
              texto="Sombra, mesas e uma vista privilegiada dos jogos."
            />

            <CartaoExperiencia
              numero="03"
              imagem="/images/experiencia/estrutura.png"
              titulo="Estrutura padrão torneio"
              texto="Redes oficiais, iluminação profissional e recuo seguro."
            />
          </div>
        </section>

        <section className="modalidades" id="modalidades">
          <header className="cabecalho-experiencias">
            <div>
              <small>MODALIDADES</small>
              <h2>Seu jogo. <span>Sua areia.</span></h2>
            </div>
            <p>Três modalidades. A mesma energia.</p>
          </header>

          <div className="esportes">
            <CartaoEsporte
              numero="01"
              imagem="/images/categorias/beach.png"
              titulo="Beach Tennis"
              categoria="Raquete + explosão"
              texto="Dinamismo e social em cada ponto."
            />
            <CartaoEsporte
              numero="02"
              imagem="/images/categorias/volei.png"
              titulo="Vôlei de praia"
              categoria="Salto + equipe"
              texto="Técnica e potência em grande sintonia."
            />
            <CartaoEsporte
              numero="03"
              imagem="/images/categorias/futvolei.png"
              titulo="Futvôlei"
              categoria="Controle + estilo"
              texto="Habilidade, criatividade e pura maresia."
            />
          </div>
        </section>

        <Cadastro />
      </main>

      <Rodape />
    </div>
  );
}

export default App;
