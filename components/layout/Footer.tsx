import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTiktok, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="relative w-full py-6">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/illustrations/footer-bg.png"
          alt="Footer background"
          fill
          className="object-cover rounded-t-3xl"
        />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4">
        {/* Main content container - Updated flex classes */}
        <div className="flex flex-col lg:flex-row justify-center gap-20 text-white">
          {/* Contact Section */}
          <div className="flex flex-col lg:w-1/3">
            <h3 className="text-lg font-bold mb-2 text-right lg:text-right">:تواصل معنا</h3>
            <div className="flex flex-col gap-3 items-end">
              <Link
                href="https://chat.whatsapp.com/JszirU9FO3M98Mt9sUsTXi"
                className="flex items-center gap-2 hover:text-gray-200 hover:outline hover:outline-white hover:outline-1 transition-all p-1 rounded justify-end"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>مجموعة الدروس المجانية</span>
                <FaWhatsapp size={24} />
              </Link>
              <Link
                href="https://chat.whatsapp.com/Llim27PY6Fs0AR9o6unFjZ"
                className="flex items-center gap-2 hover:text-gray-200 hover:outline hover:outline-white hover:outline-1 transition-all p-1 rounded justify-end"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>مجموعة مناقشة الورشات</span>
                <FaWhatsapp size={24} />
              </Link>
              <Link
                href="https://wa.me/message/RFLLHJOVW5Y7N1"
                className="flex items-center gap-2 hover:text-gray-200 hover:outline hover:outline-white hover:outline-1 transition-all p-1 rounded justify-end"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>خدمة العملاء</span>
                <FaWhatsapp size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-end lg:w-1/3">
            <h3 className="text-lg font-bold mb-3 text-center lg:text-right">:روابط مختصرة</h3>
            <div className="flex flex-col items-end gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Link href="/blogs" className="flex w-full justify-end hover:text-gray-200 hover:outline hover:outline-white hover:outline-1 transition-all p-1 rounded md:justify-center">المدونة</Link>
              <Link href="/learning" className="flex w-full justify-end hover:text-gray-200 hover:outline hover:outline-white hover:outline-1 transition-all p-1 rounded md:justify-center">المنصة</Link>
              <Link href="/store" className="flex w-full justify-end hover:text-gray-200 hover:outline hover:outline-white hover:outline-1 transition-all p-1 rounded md:justify-center">المتجر</Link>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-end lg:w-1/3">
            <h3 className="text-lg font-bold mb-3 text-center lg:text-right">:تابعونا على</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <Link
                href="https://www.facebook.com/profile.php?id=100094565596478&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-200 hover:outline hover:outline-white hover:outline-1 transition-all p-1 rounded justify-end md:justify-center"
              >
                <span>فيسبوك</span>
                <FaFacebook size={24} />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-200 hover:outline hover:outline-white hover:outline-1 transition-all p-1 rounded justify-end md:justify-center"
              >
                <span>انستغرام</span>
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://youtube.com/channel/UCOA9FdT0WG0zMF27qi8HCng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-200 hover:outline hover:outline-white hover:outline-1 transition-all p-1 rounded justify-end md:justify-center"
              >
                <span>يوتيوب</span>
                <FaYoutube size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%B5%D8%AD%D9%88%D8%A9-%D9%84%D9%84%D9%83%D9%88%D8%AA%D8%B4%D9%8A%D9%86%D8%BA-%D9%88-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-aa0253347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-200 hover:outline hover:outline-white hover:outline-1 transition-all p-1 rounded justify-end md:justify-center"
              >
                <span>لينكد إن</span>
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="https://vm.tiktok.com/ZMkucs9dM/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-200 hover:outline hover:outline-white hover:outline-1 transition-all p-1 rounded justify-end md:justify-center"
              >
                <span>تيك توك</span>
                <FaTiktok size={24} />
              </Link>
              <Link
                href="https://t.me/sahwaacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-200 hover:outline hover:outline-white hover:outline-1 transition-all p-1 rounded justify-end md:justify-center"
              >
                <span>تيليجرام</span>
                <FaTelegram size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Logo Section - Updated positioning */}
        <div className="absolute right-6 top-0 w-32 lg:static lg:mx-auto lg:mt-8">
          <Image
            src="/logos/logo-white.svg"
            alt="Academy Logo"
            width={110}
            height={120}
            className="object-contain md:mx-auto"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer
