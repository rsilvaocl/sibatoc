import { CheckCircle2, AlertCircle, Clock } from 'lucide-react';

export default function ValidationBadge({ status }: { status: 'verified' | 'pending' | 'community' }) {
  const configs = {
    verified: {
      icon: <CheckCircle2 size={14} />,
      text: 'Solución Verificada',
      className: 'bg-green-100 text-green-700 border-green-200'
    },
    pending: {
      icon: <Clock size={14} />,
      text: 'En Validación',
      className: 'bg-yellow-100 text-yellow-700 border-yellow-200'
    },
    community: {
      icon: <AlertCircle size={14} />,
      text: 'Validado por Comunidad',
      className: 'bg-indigo-100 text-indigo-700 border-indigo-200'
    }
  };

  const config = configs[status];

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-sm ${config.className}`}>
      {config.icon}
      {config.text}
    </div>
  );
}
