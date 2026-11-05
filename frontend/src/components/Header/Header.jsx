import { Cabecalho } from '../Cabecalho/Cabecalho';
import './Header.css';

export function Header() {
  return (
    <div>
      <Cabecalho />

      <section className="banner">
        <div className="container">
          <div className="conteudo-banner">
            <div className="tag">
              <span className="linha"></span>
              <p>ESPORTE DE AREIA. ENERGIA DE VERDADE.</p>
            </div>

            <h1 className="titulo-banner">
              DOMINE A<br />
              QUADRA<br />
              <span className="laranja">DE AREIA.</span>
            </h1>

            <p className="frase-forte">Treine. Compita. Conecte-se.</p>
            <p className="frase-comum">Estrutura profissional e uma comunidade que joga junto.</p>

            <a href="#modalidades" className="botao-banner">
              EXPLORAR MODALIDADES
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
