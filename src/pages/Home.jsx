import React from 'react'
import SkillCard from '../components/SkillCard'

const Home = () => {
    const skillGroups = [
    { id: 1, title: "Backend", items: ["Laravel", "PHP", "SQL"] },
    { id: 2, title: "Frontend", items: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"] },
    { id: 3, title: "Tools", items: ["Git/Github", "Inertia.js", "Vercel", "InfinityFree"] }
  ]
  
  return (
    <section className="flex flex-col items-center" >
      <div className="w-48 h-48 overflow-hidden border-2 border-purple-500/30 rounded-lg hover:-translate-y-1 transition-all">
        <img src="/src/assets/Alfredo-Almirez.jpg" alt="Alfredo Almirez Image" className="w-full h-full object-cover" />
      </div>

      <div className="py-2 my-2 text-purple-400 font-mono text-xs uppercase tracking-widest animate-pulse">
              // Backend Developer \\
      </div>
      <h1 className="text-7xl text-center text-primary-lite font-black tracking-tighter leading-none my-3">
        <span className="text-purple-600">A</span>LFREDO ALMIREZ
      </h1>
      <p className="max-w-md text-gray-500 text-sm leading-relaxed border-l border-purple-900 pl-4 my-3">
        Focusing on backend development using React & Laravel
      </p>

      {/* SKILLS */}
      <section className="w-full max-w-4xl my-20">
        <div className="flex items-center gap-4 mb-8 text-primary-lite">
          <h2 className="uppercase text-sm"><span className="text-purple-600">S</span>kills</h2>
          <div className="h-px grow bg-purple-500/20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, id) => (
            <SkillCard key={id} title={group.title} items={group.items} />
          ))}
        </div>
      </section>
    </section>
  )
}

export default Home