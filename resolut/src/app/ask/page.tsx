'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutGrid, Send, MapPin, AlertCircle, CheckCircle } from 'lucide-react';

export default function AskPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    urgency: 'Media'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center p-12 bg-white border border-gray-100 rounded-[3rem] shadow-2xl shadow-green-50 animate-in zoom-in-95 duration-500">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <CheckCircle size={40} strokeWidth={3} />
          </div>
          <h1 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">¡Pregunta publicada!</h1>
          <p className="text-gray-500 font-medium mb-8 leading-relaxed">
            Tu consulta ya está disponible para que la comunidad y técnicos expertos puedan responderte. Serás redirigido pronto.
          </p>
          <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-green-500 h-full animate-[progress_2s_linear]" />
          </div>
          <style jsx>{`
            @keyframes progress {
              from { width: 0%; }
              to { width: 100%; }
            }
          `}</style>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Describe tu problema</h1>
        <p className="text-xl text-gray-500 leading-relaxed max-w-2xl font-medium">
          Danos detalles para que un experto pueda darte la mejor solución estructurada paso a paso.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-10 md:p-14 border border-gray-100 rounded-[3rem] shadow-xl shadow-slate-100">
        
        <div className="space-y-3">
          <label className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> Título Clarificador
          </label>
          <input
            type="text"
            required
            placeholder="Ej: El motor del portón eléctrico hace ruido pero no abre"
            className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-lg text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all shadow-inner"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>

        <div className="space-y-3">
          <label className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> Detalles del problema
          </label>
          <textarea
            required
            rows={5}
            placeholder="¿Qué pasó? ¿Cuándo empezó? ¿Qué has intentado hasta ahora?"
            className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-lg text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all shadow-inner resize-none"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <MapPin size={14} className="text-indigo-500" /> Ubicación
            </label>
            <input
              type="text"
              required
              placeholder="Ej: Santiago, La Florida"
              className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all shadow-inner"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>

          <div className="space-y-3">
            <label className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <AlertCircle size={14} className="text-red-500" /> Urgencia
            </label>
            <select
              className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-gray-900 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all shadow-inner appearance-none cursor-pointer"
              value={formData.urgency}
              onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
            >
              <option value="Baja">Baja - Puede esperar</option>
              <option value="Media">Media - Molesto pero manejable</option>
              <option value="Alta">Alta - Problema crítico</option>
            </select>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-50">
          <p className="text-gray-400 text-sm font-medium italic">
            Al publicar, aceptas los términos de ayuda comunitaria de Resolut.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full md:w-auto px-12 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-2xl transition-all active:scale-95 ${isSubmitting ? 'bg-indigo-400 cursor-not-allowed text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-100 hover:shadow-indigo-200'}`}
          >
            {isSubmitting ? (
              <>Cargando...</>
            ) : (
              <>Publicar pregunta <Send size={20} /></>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
