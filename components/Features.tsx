"use client"

import { motion } from "framer-motion"
import { BookOpen, Pen, ShoppingBag, UserCircle } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: BookOpen,
    title: "مكتبة دورات متنوعة",
    description: "الوصول إلى مجموعة واسعة من الدورات التي أنشأها مدربون خبراء.",
    link: "#"
  },
  {
    icon: Pen,
    title: "منصة المدونات",
    description: "شارك معرفتك ورؤيتك من خلال نظام المدونات المتكامل لدينا.",
    link: "#"
  },
  {
    icon: ShoppingBag,
    title: "سوق رقمي",
    description: "اكتشف واشتر منتجات رقمية قيمة لتعزيز تعلمك.",
    link: "#"
  },
  {
    icon: UserCircle,
    title: "لوحة تحكم شخصية",
    description: "تتبع تقدمك وإدارة رحلة التعلم الخاصة بك بسهولة.",
    link: "#"
  },
]
export default function Features() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">ميزات المنصة</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link href={feature.link} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 rtl group"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <span className="text-blue-600 font-medium inline-flex items-center group-hover:gap-2 transition-all">
                  اكتشف المزيد
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
