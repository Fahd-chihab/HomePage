"use client"

import { motion } from "framer-motion"
import { BookOpen, Pen, ShoppingBag, UserCircle, Video, Users, GraduationCap, MessageCircle } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: BookOpen,
    title: "مكتبة دورات متنوعة",
    description: "دورات في التطوير الشخصي والتأهيل المهني والمواكبة المدرسية",
    link: "#",
    color: "text-[#1bacc2]"
  },
  {
    icon: Video,
    title: "محتوى تعليمي متميز",
    description: "فيديوهات مسجلة، مواد علمية، اختبارات وتطبيقات عملية",
    link: "#",
    color: "text-[#1a0f91]"
  },
  {
    icon: GraduationCap,
    title: "شهادات معتمدة",
    description: "احصل على شواهد ودبلومات معتمدة بعد إتمام الدورات",
    link: "#",
    color: "text-[#ff7c00]"
  },
  {
    icon: MessageCircle,
    title: "دعم مباشر",
    description: "مواكبة مباشرة عبر الواتساب وحصص تفاعلية عبر غوغل ميت",
    link: "#",
    color: "text-[#1bacc2]"
  },
  {
    icon: Pen,
    title: "منصة المدونات",
    description: "مقالات متخصصة في التطوير الشخصي والتأهيل المهني",
    link: "#",
    color: "text-[#ff7c00]"
  },
  {
    icon: ShoppingBag,
    title: "متجر رقمي",
    description: "كتب، برامج، العاب تدريبية، وأدوات رقمية بأسعار تنافسية",
    link: "#",
    color: "text-[#FFB027]"
  },
  {
    icon: Users,
    title: "مجتمع تعليمي",
    description: "تواصل مع المتعلمين والخبراء وشارك تجربتك التعليمية",
    link: "#",
    color: "text-[#1a0f91]"
  },
  {
    icon: UserCircle,
    title: "لوحة تحكم شخصية",
    description: "تتبع تقدمك وإدارة دوراتك ومشترياتك في مكان واحد",
    link: "#",
    color: "text-[#1bacc2]"
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a0f91] mb-4">ميزات المنصة</h2>
          <p className="text-xl text-gray-600">كل ما تحتاجه للتعلم والتطور في مكان واحد</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link href={feature.link} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 rtl group"
              >
                <feature.icon className={`w-12 h-12 ${feature.color} mb-6 group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-bold mb-3 text-[#28366a]">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <span className={`${feature.color} font-medium inline-flex items-center group-hover:gap-2 transition-all`}>
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
