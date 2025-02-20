"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Award, Lightbulb, Star } from "lucide-react"

const requirements = [
  {
    icon: Award,
    title: "الكفاءة العالية في التخصص",
    description: "خبرة متميزة في المجال التعليمي"
  },
  {
    icon: Star,
    title: "التميز",
    description: "مستوى عالي من الاحترافية"
  },
  {
    icon: Lightbulb,
    title: "الإبداع",
    description: "نهج مبتكر في التعليم"
  }
]

const features = [
  "هوية رقمية",
  "منصة محاضرات مدفوعة باسمك او باسم برنامجك",
  "وحدة تخزين",
  "اعداد عروض وبرامج تحت الطلب",
  "تصميم الاعلانات والنصوص الإعلانية",
  "التسويق للهوية او البرنامج حسب الطلب",
  "صفحات هبوط تعريفية خاصة بهويتك او برنامجك",
  "منصة تعلم رقمي باسم هويتك",
  "دعم فني وتقني"
]

export default function InstructorCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            كن مدرباً رقمياً محترفاً
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8 rtl">
              <div className="bg-blue-50 p-8 rounded-lg border-r-4 border-blue-600">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">هل أنت...</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  انا مدرب او استاذ وامتلك كفاءة عالية من حيث المعرفة او التخصص التربوي او التخصص في مجال التدريب واريد ان اقدم برامج تخصني بشكل احترافي يواكب التطور
                </p>
                {/* <div className="mt-4 text-xl font-semibold text-blue-700">
                    اريد ان اصبح استاذ او مدرب رقمي
                  </div> */}
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-4">نحن نقدم لك...</h3>
                <p className="text-lg leading-relaxed">
                  أكاديمية الصحوة الدولية تقدم لك باقة متكاملة ستجعل حضورك في عالم الانترنيت حضور احترافي حيث سنقدم لك منصات وادوات رقمية ستصبح من خلالها حاضرا وبقوة في ميدانك وتخصصك
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-8 text-center"
        >
          نحتاج منك فقط الشروط التالية:
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {requirements.map((req, index) => (<motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg shadow-lg text-center rtl"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <req.icon className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{req.title}</h3>
            <p className="text-gray-600">{req.description}</p>
          </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 rounded-lg shadow-lg rtl"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">باقتنا المتكاملة تشمل</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="text-center mt-12 space-y-4">
          <p className="text-xl text-gray-600 mb-4">ماذا تنتظر الآن؟ انطلق في رحلتك نحو التميز الرقمي</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
              ابدأ الآن
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-3"
            >
              تعرف على المزيد
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
