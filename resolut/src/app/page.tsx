import SearchBar from '@/components/SearchBar';
import QuestionCard from '@/components/QuestionCard';
import { mockQuestions } from '@/data/mockData';
import { Lightbulb, Wrench, ShieldCheck, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-4 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute -top-10 -left-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20" />
          <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-20" />
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-bold shadow-sm ring-1 ring-indigo-200 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Zap size={16} fill="currentColor" /> ¡MVP de Resolut disponible!
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8 leading-[1.1]">
            Soluciones reales para<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
              problemas reales
            </span>
          </h1>
          
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Busca respuestas estructuradas por técnicos verificados y encuentra ayuda profesional en minutos.
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <SearchBar />
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400 font-semibold uppercase tracking-widest">
            <div className="flex items-center gap-2"><Lightbulb size={18} className="text-amber-400" /> +10k Soluciones</div>
            <div className="flex items-center gap-2"><Wrench size={18} className="text-indigo-400" /> +500 Técnicos</div>
            <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-green-500" /> Soluciones Verificadas</div>
          </div>
        </div>
      </section>

      {/* Categories / Popular Section */}
      <section className="py-24 bg-slate-50 border-t border-gray-100 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">Problemas populares</h2>
              <p className="text-gray-500 font-medium">Lo que más pregunta la comunidad de Resolut hoy.</p>
            </div>
            <button className="text-indigo-600 font-bold hover:underline">Ver todos los casos</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockQuestions.map((q) => (
              <QuestionCard key={q.id} question={q} />
            ))}
          </div>

          <div className="mt-20 p-12 bg-indigo-600 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-indigo-200 relative overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000" />
            
            <div className="relative z-10 text-center md:text-left mb-8 md:mb-0">
              <h3 className="text-3xl font-extrabold mb-4 tracking-tight">¿Tienes una solución experta?</h3>
              <p className="text-indigo-100 text-lg max-w-md">Únete como técnico verificado y ayuda a miles de personas mientras haces crecer tu negocio.</p>
            </div>
            
            <div className="relative z-10 flex gap-4">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-indigo-50 transition-all hover:scale-105 active:scale-95">
                Quiero colaborar
              </button>
              <button className="bg-indigo-500 text-white border-2 border-indigo-400 px-8 py-4 rounded-2xl font-bold hover:bg-indigo-400 transition-all">
                Saber más
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
