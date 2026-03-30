import { Star, MapPin, CheckCircle2 } from 'lucide-react';
import { Service } from '@/data/mockData';

export default function ServiceCard({ service, compact = false }: { service: Service, compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:border-indigo-200 hover:bg-white transition-all group cursor-pointer">
        <img src={service.image} alt={service.name} className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all shadow-sm" />
        <div className="flex-1">
          <div className="font-bold text-gray-900 text-sm group-hover:text-indigo-600 transition-colors">{service.name}</div>
          <div className="text-xs text-gray-500 font-medium">{service.category}</div>
        </div>
        <div className="text-right">
          <div className="text-sm font-bold text-indigo-600">{service.successRate}%</div>
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Éxito</div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white border border-gray-100 rounded-3xl hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-50 transition-all group">
      <div className="flex gap-6">
        <div className="relative">
          <img src={service.image} alt={service.name} className="w-24 h-24 rounded-3xl object-cover border-4 border-white shadow-xl" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center border-2 border-white">
            <CheckCircle2 size={16} />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{service.name}</h3>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold ring-1 ring-indigo-100">
              <Star size={12} fill="currentColor" /> {service.successRate}% éxito
            </div>
          </div>
          <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">{service.category}</div>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed italic">
            "{service.description}"
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-gray-50">
            <div className="flex items-center text-sm text-gray-500 font-medium">
              <MapPin size={16} className="mr-1 text-gray-400" />
              {service.location}
            </div>
            <button className="text-indigo-600 font-bold text-sm bg-indigo-50 px-4 py-2 rounded-xl hover:bg-indigo-600 hover:text-white transition-all">
              Contactar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
