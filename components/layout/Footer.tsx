import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTiktok, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image'
import Link from 'next/link'

interface SocialLinkProps {
  icon: React.ReactNode;
  text: string;
  href: string;
}

const Footer = () => {
  return (
    <footer className="relative w-full py-16" dir="rtl">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 z-10" />

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-950" />

      {/* Content Container */}
      <div className="relative container mx-auto px-6">
        {/* Top Section with Logo and Description */}
        <div className="flex flex-col items-center text-center mb-12">
          <Image
            src="/logos/logo-white.svg"
            alt="Academy Logo"
            width={140}
            height={150}
            className="object-contain mb-6"
          />
          <p className="text-blue-100 max-w-xl text-sm md:text-base">
            منصة تعليمية رائدة تقدم دورات عالية الجودة وورش عمل تفاعلية لمساعدتك في تطوير مهاراتك وتحقيق أهدافك المهنية
          </p>
        </div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-white mb-12">
          {/* Contact Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6 text-blue-200">تواصل معنا</h3>
            <div className="space-y-4">
              {[
                { text: "مجموعة الدروس المجانية", href: "https://chat.whatsapp.com/JszirU9FO3M98Mt9sUsTXi" },
                { text: "مجموعة مناقشة الورشات", href: "https://chat.whatsapp.com/Llim27PY6Fs0AR9o6unFjZ" },
                { text: "خدمة العملاء", href: "https://wa.me/message/RFLLHJOVW5Y7N1" }
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 hover:bg-blue-800/30 transition-all p-4 rounded-xl group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="shrink-0 text-green-400 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-blue-100 group-hover:text-white transition-colors">{item.text}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6 text-blue-200">روابط سريعة</h3>
            <div className="space-y-4">
              {[
                { text: "المدونة", href: "/blogs" },
                { text: "المنصة", href: "/learning" },
                { text: "المتجر", href: "/store" }
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block hover:bg-blue-800/30 transition-all p-4 rounded-xl text-blue-100 hover:text-white"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6 text-blue-200">تابعنا على</h3>
            <div className="grid grid-cols-2 gap-4">
              <SocialLink icon={<FaFacebook size={24} />} text="فيسبوك" href="https://www.facebook.com/profile.php?id=100094565596478" />
              <SocialLink icon={<FaInstagram size={24} />} text="انستغرام" href="#" />
              <SocialLink icon={<FaYoutube size={24} />} text="يوتيوب" href="https://youtube.com/channel/UCOA9FdT0WG0zMF27qi8HCng" />
              <SocialLink icon={<FaLinkedin size={24} />} text="لينكد إن" href="https://www.linkedin.com/in/أكاديمية-الصحوة-للكوتشينغ-و-الاستشارات-aa0253347" />
              <SocialLink icon={<FaTiktok size={24} />} text="تيك توك" href="https://vm.tiktok.com/ZMkucs9dM/" />
              <SocialLink icon={<FaTelegram size={24} />} text="تيليجرام" href="https://t.me/sahwaacademy" />
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-8 border-t border-blue-800/30 text-center">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} أكاديمية الصحوة. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}

const SocialLink = ({ icon, text, href }: SocialLinkProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 hover:bg-blue-800/30 transition-all p-4 rounded-xl group"
  >
    <span className="text-blue-300 group-hover:scale-110 transition-transform">{icon}</span>
    <span className="text-blue-100 group-hover:text-white transition-colors">{text}</span>
  </Link>
)

export default Footer
