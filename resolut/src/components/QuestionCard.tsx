import Link from 'next/link';
import { MapPin, Clock, ChevronRight } from 'lucide-react';
import { Question } from '@/data/mockData';

export default function QuestionCard({ question }: { question: Question }) {
  const urgencyColors = {
    Baja: 'bg-green-100 text-green-700',
    Media: 'bg-yellow-100 text-yellow-700',
    Alta: 'bg-red-100 text-red-700',
  };

  return (
    <Link 
      href={`/questions/${question.id}`}
      className="block p-6 bg-white border border-gray-100 rounded-2xl hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 transition-all group"
    >
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${urgencyColors[question.urgency]}`}>
          Urgencia {question.urgency}
        </span>
        <span className="text-sm text-gray-400 flex items-center gap-1">
          <Clock size={14} /> {question.createdAt}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
        {question.title}
      </h3>
      
      <p className="text-gray-600 line-clamp-2 mb-4 leading-relaxed">
        {question.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {question.tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-500 rounded-lg text-xs font-medium border border-gray-100">
            #{tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-50">
        <div className="flex items-center text-sm text-gray-500">
          <MapPin size={16} className="mr-1 text-gray-400" />
          {question.location}
        </div>
        <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
          Ver solución <ChevronRight size={18} />
        </div>
      </div>
    </Link>
  );
}
