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
    <footer className="relative w-full" dir="rtl">
      {/* Main Footer Section */}
      <div className="bg-gradient-to-b from-blue-900 to-blue-950 py-16">
        <div className="container mx-auto px-6">
          {/* Main Grid with Links and Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-white">
            {/* About Section */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-6 text-blue-200">عن الأكاديمية</h3>
              <p className="text-blue-100 mb-6">منصة تعليمية رائدة تقدم دورات عالية الجودة وورش عمل تفاعلية لمساعدتك في تطوير مهاراتك وتحقيق أهدافك المهنية</p>
              <div className="flex gap-4">
                <FaFacebook size={24} className="text-blue-300 hover:text-white cursor-pointer" />
                <FaInstagram size={24} className="text-blue-300 hover:text-white cursor-pointer" />
                <FaYoutube size={24} className="text-blue-300 hover:text-white cursor-pointer" />
                <FaLinkedin size={24} className="text-blue-300 hover:text-white cursor-pointer" />
                <FaTiktok size={24} className="text-blue-300 hover:text-white cursor-pointer" />
                <FaTelegram size={24} className="text-blue-300 hover:text-white cursor-pointer" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
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

            {/* Contact Section */}
            <div>
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
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-950 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <Image
            src="/logos/logo-white.svg"
            alt="Academy Logo"
            width={100}
            height={110}
            className="mb-4 md:mb-0"
          />
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} أكاديمية الصحوة. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  )
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
