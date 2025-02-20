"use client"

import React from "react"
import { ChevronRight, ChevronLeft, Download, MessageCircle, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import VideoPlayer from "./VideoPlayer"
import Sidebar from "./sidebar"
import PlyrPlayer from './PlyrPlayer'




export default function CourseView() {
  const [progress, setProgress] = React.useState(0)
  const [isSidebarExpanded, setIsSidebarExpanded] = React.useState(true)

  const handleMarkComplete = () => {
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100))
  }

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded)
  }
  // const VideoPlayer = dynamic(() => import('./VideoPlayer'), {
  //   ssr: false
  // })

  return (
    <div className="flex w-full">
      <Sidebar isExpanded={isSidebarExpanded} />
      <div className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarExpanded ? "mr-64" : "mr-16"}`}>
        <div className="p-6">
          <Button variant="outline" size="icon" className="mb-4" onClick={toggleSidebar}>
            <Menu className="h-4 w-4" />
          </Button>
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-blue-900 mb-2">مقدمة في علم البيانات</h1>
            <p className="text-blue-600">الدرس 1: أساسيات تحليل البيانات</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <main className="container mx-auto p-4">
                <PlyrPlayer />
              </main>

              <div className="mt-6 bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-blue-900 mb-4">محتوى الدرس</h2>
                <p className="text-blue-800 mb-4">
                  في هذا الدرس، سنتعرف على المفاهيم الأساسية لتحليل البيانات وكيفية استخدامها في حل المشكلات العملية.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <Button variant="outline">
                    <ChevronRight className="ml-2 h-4 w-4" /> الدرس السابق
                  </Button>
                  <Button onClick={handleMarkComplete} className="bg-blue-600 hover:bg-blue-700 text-white">
                    تحديد كمكتمل
                  </Button>
                  <Button variant="outline">
                    الدرس التالي <ChevronLeft className="mr-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-blue-900 mb-4">تقدم الدورة</h2>
                <Progress value={progress} className="mb-2" />
                <p className="text-blue-600 text-sm">{progress}% مكتمل</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-blue-900 mb-4">موارد الدرس</h2>
                <ul className="space-y-2">
                  <li>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="ml-2 h-4 w-4" /> ملخص الدرس (PDF)
                    </Button>
                  </li>
                  <li>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="ml-2 h-4 w-4" /> شرائح العرض التقديمي
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-blue-900 mb-4">أسئلة وأجوبة</h2>
                <Button className="w-full bg-blue-100 text-blue-800 hover:bg-blue-200">
                  <MessageCircle className="ml-2 h-4 w-4" /> طرح سؤال
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

