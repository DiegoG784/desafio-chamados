import { useState } from 'react'
import { Link, useParams } from 'react-router'
import Header from '../components/Header'

function EdicaoChamado({ chamados, onEdit }) {
    // const navigate = useNavigate()
    const { id } = useParams()

    const chamado = chamados.find(
        (chamado) => chamado.id === Number(id)
    )

    const [titulo, setTitulo] = useState(chamado?.titulo ?? '')
    const [descricao, setDescricao] = useState(chamado?.descricao ?? '')
    const [prioridade, setPrioridade] = useState(
        chamado?.prioridade ?? ''
    )
    const [solicitante, setSolicitante] = useState(chamado?.solicitante ?? '')
    const [status, setStatus] = useState(chamado?.status ?? '')

    function alterarChamado(evento) {
        evento.preventDefault()

        const chamadoAtualizado = {
            id: chamado.id,
            titulo: titulo,
            descricao: descricao,
            prioridade: prioridade,
            solicitante: solicitante,
            status: status
        }

        onEdit(chamadoAtualizado)
        alert('Chamado alterado com sucesso!')
    }
    // if (!chamado) {
    //     return (
    //         <main className="pagina-clientes">
    //             <h1>Chamado não encontrado</h1>
    //             <Link to="/clientes/listar">
    //                 Voltar para a lista de chamados
    //             </Link>
    //         </main>
    //     )
    // }
    return (
        <>
            <Header />

            <main className="pagina-clientes">
                <h1>Alterar Chamado</h1>
                <form
                    className="formulario-cliente"
                    onSubmit={alterarChamado}
                >
                    <label htmlFor="titulo">Título</label>
                    <input
                        id="titulo"
                        type="text"
                        value={titulo}
                        onChange={(evento) => {
                            setTitulo(evento.target.value)
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
                    <select defaultValue={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value={"ABERTO"} selected>Aberto</option>
                        <option value={"FECHADO"}>Fechado</option>
                        <option value={"PENDENTE"}>Pendente</option>
                    </select>


                    <button type="submit">Editar Chamado</button>

                </form>
                <Link to="/chamados/listar">
                    Voltar para a lista de chamados
                </Link>
            </main>
        </>

    )
}
export default EdicaoChamado
