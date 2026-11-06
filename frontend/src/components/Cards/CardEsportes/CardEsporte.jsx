import './CardEsporte.css';

export function CartaoEsporte({ numero, titulo, categoria, texto, imagem, aoEscolher }) {
    return (
        <article className="cartao-esporte">
            <div className="foto-esporte">
                <img src={imagem} alt={titulo} />
                <div className="conteudo-esporte">
                    <span className="numero-esporte">{numero}</span>
                    <span className="categoria-esporte">{categoria}</span>
                    <h3>{titulo}</h3>
                    <p>{texto}</p>
                </div>
            </div>
            <button type="button" className="botao-esporte" onClick={aoEscolher} aria-label={`Escolher ${titulo}`}>
                Explorar
                <span className="seta-esporte" aria-hidden="true">→</span>
            </button>
        </article>
    );
}
