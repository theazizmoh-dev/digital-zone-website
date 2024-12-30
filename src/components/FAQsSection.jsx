'use client'

import { motion } from "framer-motion"
import { Plus } from 'lucide-react'
import { useState, useEffect } from "react"

const FAQsSection = () => {
  const [openFaq, setOpenFaq] = useState(null)
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(preferredLanguage);
  }, []);

  const faqs = [
    {
      question: {
        en: "What is an ERP system, and how can it benefit my business?",
        ar: "ما هو نظام ERP، وكيف يمكن أن يفيد عملي؟"
      },
      answer: {
        en: "An ERP system is a comprehensive business management solution that integrates various processes and departments. It can streamline operations, improve efficiency, and provide real-time insights for better decision-making.",
        ar: "نظام ERP هو حل شامل لإدارة الأعمال يدمج العمليات والأقسام المختلفة. يمكن أن يبسط العمليات، يحسن الكفاءة، ويوفر رؤى حية لاتخاذ قرارات أفضل."
      }
    },
    {
      question: {
        en: "How long does it take to implement the ERP system?",
        ar: "كم من الوقت يستغرق تنفيذ نظام ERP؟"
      },
      answer: {
        en: "Implementation time varies depending on your business size and requirements. Typically, it takes 2-4 months for small businesses and 4-8 months for larger organizations.",
        ar: "وقت التنفيذ يختلف حسب حجم عملك ومتطلباته. عادةً ما يستغرق من 2 إلى 4 أشهر للشركات الصغيرة ومن 4 إلى 8 أشهر للمنظمات الأكبر."
      }
    },
    {
      question: {
        en: "How secure is the data stored in your ERP system?",
        ar: "ما مدى أمان البيانات المخزنة في نظام ERP الخاص بك؟"
      },
      answer: {
        en: "We implement industry-standard security measures including encryption, regular backups, and access controls to ensure your data is protected at all times.",
        ar: "نحن ننفذ تدابير الأمان القياسية في الصناعة بما في ذلك التشفير، النسخ الاحتياطية المنتظمة، وضوابط الوصول لضمان حماية بياناتك في جميع الأوقات."
      }
    },
    {
      question: {
        en: "Is your ERP system customizable to meet my business's specific needs?",
        ar: "هل يمكن تخصيص نظام ERP الخاص بك لتلبية احتياجات عملي المحددة؟"
      },
      answer: {
        en: "Yes, our ERP system is highly customizable. We can tailor the features and workflows to match your specific business requirements and processes.",
        ar: "نعم، نظام ERP لدينا قابل للتخصيص بشكل كبير. يمكننا تخصيص الميزات وسير العمل لتناسب متطلبات وعمليات عملك المحددة."
      }
    }
  ]

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-block bg-black text-white px-4 py-1.5 rounded-full text-sm mb-4">
          {language === "ar" ? "الأسئلة الشائعة في Digital Zone" : "Digital Zone FAQ"}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          {language === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-4"
          >
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="w-full text-left p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex justify-between items-center"
            >
              <span className="font-medium">{language === "ar" ? faq.question.ar : faq.question.en}</span>
              <Plus
                className={`transform transition-transform ${openFaq === index ? "rotate-45" : ""}`}
              />
            </button>
            <motion.div
              initial={false}
              animate={{
                height: openFaq === index ? "auto" : 0,
                opacity: openFaq === index ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-white px-4"
            >
              <div className="py-4">{language === "ar" ? faq.answer.ar : faq.answer.en}</div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FAQsSection
