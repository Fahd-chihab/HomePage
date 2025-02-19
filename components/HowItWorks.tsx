"use client"

import { motion } from "framer-motion"
import { UserPlus, Search, Laptop, Share } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    title: "أنشئ حسابك",
    description: "سجل وقم بإعداد ملفك الشخصي.",
  },
  {
    icon: Search,
    title: "استكشف المحتوى",
    description: "تصفح الدورات والمدونات والمنتجات الرقمية.",
  },
  {
    icon: Laptop,
    title: "تعلم وتفاعل",
    description: "خذ الدورات، اقرأ المدونات، وتفاعل مع المجتمع.",
  },
  {
    icon: Share,
    title: "شارك معرفتك",
    description: "أنشئ دوراتك الخاصة أو اكتب مقالات المدونة.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">كيف تعمل المنصة</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center rtl"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

