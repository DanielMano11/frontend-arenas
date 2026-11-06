import './CardExperiencia.css'

export function CartaoExperiencia({ numero, titulo, texto, imagem, destaque }) {
    return (
        <div className={destaque ? 'cartao-experiencia cartao-destaque' : 'cartao-experiencia'}>
            <div className="foto-experiencia">
                <img src={imagem} alt={titulo} className="imagem-experiencia" />
                <div className="conteudo-experiencia">
                    <span className="numero-experiencia">
                        {numero}
                    </span>
                    <h3>{titulo}</h3>
                    <p>{texto}</p>
                </div>
            </div>
            <a href="#estrutura" className="botao-estrutura">
                <span>Conheça a estrutura</span>
                <span className="seta-estrutura">→</span>
            </a>
        </div>
    );
}
