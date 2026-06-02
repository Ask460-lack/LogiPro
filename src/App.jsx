import { useState } from "react";

import {
  Menu,
  X,
  Globe,
  Truck,
  Warehouse,
  Ship,
  Phone,
  MapPin,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [lang, setLang] = useState("tr");

  const content = {
    tr: {
      home: "Anasayfa",
      about: "Hakkımızda",
      services: "Hizmetlerimiz",
      contact: "İletişim",

      heroTitle: "Global Lojistikte Güvenilir Çözüm Ortağınız",

      heroDesc:
        "Taşıma, depolama ve ihracat operasyonlarında profesyonel, hızlı ve güvenilir lojistik çözümleri sunuyoruz.",

      heroButton: "Hizmetleri İncele",

      aboutTitle: "Kurumsal Güç & Modern Lojistik",

      aboutDesc:
        "Modern araç filomuz ve deneyimli ekibimiz ile lojistik süreçlerinizi güvenle yönetiyoruz.",

      servicesTitle: "Profesyonel Hizmetler",

      transport: "Taşıma Hizmeti",

      transportDesc:
        "Türkiye geneli güvenli ve zamanında yük taşımacılığı sağlıyoruz.",

      storage: "Depolama Hizmeti",

      storageDesc:
        "Modern depolama alanlarımız ile ürünlerinizi güvenle muhafaza ediyoruz.",

      export: "İhracat Yükleme",

      exportDesc:
        "İhracat operasyonlarınız için profesyonel yükleme desteği sunuyoruz.",

      why1: "7/24 Operasyon Takibi",
      why2: "Uzman Operasyon Ekibi",
      why3: "Hızlı Teslimat",
      why4: "Modern Araç Filosu",

      contactTitle: "İletişim",

      route: "Yol Tarifi Al",

      call: "Hemen Ara",

      whatsapp: "WhatsApp İletişim",

      footer:
        "Profesyonel lojistik çözümleri ile işinizi büyütüyoruz.",
    },

    en: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",

      heroTitle: "Your Trusted Partner in Global Logistics",

      heroDesc:
        "We provide fast, professional and secure logistics solutions.",

      heroButton: "Explore Services",

      aboutTitle: "Corporate Power & Modern Logistics",

      aboutDesc:
        "We professionally manage your logistics operations with our experienced team.",

      servicesTitle: "Professional Services",

      transport: "Transportation",

      transportDesc:
        "Secure and on-time freight transportation solutions.",

      storage: "Storage",

      storageDesc:
        "Safe storage solutions with modern warehouse systems.",

      export: "Export Loading",

      exportDesc:
        "Professional export loading and process management.",

      why1: "24/7 Operation Tracking",
      why2: "Professional Team",
      why3: "Fast Delivery",
      why4: "Modern Fleet",

      contactTitle: "Contact",

      route: "Get Directions",

      call: "Call Now",

      whatsapp: "WhatsApp Contact",

      footer:
        "We grow your business with professional logistics solutions.",
    },
  };

  const t = content[lang];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.96,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="bg-[#ECECEC] text-gray-900 overflow-hidden">

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/905442030662"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-2xl hover:scale-110 transition duration-300"
      >
        <MessageCircle className="text-white" size={30} />
      </a>

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-white/40 shadow-sm">

        <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

          {/* LOGO */}
          <div className="text-3xl font-black tracking-wide">
            LOGI<span className="text-gray-500">PRO</span>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-semibold tracking-wide">

            <a
              href="#home"
              className="hover:text-gray-600 transition duration-300"
            >
              {t.home}
            </a>

            <a
              href="#about"
              className="hover:text-gray-600 transition duration-300"
            >
              {t.about}
            </a>

            <a
              href="#services"
              className="hover:text-gray-600 transition duration-300"
            >
              {t.services}
            </a>

            <a
              href="#contact"
              className="hover:text-gray-600 transition duration-300"
            >
              {t.contact}
            </a>

            {/* LANGUAGE */}
            <button
              onClick={() =>
                setLang(lang === "tr" ? "en" : "tr")
              }
              className="flex items-center gap-2 bg-gray-800 hover:bg-black text-white px-5 py-2 rounded-xl transition duration-300"
            >
              <Globe size={18} />

              {lang === "tr" ? "EN" : "TR"}
            </button>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden"
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="md:hidden bg-white px-5 py-5">

            <div className="flex flex-col gap-4">

              <a href="#home">{t.home}</a>

              <a href="#about">{t.about}</a>

              <a href="#services">{t.services}</a>

              <a href="#contact">{t.contact}</a>

              <button
                onClick={() =>
                  setLang(lang === "tr" ? "en" : "tr")
                }
                className="bg-gray-800 text-white py-3 rounded-xl"
              >
                {lang === "tr"
                  ? "Switch to English"
                  : "Türkçeye Geç"}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center"
      >

        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2000&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-5 py-32">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl"
          >

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-6 text-white">
              <Truck size={18} />
              Premium Logistics Solutions
            </div>

            <h1
              className="
              text-5xl
              lg:text-7xl
              font-extrabold
              tracking-[-2px]
              leading-[1.05]
              text-white
            "
            >
              {t.heroTitle}
            </h1>

            <p
              className="
              mt-8
              text-lg
              leading-9
              text-gray-200
              font-medium
            "
            >
              {t.heroDesc}
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#services"
                className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-2xl flex items-center gap-2 font-semibold transition duration-300"
              >
                {t.heroButton}

                <ArrowRight size={20} />
              </a>

              <a
                href="#contact"
                className="border border-white/30 text-white px-8 py-4 rounded-2xl hover:bg-white/10 transition duration-300"
              >
                {t.contact}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-28"
      >
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.img
            initial={{
              opacity: 0,
              x: -120,
              scale: 0.9,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}

            transition={{
              duration: 1,
            }}

            viewport={{ once: true }}

            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="rounded-3xl shadow-2xl"
          />

          {/* TEXT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 120,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 1,
            }}

            viewport={{ once: true }}
          >

            <h2
              className="
              text-5xl
              font-extrabold
              tracking-[-1px]
              mb-8
            "
            >
              {t.aboutTitle}
            </h2>

            <p
              className="
              text-lg
              leading-9
              text-gray-600
              font-medium
            "
            >
              {t.aboutDesc}
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {[t.why1, t.why2, t.why3, t.why4].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-3 shadow-md"
                >
                  <CheckCircle2 className="text-gray-700" />

                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-28 bg-[#E4E4E4]"
      >
        <div className="max-w-7xl mx-auto px-5">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-center mb-20"
          >

            <h2
              className="
              text-5xl
              font-extrabold
              tracking-[-1px]
            "
            >
              {t.servicesTitle}
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">

            {[
              {
                icon: <Truck size={50} />,
                title: t.transport,
                desc: t.transportDesc,
              },

              {
                icon: <Warehouse size={50} />,
                title: t.storage,
                desc: t.storageDesc,
              },

              {
                icon: <Ship size={50} />,
                title: t.export,
                desc: t.exportDesc,
              },
            ].map((service, index) => (
              <motion.div
                key={index}

                initial={{
                  opacity: 0,
                  y: 80,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}

                viewport={{
                  once: true,
                  amount: 0.2,
                }}

                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}

                className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200 transition"
              >

                <div className="text-gray-700 mb-6">
                  {service.icon}
                </div>

                <h3 className="text-3xl font-bold mb-5">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-28"
      >
        <div className="max-w-7xl mx-auto px-5">

          <div className="text-center mb-16">

            <h2
              className="
              text-5xl
              font-extrabold
              tracking-[-1px]
            "
            >
              {t.contactTitle}
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid lg:grid-cols-2 gap-10"
          >

            {/* MAP */}
            <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-300">

              <iframe
                src="https://www.google.com/maps?q=Ankara&output=embed"
                width="100%"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
                title="map"
              ></iframe>
            </div>

            {/* CONTACT BOX */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-200">

              <div className="flex items-center gap-4 mb-10">

                <MapPin className="text-gray-700" size={28} />

                <div>

                  <h3 className="text-2xl font-bold">
                    Ankara / Türkiye
                  </h3>

                  <p className="text-gray-500">
                    Premium Logistics HQ
                  </p>
                </div>
              </div>

              <div className="space-y-5">

                <a
                  href="https://maps.google.com/?q=Ankara"
                  target="_blank"
                  className="flex justify-center items-center bg-gray-800 hover:bg-black text-white py-4 rounded-2xl transition duration-300"
                >
                  {t.route}
                </a>

                <a
                  href="tel:+905442030662"
                  className="flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl transition duration-300"
                >
                  <Phone size={20} />

                  {t.call}
                </a>

                <a
                  href="https://wa.me/905442030662"
                  target="_blank"
                  className="flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl transition duration-300"
                >
                  <MessageCircle size={20} />

                  {t.whatsapp}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#DADADA] border-t border-gray-300 py-8">

        <div className="max-w-7xl mx-auto px-5 text-center text-gray-700">
          © 2026 LOGIPRO — {t.footer}
        </div>
      </footer>
    </div>
  );
}