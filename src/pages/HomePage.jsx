import React from 'react';
import { HeroSection } from '../components/hero-section';
import { TrustedBy } from '../components/trusted-by';
import { Testimonial } from '../components/testimonial';
import { BenefitsSection } from '../components/benefits-section';
import { motion } from 'framer-motion';
import { FeatureSection } from '../components/FeatureSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQsSection from '../components/FAQsSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import Accounting from '../../public/module-screenshots/acc.png';
import Documents from '../../public/module-screenshots/Documents.png';

const HomePage = () => {
  // Get the user's preferred language (either 'en' or 'ar')
  const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';

  return (
    <div>
      <HeroSection />
      <TrustedBy />
      <Testimonial />
      <BenefitsSection />
      
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black text-white text-sm font-medium px-4 py-1 rounded-full inline-block mb-4"
          >
            {preferredLanguage === 'ar' ? 'لماذا نحن؟' : 'Why us?'}
          </motion.div>
          <h1 className="mt-4 text-4xl font-bold">
            {preferredLanguage === 'ar' ? 'أنظمة ERP ليست كلها متشابهة' : 'Not All ERP systems are the same'}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {preferredLanguage === 'ar'
              ? 'أن برامج ERP الخاصة بنا تتميز بأدوات لإدارة الموارد البشرية والمحاسبة والمبيعات والمزيد، مصممة لتناسب أعمالك. وفر الوقت، تجنب الأخطاء، وتوسع بسهولة - اختر ERP يناسبك.'
              : 'Not all ERP systems are the same. Our software stands out with tools for HR, accounting, sales, and more, designed to fit your business. Save time, avoid mistakes, and grow with ease—choose an ERP that works for you.'}
          </p>
        </div>

        <FeatureSection
          title={preferredLanguage === 'ar' ? "الموارد البشرية" : "Human Resources"}
          description={preferredLanguage === 'ar'
            ? "بسيط إدارة الموظفين. تتبع الحضور بسهولة، إدارة الرواتب، وتبسيط التوظيف، بينما تحافظ على فريقك متفاعلًا ومنظمًا."
            : "Simplify employee management. Easily track attendance, manage payroll, and streamline recruitment, all while keeping your team engaged and organized."}
          features={[
            preferredLanguage === 'ar' 
              ? "مركزي بيانات الموظفين مع الوصول السهل إلى التفاصيل الشخصية، تاريخ العمل، ومراجعات الأداء"
              : "Centralize employee data with easy access to personal details, job history, and performance reviews",
            preferredLanguage === 'ar'
              ? "أتمتة الرواتب والمدفوعات لضمان تعويض دقيق وفي الوقت المحدد"
              : "Automate payroll and payments to ensure timely and accurate compensation"
          ]}
          imageSrc={Documents}
          imageAlt={preferredLanguage === 'ar' ? "لوحة معلومات الموارد البشرية" : "HR Dashboard"}
        />

        <FeatureSection
          title={preferredLanguage === 'ar' ? "المحاسبة" : "Accounting"}
          description={preferredLanguage === 'ar'
            ? "ابق على اطلاع مالياً مع رؤى في الوقت الفعلي. تجعل وحدة المحاسبة لدينا الفواتير، والميزانية، والتقارير المالية سهلة، مما يساعدك على اتخاذ قرارات تجارية أذكى."
            : "Stay on top of your finances with real-time insights. Our accounting module makes invoicing, budgeting, and financial reporting easy, helping you make smarter business decisions."}
          features={[
            preferredLanguage === 'ar'
              ? "تنظيم بياناتك المالية مع هيكل واضح، مما يسهل إدارة وتتبع جميع الحسابات"
              : "Organize your financial data with a clear structure, making it easy to manage and track all accounts",
            preferredLanguage === 'ar'
              ? "احتفظ بجميع المعاملات في مكان واحد، مما يضمن حفظ السجلات بدقة وشفافية مالية"
              : "Keep all transactions in one place, ensuring accurate record keeping and financial transparency",
            preferredLanguage === 'ar'
              ? "إنشاء وإرسال وتتبع الفواتير بسهولة، مما يضمن المدفوعات في الوقت المحدد والفوترة السلسة"
              : "Create, send, and track invoices effortlessly, ensuring timely payments and seamless billing",
            preferredLanguage === 'ar'
              ? "تبسيط عملية تتبع المدفوعات والإيصالات مع إدارة القسائم التلقائية من أجل التوفيق السهل"
              : "Simplify the process of tracking payments and receipts with automated voucher management for easy reconciliation"
          ]}
          imageSrc={Accounting}
          imageAlt={preferredLanguage === 'ar' ? "لوحة معلومات المحاسبة" : "Accounting Dashboard"}
          reversed={true}
        />

        <FeatureSection
          title={preferredLanguage === 'ar' ? "المشتريات" : "Purchasing"}
          description={preferredLanguage === 'ar'
            ? "تبسيط عملية الشراء لديك مع وحدة الشراء الشاملة. من الطلبات إلى إدارة الموردين، لدينا الأدوات التي تجعل الطلب والتتبع والدفع أمرًا سهلاً."
            : "Streamline your procurement process with our comprehensive purchasing module. From requisitions to vendor management, we've got you covered with tools that make ordering, tracking, and paying easy."}
          features={[
            preferredLanguage === 'ar'
              ? "سرع عملية الشراء من خلال خطوات الموافقة التلقائية، مما يقلل العمل اليدوي ويضمن إنجاز كل شيء بشكل صحيح"
              : "Speed up the purchasing process with automatic approval steps, reducing manual work and ensuring everything is done correctly"
          ]}
          imageSrc="/placeholder.svg?height=400&width=600"
          imageAlt={preferredLanguage === 'ar' ? "واجهة المشتريات" : "Purchasing Interface"}
        />

        <FeatureSection
          title={preferredLanguage === 'ar' ? "أتمتة الوثائق" : "Document Automation"}
          description={preferredLanguage === 'ar'
            ? "بسيط إدارة الوثائق. تحسين سير العمل الوثائق. من العروض إلى العقود - كل شيء منظم وآلي، مما يقلل من المهام اليدوية ويعزز الكفاءة في جميع أنحاء شركتك."
            : "Simplify document management. Improve workflow documents. From Quotes to Contracts — Everything Organized and Automated, reducing manual tasks and boosting efficiency across your company."}
          features={[
            preferredLanguage === 'ar'
              ? "ملء العقود والفواتير والوثائق الأخرى تلقائيًا باستخدام القوالب المدخلة والبيانات المحددة مسبقًا"
              : "Automatically file out contracts, invoices, and other documents using your predefined templates and data inputs",
            preferredLanguage === 'ar'
              ? "تنظيم وتصنيف الوثائق الخاصة بك في مجلدات وسير عمل مخصصة للوصول السهل"
              : "Organize and categorize your documents into custom folders and workflows for easy access"
          ]}
          imageSrc={Documents}
          imageAlt={preferredLanguage === 'ar' ? "نظام إدارة الوثائق" : "Document Management System"}
          reversed={true}
        />
        


        <FeatureSection
          title={preferredLanguage === 'ar' ? "أتمتة الوثائق" : "Warehouse"}
          description={preferredLanguage === 'ar'
            ? "بسيط إدارة الوثائق. تحسين سير العمل الوثائق. من العروض إلى العقود - كل شيء منظم وآلي، مما يقلل من المهام اليدوية ويعزز الكفاءة في جميع أنحاء شركتك."
            : "Keep inventory under control with ease. Our warehouse module offers real-time stock tracking, automated reorder alerts, and smooth coordination, ensuring you never run out of what you need."}
          features={[
            preferredLanguage === 'ar'
              ? "ملء العقود والفواتير والوثائق الأخرى تلقائيًا باستخدام القوالب المدخلة والبيانات المحددة مسبقًا"
              : "Manage and organize your inventory with ease, keeping track of product details and stock levels in real-time.",
            preferredLanguage === 'ar'
              ? "تنظيم وتصنيف الوثائق الخاصة بك في مجلدات وسير عمل مخصصة للوصول السهل"
              : "Track the flow of goods coming in and going out of your warehouse, ensuring accurate stock levels and smooth operations.".
              preferredLanguage === 'ar'
              ? "ملء العقود والفواتير والوثائق الأخرى تلقائيًا باستخدام القوالب المدخلة والبيانات المحددة مسبقًا"
              : "Easily manage and record the movement of products within the warehouse, helping optimize storage and efficiency.",
            preferredLanguage === 'ar'
              ? "تنظيم وتصنيف الوثائق الخاصة بك في مجلدات وسير عمل مخصصة للوصول السهل"
              : "Get automated alerts when stock is low, helping you stay ahead of inventory needs and avoid running out."
          ]}
          imageSrc={Documents}
          imageAlt={preferredLanguage === 'ar' ? "نظام إدارة الوثائق" : "Document Management System"}

        />

<FeatureSection
          title={preferredLanguage === 'ar' ? "أتمتة الوثائق" : "Sales"}
          description={preferredLanguage === 'ar'
            ? "بسيط إدارة الوثائق. تحسين سير العمل الوثائق. من العروض إلى العقود - كل شيء منظم وآلي، مما يقلل من المهام اليدوية ويعزز الكفاءة في جميع أنحاء شركتك."
            : "Tracks leads, manages opportunities, and automates follow-ups, helping your team close deals faster and increase revenue."}
          features={[
            preferredLanguage === 'ar'
              ? "ملء العقود والفواتير والوثائق الأخرى تلقائيًا باستخدام القوالب المدخلة والبيانات المحددة مسبقًا"
              : "Easily create, track, and manage purchase orders to ensure timely delivery and reduce mistakes.",
            preferredLanguage === 'ar'
              ? "تنظيم وتصنيف الوثائق الخاصة بك في مجلدات وسير عمل مخصصة للوصول السهل"
              : "Organize and categorize your documents into custom folders and workflows for easy access.".
              preferredLanguage === 'ar'
              ? "ملء العقود والفواتير والوثائق الأخرى تلقائيًا باستخدام القوالب المدخلة والبيانات المحددة مسبقًا"
              : "Create and modify templates for quotes, invoices, and contracts, tailored to your specific business needs.",
            preferredLanguage === 'ar'
              ? "تنظيم وتصنيف الوثائق الخاصة بك في مجلدات وسير عمل مخصصة للوصول السهل"
              : "Automatically generate and send invoices based on your contracts and quotes in just simple easy steps"
          ]}
          imageSrc={Documents}
          imageAlt={preferredLanguage === 'ar' ? "نظام إدارة الوثائق" : "Document Management System"}
          reversed={true}
        />
        
      </div>
      
      <TestimonialsSection />
      <FAQsSection />
      <FinalCTA />
    </div>
  );
};

export default HomePage;
