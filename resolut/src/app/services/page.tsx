'use client';

import { useState } from 'react';
import { mockServices } from '@/data/mockData';
import ServiceCard from '@/components/ServiceCard';
import { Search, MapPin, Filter, Star, CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('Todas');
  const [location, setLocation] = useState('');

  const categories = ['Todas', ...Array.from(new Set(mockServices.map(s => s.category)))];

  const filteredServices = mockServices.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          s.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'Todas' || s.category === category;
    const matchesLocation = !location || s.location.toLowerCase().includes(location.toLowerCase());
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        <header className="mb-16 text-center">
           <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tighter">Directorio de Servicios</h1>
           <p className="text-xl text-gray-500 font-medium">Encuentra a los mejores técnicos certificados por Resolut.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Filters */}
          <aside className="lg:col-span-3 space-y-8">
            <div className="bg-white p-8 border border-gray-100 rounded-[2.5rem] shadow-xl shadow-slate-100">
               <h3 className="text-lg font-extrabold text-gray-900 mb-6 flex items-center gap-2">
                 <Filter size={18} className="text-indigo-600" /> Filtros
               </h3>

               <div className="space-y-6">
                 <div className="space-y-3">
                   <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Categoría</label>
                   <div className="flex flex-col gap-2">
                     {categories.map(cat => (
                       <button
                         key={cat}
                         onClick={() => setCategory(cat)}
                         className={`text-left px-4 py-2.5 rounded-xl font-bold transition-all ${category === cat ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-slate-50 text-gray-600 hover:bg-slate-100'}`}
                       >
                         {cat}
                       </button>
                     ))}
                   </div>
                 </div>

                 <div className="space-y-3">
                   <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Ubicación</label>
                   <div className="relative">
                     <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                     <input
                       type="text"
                       placeholder="Buscar ciudad..."
                       className="w-full pl-11 pr-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm focus:outline-none focus:border-indigo-500 transition-all shadow-inner"
                       value={location}
                       onChange={(e) => setLocation(e.target.value)}
                     />
                   </div>
                 </div>

                 <div className="p-6 bg-indigo-50 border border-indigo-100 rounded-[2rem]">
                   <div className="flex items-center gap-2 mb-2">
                     <Star size={16} fill="currentColor" className="text-indigo-600" />
                     <span className="text-xs font-black text-indigo-700 uppercase tracking-wider">Resolut Pro</span>
                   </div>
                   <p className="text-[11px] text-indigo-500 font-medium leading-relaxed">
                     Los técnicos con insignia Pro tienen un porcentaje de éxito superior al 95%.
                   </p>
                 </div>
               </div>
            </div>
          </aside>

          {/* Service List */}
          <main className="lg:col-span-9 space-y-8">
            <div className="relative mb-10 group">
              <Search size={22} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-indigo-600 transition-colors" />
              <input
                type="text"
                placeholder="Busca por nombre o especialidad..."
                className="w-full pl-16 pr-8 py-5 bg-white border-2 border-slate-100 rounded-[2rem] text-lg focus:outline-none focus:border-indigo-500 shadow-xl shadow-slate-100/50 transition-all font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between mb-8 px-4">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Mostrando <span className="text-gray-900">{filteredServices.length}</span> resultados
              </div>
            </div>

            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredServices.map(service => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center bg-white border border-dashed border-gray-200 rounded-[3rem]">
                <div className="w-20 h-20 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search size={40} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">No encontramos nada</h3>
                <p className="text-gray-500 font-medium">Intenta limpiar los filtros o buscar con otras palabras.</p>
                <button
                   onClick={() => {setSearchTerm(''); setCategory('Todas'); setLocation('');}}
                   className="mt-8 text-indigo-600 font-black hover:underline px-6 py-2"
                >
                  Reiniciar filtros
                </button>
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
}
