import { useState } from "react";
import { Link } from "react-router";
import Header from "../components/Header";
import InputForm from "../components/InputForm";

export default function CadastroChamado({ onSubmission }) {
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
        <>
            <Header />
            <main className="pagina-clientes">

                <h1>Cadastrar novo Chamado</h1>

                {mensagemSucesso && (
                    <p className="mensagem-sucesso">
                        {mensagemSucesso}
                    </p>
                )}

                <form className="formulario-cliente" onSubmit={cadastrar} noValidate>
                    <InputForm
                        name={"titulo"}
                        type={"text"}
                        required
                        value={titulo}
                        setState={setTitulo}
                    />

                    <InputForm
                        name={"descricao"}
                        type={"text"}
                        required
                        value={descricao}
                        setState={setDescricao}
                    />

                    <InputForm
                        name={"prioridade"}
                        type={"number"}
                        required
                        value={prioridade}

                        setState={setPrioridade}
                    />

                    <InputForm
                        name={"solicitante"}
                        type={"text"}
                        value={solicitante}
                        setState={setSolicitante}
                        required
                    />

                    <label htmlFor="status">Status</label>
                    <select defaultValue={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value={"ABERTO"} selected>Aberto</option>
                        <option value={"FECHADO"}>Fechado</option>
                        <option value={"PENDENTE"}>Pendente</option>
                    </select>


                    <button type="submit">Cadastrar Chamado</button>
                </form>

                <Link to="/chamados">Voltar para Gerenciamento de Chamados</Link>
            </main>
        </>
    )
}
