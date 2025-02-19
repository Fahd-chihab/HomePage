"use client"

import { motion } from "framer-motion"
import { BookOpen, Pen, ShoppingBag, UserCircle } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "مكتبة دورات متنوعة",
    description: "الوصول إلى مجموعة واسعة من الدورات التي أنشأها مدربون خبراء.",
  },
  {
    icon: Pen,
    title: "منصة المدونات",
    description: "شارك معرفتك ورؤيتك من خلال نظام المدونات المتكامل لدينا.",
  },
  {
    icon: ShoppingBag,
    title: "سوق رقمي",
    description: "اكتشف واشتر منتجات رقمية قيمة لتعزيز تعلمك.",
  },
  {
    icon: UserCircle,
    title: "لوحة تحكم شخصية",
    description: "تتبع تقدمك وإدارة رحلة التعلم الخاصة بك بسهولة.",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">ميزات المنصة</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 rtl"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

