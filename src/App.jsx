import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Skills from './pages/Skills'

function App() {
  return (
    <div className="relative min-h-screen bg-tech-dark font-mono overflow-x-hidden">

      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-32 bg-scanline-bar animate-scanline"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen p-8">
        {/* Industrial Header */}
        <nav className="flex justify-between items-center border-b border-purple-500/20 pb-4 mb-20">
          <Link to="/"><span className="text-purple-500 font-bold tracking-widest text-sm">\ALFREDO/</span></Link>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-gray-500">
            <Link to="/skills" className="hover:text-purple-400 cursor-pointer">Skills</Link>
            <span className="hover:text-purple-400 cursor-pointer">Project</span>
            <span className="hover:text-purple-400 cursor-pointer">Contact</span>
          </div>
        </nav>

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/skills" element={<Skills />} />


          </Routes>

        </main>

        <footer>
          <div className="text-primary-lite border-t border-purple-500/20 text-center">
            <div className="py-8 uppercase text-xs tracking-widest">
              <span>© {new Date().getFullYear()} Copyright Reserved. Alfredo Almirez</span>
            </div>
          </div>
        </footer>


      </div>
    </div >
  )
}

export default App
