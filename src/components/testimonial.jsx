'use client';

import { motion } from 'framer-motion';

export function Testimonial() {
  const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';

  const testimonialText =
    preferredLanguage === 'ar'
      ? "قبل استخدام هذا البرنامج، كانت إدارة المستندات لدينا فوضى. كان إنشاء الفواتير والعقود يستغرق الكثير من الوقت ويسبب أخطاء. الآن، كل شيء أصبح أسرع وأسهل وخاليًا من الأخطاء. لقد وفر لنا ساعات أسبوعيًا، ويمكننا الآن التركيز على تنمية أعمالنا."
      : "Before using this software, managing our documents was a mess. Creating invoices and contracts used to take so much time and caused mistakes. Now, everything is faster, easier, and error-free. It's saved us hours every week, and we can focus on growing our business.";

  const name = preferredLanguage === 'ar' ? 'إسلام' : 'Islam';
  const position = preferredLanguage === 'ar' ? 'مدير في السفري' : 'Manager at Al-Safrany';

  return (
    <div className="py-16 bg-[#F8F7FF]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`max-w-3xl mx-auto px-6 text-center ${preferredLanguage === 'ar' ? 'rtl' : ''}`}
      >
        <motion.div
          className="flex justify-center space-x-1 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-emerald-500 text-emerald-500"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg italic text-gray-700 mb-6"
        >
          {testimonialText}
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{position}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
