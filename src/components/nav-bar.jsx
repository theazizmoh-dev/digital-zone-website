'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown, Menu, X, Globe } from 'lucide-react'
import Logo from '../../public/logo.png'

// Define available languages and their labels
const LANGUAGES = {
  en: { label: 'English', dir: 'ltr' },
  ar: { label: 'العربية', dir: 'rtl' }
}

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState(() => {
    // Retrieve the saved language from localStorage or default to 'en'
    return localStorage.getItem('preferredLanguage') || 'en';
  });

  // Translations for menu items (simplified example)
  const translations = {
    en: {
      solutions: 'ERP Solutions',
      hrManagement: 'HR Management',
      accounting: 'Accounting',
      documentManagement: 'Document Management',
      purchasing: 'Purchasing',
      sales:'Sales',
      about: 'About',
      getDemo: 'Get a Demo',
      language: 'Language'
    },
    ar: {
      solutions: 'الحلول ERP',
      hrManagement: 'إدارة الموارد البشرية',
      accounting: 'المحاسبة',
      documentManagement: 'إدارة المستندات',
      about: 'معلومات عنا',
      getDemo: 'احصل على عرض',
      language: 'اللغة'
    }
  }

  const t = translations[currentLang]

  const menuItems = [
    { 
      label: t.solutions, 
      dropdownItems: [t.hrManagement, t.accounting, t.documentManagement, t.purchasing, t.sales] 
    },
    { 
      label: t.about, 
      href: '/about' 
    },
    { 
      label: t.getDemo, 
      href: 'tel:+965 4144451', 
      isButton: true 
    },
  ]

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
    
    // Update the document direction based on the selected language
    document.documentElement.dir = LANGUAGES[lang].dir;
    
    // Store the language preference in localStorage
    localStorage.setItem('preferredLanguage', lang);
  
    // Refresh the page to reflect the language change
    window.location.reload();
  };

  useEffect(() => {
    document.documentElement.dir = LANGUAGES[currentLang].dir;
  },[])
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 bg-white text-gray-800 ${currentLang === 'ar' ? 'rtl' : 'ltr'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a 
            href="/" 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={Logo} alt="Logo" width={40} height={40} className="h-10 w-auto" />
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {item.dropdownItems ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="text-gray-800 hover:bg-gray-100">
                        {item.label} <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <DropdownMenuItem key={dropdownIndex}>{dropdownItem}</DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button
                    variant={item.isButton ? "default" : "ghost"}
                    className={item.isButton ? "bg-emerald-500 text-white hover:bg-emerald-600" : "text-gray-800 hover:bg-gray-100"}
                    asChild
                  >
                    <a href={item.href}>{item.label}</a>
                  </Button>
                )}
              </motion.div>
            ))}

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-800 hover:bg-gray-100">
                  <Globe className="h-4 w-4 mr-2" />
                  {LANGUAGES[currentLang].label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {Object.entries(LANGUAGES).map(([code, { label }]) => (
                  <DropdownMenuItem 
                    key={code}
                    onClick={() => handleLanguageChange(code)}
                    className={currentLang === code ? 'bg-gray-100' : ''}
                  >
                    {label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item, index) => (
                <div key={index} className="py-2">
                  {item.dropdownItems ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="w-full text-left text-gray-800 hover:bg-gray-100">
                          {item.label} <ChevronDown className="ml-1 h-4 w-4 float-right" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                          <DropdownMenuItem key={dropdownIndex}>{dropdownItem}</DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Button
                      variant={item.isButton ? "default" : "ghost"}
                      className={`w-full ${item.isButton ? "bg-emerald-500 text-white hover:bg-emerald-600" : "text-gray-800 hover:bg-gray-100"}`}
                      asChild
                    >
                      <a href={item.href}>{item.label}</a>
                    </Button>
                  )}
                </div>
              ))}

              {/* Language Selector for Mobile */}
              <div className="py-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="w-full text-left text-gray-800 hover:bg-gray-100">
                      <Globe className="h-4 w-4 mr-2 inline" />
                      {LANGUAGES[currentLang].label}
                      <ChevronDown className="ml-1 h-4 w-4 float-right" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {Object.entries(LANGUAGES).map(([code, { label }]) => (
                      <DropdownMenuItem 
                        key={code}
                        onClick={() => handleLanguageChange(code)}
                        className={currentLang === code ? 'bg-gray-100' : ''}
                      >
                        {label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}