import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#0d89b1] mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sahifa topilmadi
          </h2>
          <p className="text-lg text-gray-600">
            Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki o'chirilgan.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0d89b1] text-white rounded-lg hover:bg-[#0a6d8f] transition-colors font-semibold shadow-lg"
          >
            <Home size={20} />
            Bosh sahifaga
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-semibold border border-gray-300"
          >
            <ArrowLeft size={20} />
            Orqaga
          </button>
        </div>
      </div>
    </div>
  );
}
