import { Link } from "react-router"
import Header from "../components/Header"

export default function ListaChamados({ chamados, onExclusion }) {

    function confirmExclusion(chamado) {
        const confirmation = window.confirm(
            `Deseja realmente excluir o chamado ${chamado.titulo}?`
        )
        if (confirmation) {
            onExclusion(chamado.id)
            console.log(chamado)
        }
    }


    return (
        <>
            <Header/>
            <main className="pagina-clientes">
                <h1>Chamados</h1>
                <ul className="lista-clientes">
                    {chamados.map(chamado => (
                        <li key={chamado.id}>
                            <strong>{chamado.titulo}</strong>
                            <span>ID: #{chamado.id}</span>
                            <span>Descrição: {chamado.descricao}</span>
                            <span>prioridade: {chamado.prioridade}</span>
                            <span>Solicitante: {chamado.solicitante}</span>
                            <span>Status: {chamado.status}</span>
                            <div className="acoes-cliente">
                                <Link
                                    to={`/chamados/editar/${chamado.id}`}
                                    className="botao-alterar"
                                >
                                    Alterar
                                </Link>
                                <button
                                    type="button"
                                    className="botao-excluir"
                                    onClick={() => confirmExclusion(chamado)}
                                >
                                    Excluir
                                </button>
                            </div>
                        </li>


                    ))}

                </ul>

                <Link to={"/chamados"}>Voltar para página de gerenciamento de Chamados</Link>
            </main>
        </>
    )
}