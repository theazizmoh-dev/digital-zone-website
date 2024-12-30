'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LayoutGrid, Clock, Brain, Users } from 'lucide-react';

const benefits = [
  {
    icon: LayoutGrid,
    title: {
      en: "Simplified Operations",
      ar: "تبسيط العمليات"
    },
    description: {
      en: "Manage everything in one place for a smoother, mistake-free workflow.",
      ar: "إدارة كل شيء في مكان واحد من أجل سير عمل أكثر سلاسة وخالي من الأخطاء."
    }
  },
  {
    icon: Clock,
    title: {
      en: "Time-Saving Automation",
      ar: "التوفير في الوقت من خلال الأتمتة"
    },
    description: {
      en: "Let automation handle repetitive tasks and save you 18+ hours a week.",
      ar: "دع الأتمتة تتولى المهام المتكررة وتوفير أكثر من 18 ساعة في الأسبوع."
    }
  },
  {
    icon: Brain,
    title: {
      en: "Better Decision-Making",
      ar: "اتخاذ قرارات أفضل"
    },
    description: {
      en: "Access real-time data to make smarter, faster choices.",
      ar: "الوصول إلى البيانات في الوقت الفعلي لاتخاذ قرارات أكثر ذكاءً وسرعة."
    }
  },
  {
    icon: Users,
    title: {
      en: "Improved Teamwork",
      ar: "تحسين العمل الجماعي"
    },
    description: {
      en: "Everyone stays on the same page, making collaboration easier and faster.",
      ar: "الجميع يبقى على نفس الصفحة، مما يجعل التعاون أسهل وأسرع."
    }
  }
];

export function BenefitsSection() {
  const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black text-white text-sm font-medium px-4 py-1 rounded-full inline-block mb-4"
          >
            {preferredLanguage === 'ar' ? 'اعمل بذكاء، لا بجهد أكبر' : 'Work Smarter, Not Harder'}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-emerald-500">{preferredLanguage === 'ar' ? 'وفر أكثر من 18 ساعة' : 'Save 18+ hours'}</span> {preferredLanguage === 'ar' ? 'مع أنظمة ERP الخاصة بنا' : 'with our ERP systems'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            {preferredLanguage === 'ar' ? 
              'ماذا يمكنك أن تفعل بـ 18 ساعة إضافية كل أسبوع؟ تجعل أنظمة ERP الخاصة بنا ذلك ممكنًا عن طريق التعامل مع المهام المملة والمتكررة. فهي تنظم بياناتك، وتسرع سير عملك، وتساعد فريقك على العمل بشكل أفضل معًا.' :
              'What could you do with 18 extra hours every week? Our ERP systems make it possible by handling the boring, repetitive tasks for you. They organize your data, speed up your workflow, and help your team work better together.'
            }
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid items-center md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title.en}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="p-6 rounded-xl bg-white shadow-sm border"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <benefit.icon className="w-10 h-10 text-emerald-500 mb-4 inline" />
                <h3 className="text-lg font-semibold mb-2">{preferredLanguage === 'ar' ? benefit.title.ar : benefit.title.en}</h3>
                <p className="text-gray-600">{preferredLanguage === 'ar' ? benefit.description.ar : benefit.description.en}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a href='tel:+965 4144451'>
            <Button 
              size="lg" 
              className="bg-emerald-500 hover:bg-emerald-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {preferredLanguage === 'ar' ? 'احصل على عرض تجريبي' : 'Get a Demo'}
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
