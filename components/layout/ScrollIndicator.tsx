'use client'
import { useEffect, useState } from 'react'

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer')
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        setIsVisible(footerTop > windowHeight)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Mobile Chevrons */}
      <div className="block sm:hidden flex flex-col items-center gap-1">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          className="animate-pulse text-blue-300"
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
        >
          <path d="M6 9l6 6 6-6"/>
        </svg>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          className="animate-pulse text-blue-400 -mt-4"
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
        >
          <path d="M6 9l6 6 6-6"/>
        </svg>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          className="animate-pulse text-blue-500 -mt-4"
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
        >
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </div>

      {/* Desktop Full Scroll Indicator */}
      <div className="hidden sm:flex flex-col items-center gap-3">
        <span className="text-blue-500 font-bold text-lg animate-pulse">
          اكتشف المزيد
        </span>
        <div className="relative">
          <div className="w-6 h-10 border-2 border-blue-500 rounded-full">
            <div className="w-1 h-3 bg-blue-500 rounded-full mx-auto mt-2 animate-scrollDown"/>
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              className="animate-bounce text-blue-500"
            >
              <path 
                fill="currentColor" 
                d="M12 15.5l-4.5-4.5h9l-4.5 4.5z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrollIndicator
