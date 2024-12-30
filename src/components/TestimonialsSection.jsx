'use client'

import { motion } from "framer-motion"
import { Plus } from 'lucide-react'
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: { en: "Tolen", ar: "تولن" },
    role: { en: "Operational manager", ar: "مدير العمليات" },
    content: {
      en: "Before this software, creating documents like invoices and contracts took forever. Now, it's done in minutes, and we save so much time. It's easy to use, efficient, and lets us focus on other important work.",
      ar: "قبل هذا البرنامج، كان إنشاء المستندات مثل الفواتير والعقود يستغرق وقتًا طويلاً. الآن، يتم ذلك في دقائق، ونحن نوفر الكثير من الوقت. إنه سهل الاستخدام، وفعال، ويسمح لنا بالتركيز على أعمال أخرى مهمة."
    }
  },
  {
    name: { en: "Muhammad Rida", ar: "محمد رضا" },
    role: { en: "Co-founder", ar: "شريك مؤسس" },
    content: {
      en: "Our documents now look clean, professional, and perfectly on-brand. Clients have noticed the improvement, and it's helped us build trust. It's a simple solution that makes a huge difference for our image.",
      ar: "مستنداتنا الآن تبدو نظيفة، محترفة، ومتناسقة مع العلامة التجارية. لقد لاحظ العملاء التحسن، وساعد ذلك في بناء الثقة. إنها حل بسيط يحدث فرقًا كبيرًا في صورتنا."
    }
  },
  {
    name: { en: "Hafeez", ar: "حفيظ" },
    role: { en: "Manager", ar: "مدير" },
    content: {
      en: "Our paperwork used to slow us down. This software has automated the process and freed up hours each week. Now, we're much more productive and can focus on growing our business faster than ever.",
      ar: "كانت الأعمال الورقية تبطئنا. لقد قام هذا البرنامج بأتمتة العملية وأتاح لنا ساعات إضافية كل أسبوع. الآن، نحن أكثر إنتاجية ويمكننا التركيز على تنمية أعمالنا بشكل أسرع من أي وقت مضى."
    }
  },
  {
    name: { en: "Nida", ar: "نِدى" },
    role: { en: "Manager", ar: "مدير" },
    content: {
      en: "At first, I worried about learning new software, but this tool was so simple and clear. Our whole team picked it up quickly, and we love how smooth and intuitive it is to use every day.",
      ar: "في البداية، كنت قلقة بشأن تعلم برنامج جديد، ولكن هذه الأداة كانت بسيطة وواضحة جدًا. فريقنا بالكامل تعلم استخدامها بسرعة، ونحن نحب مدى سلاستها وبديهتها في الاستخدام اليومي."
    }
  },
  {
    name: { en: "Islam", ar: "إسلام" },
    role: { en: "Manager", ar: "مدير" },
    content: {
      en: "Before using this software, managing our documents was a mess. Creating invoices and contracts used to take so much time and caused mistakes. Now, everything is faster, easier, and error-free. It's saved us hours every week, and we can focus on growing our business.",
      ar: "قبل استخدام هذا البرنامج، كانت إدارة مستنداتنا فوضى. كان إنشاء الفواتير والعقود يستغرق وقتًا طويلاً ويسبب أخطاء. الآن، كل شيء أصبح أسرع، أسهل، وخالي من الأخطاء. لقد وفرنا ساعات كل أسبوع، ويمكننا التركيز على تنمية أعمالنا."
    }
  }
]

export default function TestimonialsSection() {
  const [language, setLanguage] = useState('en');

   useEffect(() => {
     const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
     setLanguage(preferredLanguage);
   }, []);
 

  return (
    <div className="min-h-screen bg-background">
      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-black text-white px-4 py-1.5 rounded-full text-sm mb-4">
            {language === 'ar' ? 'شهادات العملاء' : 'Testimonials'}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ar' ? 'ماذا يقول عملائنا' : 'What our clients says'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'لا تقتصر على كلمتنا. شاهد كيف أثرت Digital Zone على أعمال الشركات المختلفة، الشركات الناشئة، الوكالات'
              : "Don't just take our word for it. See how digital zone impacted the businesses of different enterprises, startups, agencies"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-transform hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-1">{testimonial.name[language]}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{testimonial.role[language]}</p>
                  <p className="text-muted-foreground">{testimonial.content[language]}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
     
    </div>
  )
}
