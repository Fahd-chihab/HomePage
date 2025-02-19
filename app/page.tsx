import Hero from "@/components/Hero"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import DashboardPreview from "@/components/DashboardPreview"
import InstructorCTA from "@/components/InstructorCTA"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ScrollIndicator from "@/components/layout/ScrollIndicator"

export default function Home() {
  return (
    <div>
      <Header />
      <ScrollIndicator />
      <main className="min-h-screen">
        <Hero />
        <Features />
        <HowItWorks />
        <DashboardPreview />
        <InstructorCTA />
      </main>
      <Footer />
    </div>
  )
}
