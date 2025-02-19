"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { IoSchool } from "react-icons/io5"
import { PiArticleNyTimesFill } from "react-icons/pi"
import { FaStore } from "react-icons/fa"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#173664] via-blue-900 to-[#306eca]">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative container mx-auto px-4 pt-32">
        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            اكتشف عالماً من المعرفة <br />
            <span className="text-blue-300">في مكان واحد</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            منصة تعليمية متكاملة تجمع بين أفضل الدورات والمقالات والمنتجات
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: IoSchool, title: "منصة التعلم", desc: "دورات احترافية", path: "/courses", delay: 0 },
            { icon: PiArticleNyTimesFill, title: "المدونة", desc: "محتوى تعليمي", path: "/blogs", delay: 0.2 },
            { icon: FaStore, title: "المتجر", desc: "منتجات مميزة", path: "https://centredeveil.youcan.store/", delay: 0.4 }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              <Link href={item.path}>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-right border border-white/20 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <item.icon className="text-7xl text-blue-400 mb-6 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-blue-200">{item.desc}</p>
                  <motion.div 
                    className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
