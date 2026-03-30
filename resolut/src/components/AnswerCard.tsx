'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, ThumbsUp, ThumbsDown, User, ShieldCheck } from 'lucide-react';
import { Answer } from '@/data/mockData';

export default function AnswerCard({ answer }: { answer: Answer }) {
  const [worked, setWorked] = useState(answer.workedCount);
  const [notWorked, setNotWorked] = useState(answer.notWorkedCount);
  const [userVoted, setUserVoted] = useState<null | 'worked' | 'notWorked'>(null);

  const handleVote = (type: 'worked' | 'notWorked') => {
    if (userVoted === type) return;
    
    if (type === 'worked') {
      setWorked(prev => prev + 1);
      if (userVoted === 'notWorked') setNotWorked(prev => prev - 1);
    } else {
      setNotWorked(prev => prev + 1);
      if (userVoted === 'worked') setWorked(prev => prev - 1);
    }
    setUserVoted(type);
  };

  return (
    <div className={`p-8 bg-white border border-gray-100 rounded-3xl transition-all ${answer.isBestAnswer ? 'ring-2 ring-indigo-500 shadow-xl shadow-indigo-50' : 'hover:shadow-lg'}`}>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
            <User size={20} />
          </div>
          <div>
            <div className="font-bold text-gray-900">{answer.author}</div>
            <div className="text-xs text-indigo-600 font-semibold uppercase tracking-wider">Técnico Verificado</div>
          </div>
        </div>
        {answer.isBestAnswer && (
          <div className="flex items-center gap-1.5 px-4 py-1.5 bg-indigo-600 text-white rounded-full text-xs font-bold shadow-lg shadow-indigo-200">
            <ShieldCheck size={14} /> MEJOR RESPUESTA
          </div>
        )}
      </div>

      <div className="space-y-8">
        <section>
          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
            <div className="w-1 h-4 bg-indigo-500 rounded-full" />
            Causa Raíz
          </h4>
          <p className="text-lg text-gray-800 leading-relaxed italic">
            "{answer.cause}"
          </p>
        </section>

        <section>
          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <div className="w-1 h-4 bg-indigo-500 rounded-full" />
            Pasos a seguir
          </h4>
          <div className="space-y-4">
            {answer.steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-10 pt-8 border-t border-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1.5 rounded-lg border border-green-100">
            <CheckCircle size={18} />
            <span className="font-bold text-sm">{worked} <span className="font-normal text-xs text-green-500 uppercase tracking-tight ml-1">Éxitos</span></span>
          </div>
          <div className="flex items-center gap-2 text-red-600 bg-red-50 px-3 py-1.5 rounded-lg border border-red-100">
            <XCircle size={18} />
            <span className="font-bold text-sm">{notWorked} <span className="font-normal text-xs text-red-500 uppercase tracking-tight ml-1">Fallos</span></span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => handleVote('worked')}
            disabled={userVoted === 'worked'}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-all shadow-sm ${userVoted === 'worked' ? 'bg-green-600 text-white cursor-default' : 'bg-white border-2 border-gray-100 text-gray-700 hover:border-indigo-500 hover:text-indigo-600 active:scale-95'}`}
          >
            <ThumbsUp size={18} /> {userVoted === 'worked' ? '¡Me funcionó!' : 'Me funcionó'}
          </button>
          <button 
            onClick={() => handleVote('notWorked')}
            disabled={userVoted === 'notWorked'}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-all shadow-sm ${userVoted === 'notWorked' ? 'bg-red-600 text-white cursor-default' : 'bg-white border-2 border-gray-100 text-gray-700 hover:border-indigo-500 hover:text-indigo-600 active:scale-95'}`}
          >
            <ThumbsDown size={18} /> {userVoted === 'notWorked' ? 'No me funcionó' : 'No funcionó'}
          </button>
        </div>
      </div>
    </div>
  );
}
