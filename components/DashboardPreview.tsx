"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function DashboardPreview() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2 mb-10 lg:mb-0 rtl"
          >
            <h2 className="text-4xl font-bold mb-6">مركز التعلم الشخصي الخاص بك</h2>
            <p className="text-xl text-gray-600 mb-6">
              تتبع تقدمك، وإدارة دوراتك، والوصول إلى المحتوى المفضل لديك كله في مكان واحد.
            </p>
            <ul className="space-y-4">
              {["تتبع تقدم الدورة", "توصيات شخصية", "إدارة مقالات المدونة", "مكتبة المنتجات الرقمية"].map(
                (feature, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <svg
                      className="w-6 h-6 text-blue-600 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <Image
              src="/placeholder.svg"
              alt="معاينة لوحة التحكم"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
