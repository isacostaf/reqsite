import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home, FileText, Users, BookOpen, LayoutDashboard } from 'lucide-react'

function NavLink({ to, children, icon: Icon }: { to: string; children: React.ReactNode; icon: any }) {
  return (
    <Link
      to={to}
      className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    >
      <Icon className="w-5 h-5 mr-2" />
      {children}
    </Link>
  )
}

function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-topic1 to-topic2 bg-clip-text text-transparent">
                ReqSite
              </span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink to="/" icon={Home}>Início</NavLink>
              <NavLink to="/entregas" icon={FileText}>Entregas</NavLink>
              <NavLink to="/equipe" icon={Users}>Equipe</NavLink>
              <NavLink to="/metodologia" icon={BookOpen}>Metodologia</NavLink>
              <NavLink to="/visao-geral" icon={LayoutDashboard}>Visão Geral</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function EntregaPage({ number }: { number: number }) {
  return (
    <div className="mt-5 space-y-8">
      <div className="text-center space-y-0 py-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-topic1 to-topic2 bg-clip-text text-transparent">
          Entrega Unidade {number}
        </h1>
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert text-center">
        <p className="mt-0 mb-0">
          Apresentação gravada referente ao trabalho feito durante a Unidade {number}
        </p>
      </div>

      <div className="flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/your-video-id"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  )
}

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-topic1 to-topic2 bg-clip-text text-transparent">
        Bem-vindo ao ReqSite
      </h1>
      <p className="text-center text-xl mb-8">
        Site para documentação e acompanhamento do projeto da disciplina de Requisitos de Software
      </p>
    </div>
  )
}

function App() {
  return (
    <Router basename="/reqsite">
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/entregas/entrega-1" element={<EntregaPage number={1} />} />
            <Route path="/entregas/entrega-2" element={<EntregaPage number={2} />} />
            <Route path="/entregas/entrega-3" element={<EntregaPage number={3} />} />
            <Route path="/entregas/entrega-4" element={<EntregaPage number={4} />} />
            <Route path="/entregas/entrega-5" element={<EntregaPage number={5} />} />
            <Route path="/entregas/entrega-6" element={<EntregaPage number={6} />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App 