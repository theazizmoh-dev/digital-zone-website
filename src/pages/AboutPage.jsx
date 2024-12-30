import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Logo1 from '../../public/clients-logo/1.png'
import Logo2 from '../../public/clients-logo/2.png'
import Logo3 from '../../public/clients-logo/3.png'
import Logo4 from '../../public/clients-logo/4.png'
import Logo5 from '../../public/clients-logo/5.png'
import Logo6 from '../../public/clients-logo/6.png'
import Logo7 from '../../public/clients-logo/7.png'
import Logo8 from '../../public/clients-logo/8.png'
import Logo9 from '../../public/clients-logo/9.png'
import Logo10 from '../../public/clients-logo/10.png'
import Illustration from '../../public/illustration.png'
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(preferredLanguage);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const clients = [
    { name: 'Client 1', logo: Logo1 },
    { name: 'Client 2', logo: Logo2 },
    { name: 'Client 3', logo: Logo3 },
    { name: 'Client 4', logo: Logo4 },
    { name: 'Client 5', logo: Logo5 },
    { name: 'Client 6', logo: Logo6 },
    { name: 'Client 7', logo: Logo7 },
    { name: 'Client 8', logo: Logo8 },
    { name: 'Client 9', logo: Logo9 },
    { name: 'Client 10', logo: Logo10 },
  ];

  const content = {
    en: {
      aboutUs: 'About Us',
      title: 'Making Business Simple and Efficient with ERP systems',
      description: 'At DigitalZone, we specialize in creating ERP systems that simplify how businesses operate. Based in Kuwait, we work with agencies, construction companies, medical organizations, and more to help them run smoother and more efficiently.',
      helpingBusinesses: 'Helping Businesses Work Smarter, Not Harder',
      featureDescription: 'Our ERP software brings everything together—managing finances, tracking inventory, organizing projects, document automation, and handling human resources—all in one easy-to-use platform.',
      clientsTitle: 'Clients we worked with',
      ctaTitle: 'Get Started with a 14-Day Free Trial',
      ctaDescription: 'Several Companies already using our ERP software to run their business easier',
      ctaButton: 'Get a demo',
    },
    ar: {
      aboutUs: 'حولنا',
      title: 'جعل الأعمال بسيطة وفعالة مع أنظمة ERP',
      description: 'في DigitalZone، نحن متخصصون في إنشاء أنظمة ERP التي تبسط كيفية عمل الشركات. نحن موجودون في الكويت ونعمل مع الوكالات والشركات الإنشائية والمنظمات الطبية والمزيد لمساعدتها في العمل بشكل أكثر سلاسة وكفاءة.',
      helpingBusinesses: 'مساعدتك على جعل الأعمال أكثر ذكاءً، وليس أصعب',
      featureDescription: 'يجمع برنامج ERP لدينا كل شيء معًا—إدارة الشؤون المالية، تتبع المخزون، تنظيم المشاريع، أتمتة المستندات، وإدارة الموارد البشرية—all في منصة واحدة سهلة الاستخدام.',
      clientsTitle: 'العملاء الذين عملنا معهم',
      ctaTitle: 'ابدأ مع تجربة مجانية لمدة 14 يومًا',
      ctaDescription: 'عدة شركات تستخدم بالفعل برنامج ERP الخاص بنا لتشغيل أعمالها بشكل أسهل',
      ctaButton: 'احصل على عرض تجريبي',
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className=" px-4 pt-20 text-center"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1 mb-6 text-sm bg-black text-white rounded-full"
        >
          {content[language].aboutUs}
        </motion.div>
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto"
          variants={fadeIn}
        >
          {content[language].title}
        </motion.h1>
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          variants={fadeIn}
        >
          {content[language].description}
        </motion.p>

        {/* Illustration */}
        <motion.div
          className="relative inline-block h-[300px] md:h-[400px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img
            src={Illustration}
            alt="ERP System Illustration"
            fill
            className="object-contain"
          />
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="container px-4 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {content[language].helpingBusinesses}
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-gray-600">
          <p>
            {content[language].featureDescription}
          </p>
        </div>
      </motion.section>

      {/* Clients Section */}
      <section className="container px-4 py-16">
        <motion.h2
          className="text-2xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {content[language].clientsTitle}
        </motion.h2>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                width={120}
                height={80}
                className="mx-auto"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="bg-emerald-600 rounded-lg text-white py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container w-full text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {content[language].ctaTitle}
          </motion.h2>
          <motion.p
            className="mb-8 text-emerald-50"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {content[language].ctaDescription}
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <a href="tel:+965 4144451">
            <Button className="w-48 bg-emerald-700 hover:bg-emerald-800">
              {content[language].ctaButton}
            </Button>
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
