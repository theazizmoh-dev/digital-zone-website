'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
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

const clients = [
  { name: { en: "Client 1", ar: "العميل 1" }, logo: Logo1 },
  { name: { en: "Client 2", ar: "العميل 2" }, logo: Logo2 },
  { name: { en: "Client 3", ar: "العميل 3" }, logo: Logo3 },
  { name: { en: "Client 4", ar: "العميل 4" }, logo: Logo4 },
  { name: { en: "Client 5", ar: "العميل 5" }, logo: Logo5 },
  { name: { en: "Client 6", ar: "العميل 6" }, logo: Logo6 },
  { name: { en: "Client 7", ar: "العميل 7" }, logo: Logo7 },
  { name: { en: "Client 8", ar: "العميل 8" }, logo: Logo8 },
  { name: { en: "Client 9", ar: "العميل 9" }, logo: Logo9 },
  { name: { en: "Client 10", ar: "العميل 10" }, logo: Logo10 },
]

export function TrustedBy() {
  const [language, setLanguage] = useState('en');
  useEffect(() => {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(preferredLanguage);
  }, []);

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-center mb-12"
        >
          {language === 'ar' ? 'موثوق من قبل مجموعة واسعة من العملاء' : 'Trusted by a wide range of clients'}
        </motion.h2>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center justify-center h-20"
              >
                <img
                  src={client.logo}
                  alt={client.name[language]}
                  className="max-h-full w-auto"
                  width={150}
                  height={80}
                  objectFit="contain"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: [0, -100 * clients.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0 w-[20%] flex items-center justify-center h-20">
                <img
                  src={client.logo}
                  alt={client.name[language]}
                  className="max-h-full w-auto"
                  width={150}
                  height={80}
                  objectFit="contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

