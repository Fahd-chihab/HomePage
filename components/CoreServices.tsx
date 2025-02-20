"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Button from "@/components/Button"

type ButtonShape = "glossyBlue" | "glossy" | "glossyOrange" | "round"

interface Service {
  title: string[]
  colors: string[]
  description: string
  subDescription?: string
  image: string
  link: string
  buttonStyle: ButtonShape
  buttonText: string
}

const services: Service[] = [
  {
    title: ["مدونـــة", "الصـــحـــوة"],
    colors: ["text-[#1a0f91]", "text-[#ff7c00]"],
    description: "مدونة متخصصة في مواضيع التطوير الشخصي والتأهيل المهني و المواكبة المدرسية و الأسرية و التخطيط المالي وريادة الاعمال (خدمة مجانية)",
    image: "/blog-section/blog-image.svg",
    link: "/blogs",
    buttonStyle: "glossyBlue",
    buttonText: "تصفح المـدونـــة"
  },
  {
    title: ["منصة", "الصحـوة", "للـتعلــم"],
    colors: ["text-[#1a0f91]", "text-[#1bacc2]", "text-[#1a0f91]"],
    description: "منصة للتعلم الذاتي تحتوي على فيديوهات مسجلة، مواد علمية، اختبارات، تطبيقات، شواهد ودبلومات، مواكبة مباشرة عبر الواتساب و حصص مباشرة عبر غووغل ميت",
    subDescription: "خدمة منها المجاني وومنها المدفوع برسوم جد جد محفزة",
    image: "/learning-section/learning-image.svg",
    link: "#",
    buttonStyle: "glossy",
    buttonText: "إبدأ الأن"
  },
  {
    title: ["متــــجر", "الصــحوة"],
    colors: ["text-[#1a0f91]", "text-[#ff7c00]"],
    description: "متجر الموارد الرقمية والمنتجات المتخصصة : اصداراتنا من الكتب والبرامج، العاب تدريبية،مواد علمية + ادوات رقمية و تطبيقات رقمية",
    subDescription: "خدمة مدفوعة بأثمنة تنافسية",
    image: "/shoping-section/shopping-image.svg",
    link: "https://centredeveil.youcan.store/",
    buttonStyle: "glossyOrange",
    buttonText: "تصفح المنتجات"
  }
]

export default function CoreServices() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-[#1a0f91] text-center mb-16">
          خدماتنا الرئيسية
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-center gap-2 text-3xl font-bold mb-6">
                  {service.title.map((word, i) => (
                    <span key={i} className={service.colors[i]}>{word}</span>
                  ))}
                </div>
                
                <div className="flex justify-center mb-6">
                  <Image
                    src={service.image}
                    width={300}
                    height={300}
                    alt="Service illustration"
                    className="h-56 w-auto object-contain"
                  />
                </div>
                
                <div className="text-center space-y-4">
                  <p className="text-[#28366a] text-lg">{service.description}</p>
                  {service.subDescription && (
                    <p className={`text-lg ${
                      service.buttonStyle === "glossy" ? "text-[#0991c2]" : "text-[#FFB027]"
                    }`}>
                      {service.subDescription}
                    </p>
                  )}
                  
                  <Link href={service.link} className="block">
                    <Button
                      shape={service.buttonStyle as ButtonShape}
                      className="w-full rounded-[36px] px-6 py-3 font-bold text-white"
                    >
                      {service.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
