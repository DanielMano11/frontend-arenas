import { useState } from 'react';
import './Cadastro.css';

export function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [modalidade, setModalidade] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState('');

  const [listaAtletas, setListaAtletas] = useState([
    {
      iniciais: 'DM',
      nome: 'Daniel Mano',
      telefone: '(88) 9****-7986',
      modalidade: 'VÔLEI DE PRAIA'
    },
    {
      iniciais: 'DS',
      nome: 'Daniel Souza',
      telefone: '(88) 9****-9236',
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
    setModalidade('');
  }

  return (
    <section className="secao-cadastro" id="cadastro">
      <div className="container">
        <div className="cadastro-info">
          <div className="tag-cadastro">
            <span>FAÇA PARTE DA ARENA</span>
          </div>

          <h2 className="titulo-cadastro">
            REALIZE SEU CADASTRO<br />
            DE ATLETA NA ARENA
          </h2>

          <p className="subtitulo-cadastro">
            Conecte-se às melhores quadras de Beach Tennis, Vôlei de Praia e
            Futevôlei. Sua próxima partida começa aqui.
          </p>

          <div className="box-atletas">
            <div className="box-atletas-topo">
              <span>NOSSOS ATLETAS</span>
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
                placeholder="(88) 99999-9999"
                required
              />
            </div>

            <div className="campo-grupo">
              <label htmlFor="modalidade">MODALIDADE DE INTERESSE</label>
              <select
                id="modalidade"
                value={modalidade}
                onChange={(e) => setModalidade(e.target.value)}
                required
                className="select-modalidade"
              >
                <option value="">Selecione uma modalidade</option>
                <option value="Beach Tennis">Beach Tennis</option>
                <option value="Vôlei de Praia">Vôlei de Praia</option>
                <option value="Futevôlei">Futevôlei</option>
              </select>
            </div>

            <button type="submit" className="botao-enviar-cadastro">
              CONFIRMAR CADASTRO NA ARENA
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Cadastro;
