import React from 'react'

const SkillCard = ({ title, items }) => {
  return (
    <div className="rounded-sm border border-purple-500/10 p-4 bg-purple-500/5 hover:bg-purple-500/10 hover:-translate-y-1 transition-all">
      <h3 className="text-purple-400 font-mono text-sm text-center mb-4 uppercase tracking-widest">{title}</h3>
      <ul className="space-y-2 text-gray-400 text-center font-mono text-sm">
        {items.map((item, index) => (
          <li key={index} className="hover:text-primary-lite hover:bg-tech-purple-light hover:rounded-full hover:-translate-y-1 transition-all">{item}</li>
        ))}

      </ul>
    </div>
  )
}

export default SkillCard