"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function InstructorCTA() {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl font-bold mb-6"
        >
          كن مدرسًا
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-xl mb-8 text-gray-600"
        >
          شارك خبرتك، وأنشئ دورات جذابة، وصل إلى الطلاب في جميع أنحاء العالم.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
            ابدأ التدريس اليوم
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
