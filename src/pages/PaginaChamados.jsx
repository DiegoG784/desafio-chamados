import { Link } from "react-router"
import Header from "../components/Header"

export default function PaginaChamados({ chamados, onExclusion }) {

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
            <div className="pagina-clientes">
            <h1>Gerenciamento de Chamados</h1>
            <span style={{margin: 10}}/>
            <div className="opcoes-clientes">
                <Link to="/chamados/listar">
                    Listar chamados
                </Link>
                <Link to="/chamados/cadastrar">
                    Cadastrar novo chamado
                </Link>
            </div>
            <Link to="/">
                Voltar para página inicial
            </Link>
        </div>
        </>
    )
}