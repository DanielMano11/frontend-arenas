import './CardEsporte.css';

export function CartaoEsporte({ numero, titulo, categoria, texto, imagem }) {
  return (
    <div className="cartao-esporte">
      <div className="foto-esporte">
        <img src={imagem} alt={titulo} />
        <div className="conteudo-esporte">
          <span className="numero-esporte">{numero}</span>
          <span className="categoria-esporte">{categoria}</span>
          <h3>{titulo}</h3>
          <p>{texto}</p>
        </div>
      </div>
      <a href="#cadastro" className="botao-esporte">
        <span>Explorar</span>
        <span className="seta-esporte">→</span>
      </a>
    </div>
  );
}

export default CartaoEsporte;
