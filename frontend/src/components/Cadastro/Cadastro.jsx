import { useState } from 'react';
import './Cadastro.css';

export function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [modalidade, setModalidade] = useState('Beach Tennis');
  const [mensagemErro, setMensagemErro] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState('');

  const [listaAtletas, setListaAtletas] = useState([
    {
      iniciais: 'MS',
      nome: 'Marino Salles',
      telefone: '(11) 9****-1842',
      modalidade: 'BEACH TENNIS'
    },
    {
      iniciais: 'LA',
      nome: 'Lucas Andrade',
      telefone: '(11) 9****-9236',
      modalidade: 'FUTEVÔLEI'
    }
  ]);

  function enviarCadastro(event) {
    event.preventDefault();

    if (nome === '' || email === '' || telefone === '' || modalidade === '') {
      setMensagemErro('Por favor, preencha todos os campos obrigatórios.');
      setMensagemSucesso('');
      return;
    }

    const partes = nome.trim().split(' ');
    const iniciais = partes.length > 1
      ? (partes[0][0] + partes[partes.length - 1][0]).toUpperCase()
      : nome.substring(0, 2).toUpperCase();

    const telFormatado = telefone.length > 5
      ? telefone.substring(0, 5) + '****-' + telefone.slice(-4)
      : telefone;

    const novoAtleta = {
      iniciais: iniciais,
      nome: nome,
      telefone: telFormatado,
      modalidade: modalidade.toUpperCase()
    };

    setListaAtletas([novoAtleta, ...listaAtletas]);
    setMensagemSucesso('Cadastro confirmado com sucesso na Arena!');
    setMensagemErro('');

    setNome('');
    setEmail('');
    setTelefone('');
    setModalidade('Beach Tennis');
  }

  return (
    <section className="secao-cadastro" id="cadastro">
      <div className="container">
        <div className="cadastro-info">
          <div className="tag-cadastro">
            <span className="linha"></span>
            <span>FAÇA PARTE DA ARENA</span>
          </div>

          <h2 className="titulo-cadastro">
            GARANTA SEU CADASTRO<br />
            DE ATLETA NA ARENA
          </h2>

          <p className="subtitulo-cadastro">
            Conecte-se às melhores quadras de Beach Tennis, Vôlei de Praia e
            Futevôlei. Sua próxima partida começa aqui.
          </p>

          <div className="box-atletas">
            <div className="box-atletas-topo">
              <span>ENTRARAM NA ARENA</span>
              <span className="status-vagas">● 14 VAGAS</span>
            </div>

            <div className="lista-atletas">
              {listaAtletas.map((atleta, index) => (
                <div key={index} className="item-atleta">
                  <div className="atleta-dados">
                    <div className="atleta-avatar">{atleta.iniciais}</div>
                    <div>
                      <p className="atleta-nome">{atleta.nome}</p>
                      <p className="atleta-telefone">{atleta.telefone}</p>
                    </div>
                  </div>
                  <span className="atleta-modalidade-badge">{atleta.modalidade}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card-formulario">
          <div className="card-formulario-topo">
            <h3>CADASTRO DE ATLETA</h3>
            <span className="tempo-cadastro">Leva menos de 1 minuto</span>
          </div>

          {mensagemErro !== '' && (
            <div className="alerta-erro">{mensagemErro}</div>
          )}

          {mensagemSucesso !== '' && (
            <div className="alerta-sucesso">{mensagemSucesso}</div>
          )}

          <form onSubmit={enviarCadastro}>
            <div className="campo-grupo">
              <label htmlFor="nome">NOME COMPLETO</label>
              <input
                id="nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Como podemos chamar você?"
                required
              />
            </div>

            <div className="campo-grupo">
              <label htmlFor="email">E-MAIL</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="voce@email.com"
                required
              />
            </div>

            <div className="campo-grupo">
              <label htmlFor="telefone">TELEFONE / WHATSAPP</label>
              <input
                id="telefone"
                type="tel"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="(11) 99999-9999"
                required
              />
            </div>

            <div className="campo-grupo">
              <label>MODALIDADE DE INTERESSE</label>
              <div className="botoes-modalidades">
                <label className={modalidade === 'Beach Tennis' ? 'botao-opcao-modalidade ativo' : 'botao-opcao-modalidade'}>
                  <input
                    type="radio"
                    name="modalidade"
                    value="Beach Tennis"
                    checked={modalidade === 'Beach Tennis'}
                    onChange={(e) => setModalidade(e.target.value)}
                    style={{ display: 'none' }}
                  />
                  BEACH TENNIS
                </label>
                <label className={modalidade === 'Vôlei de Praia' ? 'botao-opcao-modalidade ativo' : 'botao-opcao-modalidade'}>
                  <input
                    type="radio"
                    name="modalidade"
                    value="Vôlei de Praia"
                    checked={modalidade === 'Vôlei de Praia'}
                    onChange={(e) => setModalidade(e.target.value)}
                    style={{ display: 'none' }}
                  />
                  VÔLEI DE PRAIA
                </label>
                <label className={modalidade === 'Futevôlei' ? 'botao-opcao-modalidade ativo' : 'botao-opcao-modalidade'}>
                  <input
                    type="radio"
                    name="modalidade"
                    value="Futevôlei"
                    checked={modalidade === 'Futevôlei'}
                    onChange={(e) => setModalidade(e.target.value)}
                    style={{ display: 'none' }}
                  />
                  FUTEVÔLEI
                </label>
              </div>
            </div>

            <button type="submit" className="botao-enviar-cadastro">
              CONFIRMAR CADASTRO NA ARENA →
            </button>

            <p className="seguranca-dados">
              ✓ Seus dados ficam seguros com a gente
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Cadastro;
