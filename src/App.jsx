import './App.css'

function App() {
  return (
    <div className="min-h-screen p-8 flex flex-col">
      {/* Industrial Header */}
      <nav className="flex justify-between items-center border-b border-purple-500/20 pb-4 mb-20">
        <span className="text-purple-500 font-bold tracking-widest text-sm">ALFREDO</span>
        <div className="flex gap-6 text-[10px] uppercase tracking-widest text-gray-500">
          <span className="hover:text-purple-400 cursor-pointer">01_Projects</span>
          <span className="hover:text-purple-400 cursor-pointer">02_Stack</span>
          <span className="hover:text-purple-400 cursor-pointer">03_Contact</span>
        </div>
      </nav>

      <main className="grow">

        {/* Home */}
        <section className="flex flex-col items-center">
          <div className="w-48 h-48 overflow-hidden border-2 border-purple-500/30 rounded-lg hover:-translate-y-1 transition-all">
            <img src="/src/assets/Alfredo-Almirez.jpg" alt="Alfredo Almirez Image" className="rounded-lg" />
          </div>

          <div className="py-2 my-2 text-purple-400 font-mono text-xs uppercase tracking-widest animate-pulse">
          // Backend Developer \\
          </div>
          <h1 className="text-7xl text-center font-black tracking-tighter leading-none my-3">
            <span className="text-purple-600">A</span>LFREDO ALMIREZ
          </h1>
          <p className="max-w-md text-gray-500 text-sm leading-relaxed border-l border-purple-900 pl-4 my-3">
            Focusing on backend development using React & Laravel
          </p>

          {/* SKILLS */}
          <section className="w-full max-w-4xl mt-20">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="uppercase text-sm"><span className="text-purple-600">S</span>kills</h2>
              <div className="h-px grow bg-purple-500/20"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-sm border border-purple-500/10 p-4 bg-purple-500/5 hover:bg-purple-500/10 transition-all">
                <h3 className="text-purple-400 font-mono text-sm mb-4 uppercase tracking-widest">Backend</h3>
                <ul className="space-y-2 text-gray-400 font-mono text-sm">
                  <li>Laravel</li>
                  <li>PHP</li>
                  <li>MySQL</li>
                </ul>
              </div>

              <div className="rounded-sm border border-purple-500/10 p-4 bg-purple-500/5 hover:bg-purple-500/10 transition-all">
                <h3 className="text-purple-400 font-mono text-sm mb-4 uppercase tracking-widest">Frontend</h3>
                <ul className="space-y-2 text-gray-400 font-mono text-sm">
                  <li>React.js</li>
                  <li>Tailwind CSS</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>

              <div className="rounded-sm border border-purple-500/10 p-4 bg-purple-500/5 hover:bg-purple-500/10 transition-all">
                <h3 className="text-purple-400 font-mono text-sm mb-4 uppercase tracking-widest">Tools</h3>
                <ul className="space-y-2 text-gray-400 font-mono text-sm">
                  <li>Git/Github</li>
                  <li>Inertia.js</li>
                  <li>Vercel</li>
                  <li>InfinityFree</li>
                </ul>
              </div>
            </div>
          </section>
        </section>
      </main>

      <footer>
        <div className="border-t border-purple-500/20 text-center">
          <div className="py-8 uppercase text-xs tracking-widest">
            <span>© {new Date().getFullYear()} Copyright Reserved. Alfredo Almirez</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
