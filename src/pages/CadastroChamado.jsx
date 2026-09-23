import { useState } from "react";
import { Link } from "react-router";

export default function CadastroChamado({ clientes, onSubmission }) {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [prioridade, setPrioridade] = useState('')
    const [solicitante, setSolicitante] = useState('')
    const [status, setStatus] = useState('ABERTO')
    const [mensagemSucesso, setMensagemSucesso] = useState('')

    function cadastrar(evento) {
        evento.preventDefault()

        const novoChamado = {
            titulo: titulo,
            descricao: descricao,
            prioridade: prioridade,
            solicitante: solicitante,
            status: status
        }

        onSubmission(novoChamado)

        setMensagemSucesso('Chamado cadastrado com sucesso!')
    }

    return (
        <main className="pagina-clientes">
            <h1>Cadastrar novo Chamado</h1>

            {mensagemSucesso && (
                <p className="mensagem-sucesso">
                    {mensagemSucesso}
                </p>
            )}

            <form className="formulario-cliente" onSubmit={cadastrar} noValidate>
                <label htmlFor="titulo">Título</label>
                <input
                    id="titulo"
                    type="text"
                    value={titulo}
                    onChange={(evento) => {
                        setTitulo(evento.target.value)
                        // onSubmit = {
                        //     cadastrarChamado
                        // }

                    }}
                    required
                />


                <label htmlFor="descricao">Descrição</label>
                <input
                    id="descricao"
                    type="text"
                    value={descricao}
                    onChange={(evento) => {
                        setDescricao(evento.target.value)
                    }}
                    required
                />



                <label htmlFor="prioridade">Prioridade</label>
                <input
                    id="prioridade"
                    type="number"
                    value={prioridade}
                    onChange={(evento) => {
                        setPrioridade(evento.target.value)
                    }}
                    required
                />


                <label htmlFor="solicitante">Solicitante</label>
                <input
                    id="solicitante"
                    type="text"
                    value={solicitante}
                    onChange={(evento) => {
                        setSolicitante(evento.target.value)
                    }}
                    required
                />

                <label htmlFor="status">Status</label>
                <select defaultValue={status}>
                    <option value={"ABERTO"} selected>Aberto</option>
                    <option value={"FECHADO"}>Fechado</option>
                    <option value={"PENDENTE"}>Pendente</option>
                </select>


                <button type="submit">Cadastrar Chamado</button>
            </form>

            <Link to="/chamados">Voltar para Gerenciamento de Chamados</Link>
        </main>
    )
}
