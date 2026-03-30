import Link from 'next/link';
import { Search, PlusCircle, Hammer } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-gray-900">Resolut</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">Inicio</Link>
          <Link href="/ask" className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-1">
            <PlusCircle size={18} /> Preguntar
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-1">
            <Hammer size={18} /> Servicios
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-indigo-600 md:hidden">
            <Search size={22} />
          </button>
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition-all shadow-sm hover:shadow-indigo-100">
            Ingresar
          </button>
        </div>
      </div>
    </header>
  );
}
