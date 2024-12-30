'use client'

import React, { useState, useEffect } from 'react'

const Footer = () => {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(preferredLanguage);
  }, []);

  return (
    <footer className="py-6 px-4 border-t">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          {language === "ar" ? "حقوق الطبع والنشر © ديجيتال زون. جميع الحقوق محفوظة" : "Copyright © Digital Zone. All rights reserved"}
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            {language === "ar" ? "حول" : "About"}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
