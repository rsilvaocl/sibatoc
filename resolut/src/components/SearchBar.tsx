'use client';

import { useState, useEffect } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { mockQuestions } from '@/data/mockData';

export default function SearchBar({ placeholder = 'Ej: baja presión de agua en mi departamento' }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (query.trim().length > 1) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        const filtered = mockQuestions.filter(q =>
          q.title.toLowerCase().includes(query.toLowerCase()) ||
          q.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
        );
        setSuggestions(filtered);
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
      setIsLoading(false);
    }
  }, [query]);

  const handleSearch = (qid?: string) => {
    if (qid) {
      router.push(`/questions/${qid}`);
    } else if (query.trim()) {
      // In a real app, this would go to a search results page
      // For this MVP, we'll just go to the first result if available
      if (suggestions.length > 0) {
        router.push(`/questions/${suggestions[0].id}`);
      }
    }
    setQuery('');
    setSuggestions([]);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className={`relative flex items-center bg-white border-2 transition-all rounded-2xl p-1.5 ${isFocused ? 'border-indigo-500 shadow-xl shadow-indigo-50' : 'border-gray-200'}`}>
        <div className="pl-4 pr-2 text-gray-400">
          <Search size={24} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder={placeholder}
          className="w-full py-3 px-2 text-lg text-gray-800 focus:outline-none bg-transparent"
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        )}
        <button
          onClick={() => handleSearch()}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all ml-2"
        >
          Buscar
        </button>
      </div>

      {/* Suggestions Dropdown */}
      {isFocused && (query.length > 1) && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden z-40 transition-all animate-in fade-in slide-in-from-top-2">
          {isLoading ? (
            <div className="p-8 flex flex-col items-center justify-center text-gray-500">
              <Loader2 className="animate-spin mb-2" size={24} />
              <span className="text-sm">Buscando soluciones...</span>
            </div>
          ) : suggestions.length > 0 ? (
            <div className="py-2">
              <div className="px-5 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Sugerencias</div>
              {suggestions.map((q) => (
                <button
                  key={q.id}
                  onClick={() => handleSearch(q.id)}
                  className="w-full text-left px-5 py-3 hover:bg-indigo-50 flex items-start gap-3 transition-colors group"
                >
                  <Search size={18} className="text-gray-400 group-hover:text-indigo-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 leading-tight">{q.title}</div>
                    <div className="text-sm text-gray-500 mt-0.5">{q.location}</div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              No encontramos resultados exactos. Prueba con otras palabras key.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
