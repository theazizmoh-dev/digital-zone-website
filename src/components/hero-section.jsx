import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Img from '../../public/hero section img.png'

export function HeroSection() {
  const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';


  const content = {
    en: {
      title: "Run your business smarter with all-in-one ERP system",
      description:
        "Take control of your business with our all-in-one ERP software. Designed to simplify your work, it combines everything you need—HR, accounting, sales, purchasing, and document management—in one easy-to-use platform.",
      button: "Get a Demo",
      note: "Try for 14 days for free",
    },
    ar: {
      title: "قم بإدارة عملك بذكاء مع نظام ERP شامل",
      description:
        "تحكم في عملك باستخدام برنامج ERP الشامل الخاص بنا. مصمم لتبسيط عملك، يجمع بين كل ما تحتاجه - الموارد البشرية، المحاسبة، المبيعات، المشتريات، وإدارة المستندات - في منصة سهلة الاستخدام.",
      button: "احصل على عرض تجريبي",
      note: "جربه لمدة 14 يومًا مجانًا",
    },
  };

  const langContent = content[preferredLanguage];

  return (
    <div className="mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {langContent.title}
        </motion.h1>
        
        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {langContent.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="tel:+965 4144451">
            <Button 
              size="lg" 
              className="bg-emerald-500 hover:bg-emerald-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {langContent.button}
            </Button>
          </a>
          <p className="text-sm text-gray-500 mt-4">{langContent.note}</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <motion.img
          src={Img}
          alt={preferredLanguage === 'en' ? "ERP Software Interface" : "واجهة برنامج ERP"}
          className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
}
