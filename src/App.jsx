import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import listaChamados from './data/chamado.db'
import Header from './components/Header'
import LinkCard from './components/LinkCard'
import ListaChamados from './pages/ListaChamados'
import PaginaChamados from './pages/PaginaChamados'
import CadastroChamado from './pages/CadastroChamado'
import EdicaoChamado from './pages/EdicaoChamado'

function App() {
  const modules = [
    {
      id: 1,
      title: "Gerenciamento de Chamados",
      description: "Gerencie os chamados cadastrados no sistema.",
      route: "/chamados"
    }
  ]

  const [chamados, setChamados] = useState(listaChamados)

  function onExclusion(id) {
    setChamados((list) =>
			list.filter((chamado) => chamado.id !== id),
		);
  }

  function onSubmission(novoChamado) {
    novoChamado['id'] = chamados.length + 1
    setChamados(
      [...chamados,
        novoChamado
      ]
    )
  }

  function onEdit(chamadoAtualizado) {
    setChamados(
			chamados.map((chamado) =>
				chamado.id === chamadoAtualizado.id ? chamadoAtualizado : chamado,
			),
		);
  }

  return (
    <Routes>
      <Route
        path='/'
        element={(
          <main>
            <Header/>
            
            <section className="modulos" style={{margin: 50}}>
								{modules.map((module) => (
									<LinkCard
										key={module.id}
										title={module.title}
										description={module.description}
										route={module.route}
									/>
								))}
							</section>
          </main>
        )}
      />
      <Route
        path='/chamados/'
        element={<PaginaChamados />}
      />
      <Route
        path='/chamados/listar'
        element={<ListaChamados chamados={chamados} onExclusion={onExclusion} />}
      />
      <Route
        path='/chamados/cadastrar'
        element={<CadastroChamado chamados={chamados} onSubmission={onSubmission} />}
      />
      <Route
        path='/chamados/editar/:id'
        element={<EdicaoChamado chamados={chamados} onEdit={onEdit} />}
      />
    </Routes>
  )
}

export default App
