import type React from "react"
import { Book, Home, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SidebarProps {
  isExpanded: boolean
}

export default function Sidebar({ isExpanded }: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed top-0 right-0 h-full bg-blue-800 text-white transition-all duration-300 ease-in-out",
        isExpanded ? "w-64" : "w-16",
      )}
    >
      <nav className="p-4 space-y-4">
        <SidebarButton icon={Home} label="الرئيسية" isExpanded={isExpanded} />
        <SidebarButton icon={Book} label="الدورات" isExpanded={isExpanded} />
        <SidebarButton icon={BarChart} label="التقدم" isExpanded={isExpanded} />
      </nav>
      {isExpanded && (
        <div className="mt-8 px-4">
          <h3 className="text-lg font-semibold mb-2">محتويات الدورة</h3>
          <ul className="space-y-2">
            <li>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-blue-700">
                الدرس 1: أساسيات تحليل البيانات
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-blue-700">
                الدرس 2: جمع وتنظيف البيانات
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-blue-700">
                الدرس 3: تحليل البيانات الوصفي
              </Button>
            </li>
          </ul>
        </div>
      )}
    </aside>
  )
}

interface SidebarButtonProps {
  icon: React.ElementType
  label: string
  isExpanded: boolean
}

function SidebarButton({ icon: Icon, label, isExpanded }: SidebarButtonProps) {
  return (
    <Button variant="ghost" className={cn("w-full justify-start text-white hover:bg-blue-700", !isExpanded && "px-2")}>
      <Icon className={cn("h-5 w-5", isExpanded && "ml-2")} />
      {isExpanded && <span>{label}</span>}
    </Button>
  )
}

