"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function InstructorCTA() {
  return (
    <section className="py-20 bg-blue-900 text-white">
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
          className="text-xl mb-8"
        >
          شارك خبرتك، وأنشئ دورات جذابة، وصل إلى الطلاب في جميع أنحاء العالم.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
            ابدأ التدريس اليوم
          </Button>
        </motion.div>
      </div>
    </section>  )
}

