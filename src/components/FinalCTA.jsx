'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const FinalCTA = () => {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(preferredLanguage);
  }, []);

  return (
    <section className="relative py-16 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-4xl mx-auto text-center text-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {language === "ar" ? "ابدأ مع\nتجربة مجانية لمدة 14 يومًا" : "Get Started with\n a 14-Day Free Trial"}
        </h2>
        <p className="mb-8">
          {language === "ar" ? "عدة شركات تستخدم بالفعل برنامج ERM لدينا لتسهيل أعمالهم" : "Several Companies already using our ERM software to run their business easier"}
        </p>
        <a href='tel:+965 4144451'>
          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-emerald-600 hover:bg-gray-100"
          >
            {language === "ar" ? "احصل على عرض تجريبي" : "Get a Demo"}
          </Button>
        </a>
      </motion.div>
    </section>
  )
}

export default FinalCTA
