'use client';

import { use } from 'react';
import { useParams } from 'next/navigation';
import { mockQuestions, mockAnswers, mockServices } from '@/data/mockData';
import AnswerCard from '@/components/AnswerCard';
import ServiceCard from '@/components/ServiceCard';
import ValidationBadge from '@/components/ValidationBadge';
import { MapPin, Clock, Share2, Flag, User } from 'lucide-react';
import Link from 'next/link';

export default function QuestionPage() {
  const params = useParams();
  const id = params.id as string;

  const question = mockQuestions.find(q => q.id === id);
  const answers = mockAnswers.filter(a => a.questionId === id);
  const bestAnswer = answers.find(a => a.isBestAnswer);
  const otherAnswers = answers.filter(a => !a.isBestAnswer);
  
  // Recommend services based on category (tags)
  const relatedServices = mockServices.filter(s => 
    question?.tags.includes(s.category)
  ).slice(0, 3);

  if (!question) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Pregunta no encontrada</h1>
        <Link href="/" className="text-indigo-600 font-bold hover:underline">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Question Section */}
            <article className="bg-white p-8 md:p-12 border border-gray-100 rounded-[2.5rem] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 flex gap-3 text-gray-300">
                <button className="hover:text-indigo-600 transition-colors"><Share2 size={20} /></button>
                <button className="hover:text-red-500 transition-colors"><Flag size={20} /></button>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <ValidationBadge status={bestAnswer ? 'verified' : 'pending'} />
                <span className="text-sm font-bold text-gray-400 flex items-center gap-1.5 uppercase tracking-widest">
                  <Clock size={16} /> Publicado {question.createdAt}
                </span>
                <span className="text-sm font-bold text-gray-400 flex items-center gap-1.5 uppercase tracking-widest border-l-2 border-gray-100 pl-4">
                  <MapPin size={16} /> {question.location}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
                {question.title}
              </h1>

              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 text-xs font-bold">
                  JP
                </div>
                <div className="text-gray-600 font-medium">Preguntado por <span className="text-gray-900 font-bold">{question.author}</span></div>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                {question.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {question.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 bg-slate-50 text-slate-500 rounded-xl text-sm font-bold border border-slate-100 transition-colors hover:border-indigo-100 hover:text-indigo-600 cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </article>

            {/* Answers Section */}
            <div className="space-y-8">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-3">
                  Respuestas de la comunidad <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm font-bold text-indigo-600 shadow-sm">{answers.length}</span>
                </h2>
                <div className="text-sm text-gray-400 font-bold uppercase tracking-widest">Ordenar por votos</div>
              </div>

              {bestAnswer && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <AnswerCard answer={bestAnswer} />
                </div>
              )}

              {otherAnswers.map(answer => (
                <AnswerCard key={answer.id} answer={answer} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-white p-8 border border-gray-100 rounded-[2.5rem] shadow-xl shadow-indigo-50/50 sticky top-24">
              <h3 className="text-xl font-extrabold text-gray-900 mb-6 tracking-tight flex items-center gap-2">
                Profesionales cerca <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </h3>
              
              <div className="space-y-4 mb-8">
                {relatedServices.length > 0 ? (
                  relatedServices.map(service => (
                    <ServiceCard key={service.id} service={service} compact />
                  ))
                ) : (
                  <p className="text-gray-400 text-sm italic">No hay servicios específicos registrados en esta categoría aún.</p>
                )}
              </div>

              <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl mb-8">
                <div className="flex items-center gap-2 text-indigo-600 font-extrabold uppercase tracking-widest text-xs mb-3">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" /> Tip Resolut
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Siempre revisa el porcentaje de éxito del técnico antes de contactar. Las soluciones verificadas tienen mayor probabilidad de éxito.
                </p>
              </div>

              <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-xl hover:shadow-gray-200 active:scale-[0.98]">
                Ver todos los técnicos
              </button>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-blue-500 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-indigo-100 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-1000" />
               <h4 className="text-lg font-bold mb-3 relative z-10 tracking-tight">¿No encuentras la solución?</h4>
               <p className="text-indigo-100 text-sm mb-6 opacity-90 leading-relaxed relative z-10">Sube una foto de tu problema y deja que la comunidad te ayude en tiempo real.</p>
               <Link href="/ask" className="block text-center bg-white text-indigo-600 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-all relative z-10">
                 Hacer otra pregunta
               </Link>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
