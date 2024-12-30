'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export function FeatureSection({ title, description, features, imageSrc, imageAlt, reversed = false }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="py-24"
    >
      <div className={`container grid gap-12 lg:grid-cols-2 lg:gap-16 items-center ${reversed ? 'lg:grid-flow-dense' : ''}`}>
        {reversed ? (
          <>
            <ContentSection title={title} description={description} features={features} />
            <ImageSection imageSrc={imageSrc} imageAlt={imageAlt} />
          </>
        ) : (
          <>
            <ImageSection imageSrc={imageSrc} imageAlt={imageAlt} />
            <ContentSection title={title} description={description} features={features} />
          </>
        )}
      </div>
    </motion.section>
  )
}

function ContentSection({ title, description, features }) {
  return (
    <div className="space-y-8">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-3xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-muted-foreground text-lg"
      >
        {description}
      </motion.p>
      <motion.ul className="space-y-4">
        {features.map((feature, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            className="flex items-center text-left gap-3 text-muted-foreground"
          >
            <Check className="h-5 w-5 text-green-500" />
            {feature}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

function ImageSection({ imageSrc, imageAlt }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="relative group"
    >
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <img
        src={imageSrc}
        alt={imageAlt}
        className="relative rounded-xl shadow-2xl border bg-background"
      />
    </motion.div>
  )
}

