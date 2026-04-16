import { Calendar, Clock, Download, FileText, Loader2, Info, BookOpen, Coffee, Home, ChevronRight, Edit3 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { admissionService } from '../services/admissionService';
import { AdmissionDocument } from '../types';
import { Link } from 'react-router';

export function SchedulePage() {
  const { t, i18n } = useTranslation();
  const [documents, setDocuments] = useState<AdmissionDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const data = await admissionService.getAdmissionDocuments();
        setDocuments(data);
      } catch (error) {
        console.error('Error fetching admission documents:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  // Find the specific schedule document from API
  const scheduleDocs = documents.filter(doc => {
    const trans = admissionService.getTranslation(doc, 'uz');
    return trans.document_name.toLowerCase().includes('dars jadvali');
  });

  const courses = [
    { id: 1, name: '1-kurs', file: scheduleDocs[0]?.document_file },
    { id: 2, name: '2-kurs', file: scheduleDocs[1]?.document_file || scheduleDocs[0]?.document_file },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <Loader2 className="w-12 h-12 text-[#0d89b1] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm font-medium">
            <Link to="/" className="text-gray-500 hover:text-[#0d89b1] transition-colors flex items-center gap-1">
              <Home size={16} />
              <span>{t('nav.home')}</span>
            </Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-gray-900 dark:text-white font-bold">{t('nav.schedule')}</span>
          </nav>
        </div>
      </div>

      {/* Page Title */}
      <div className="py-12 md:py-16 text-center border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tight"
          >
            O'QUVCHILARNING DARS JADVALI
          </motion.h1>
        </div>
      </div>

      {/* Schedule List */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={course.file || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all group"
                >
                  <span className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight">
                    {course.name}
                  </span>
                  <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm group-hover:bg-[#0d89b1] group-hover:text-white transition-colors">
                    <Edit3 size={20} className="text-gray-400 group-hover:text-white" />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
