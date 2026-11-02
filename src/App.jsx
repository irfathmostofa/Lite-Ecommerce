import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Check,
  LayoutDashboard,
  Menu,
  MessageCircle,
  Package,
  Percent,
  Sparkles,
  Store,
  Truck,
  Wallet,
  X,
} from 'lucide-react'
import ImageSlot from './components/ImageSlot'
import {
  WHATSAPP,
  DEVELOPER,
  customWork,
  featureBlocks,
  included,
  packages,
  stageSteps,
  aiPoints,
  images,
} from './data'

const ease = [0.22, 1, 0.36, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}

const fadeLeft = {
  hidden: { opacity: 0, x: 36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
}

const headline = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const word = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

function WhatsAppButton({ children, className = '' }) {
  return (
    <motion.a
      href={WHATSAPP.href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,211,102,0.28)] hover:bg-[#1ebe5d] ${className}`}
    >
      <MessageCircle size={18} />
      {children}
    </motion.a>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#features', label: 'ফিচার' },
    { href: '#pricing', label: 'প্যাকেজ' },
    { href: '#ai', label: 'এআই' },
    { href: '#demo', label: 'ডেমো' },
  ]

  // close the mobile menu if the viewport grows to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // prevent body scroll when mobile menu is open (optional nicety)
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease }}
      className="sticky top-0 z-40 border-b border-teal-900/5 bg-[#fbfaf7]/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-3.5">
        {/* Logo */}
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center gap-2.5"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-sm font-extrabold text-white">
            L
          </span>
          <span className="text-sm font-bold tracking-tight sm:text-[15px]">
            Lite Ecommerce
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-teal-800">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <WhatsAppButton>ডেমোর জন্য যোগাযোগ</WhatsAppButton>
        </div>

        {/* Mobile: short CTA + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <WhatsAppButton className="!px-3.5 !py-2 !text-xs">
            ডেমো
          </WhatsAppButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="মেনু"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-colors hover:border-teal-700 hover:text-teal-800"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease }}
            className="overflow-hidden border-t border-teal-900/5 bg-[#fbfaf7] md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-800"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function Hero() {
  const lines = ['আপনার অনলাইন ব্যবসা পরিচালনা করুন সহজে।', 'বিক্রি, ডেলিভারি আর হিসাব সব একসাথে।']
  return (
    <section id="top" className="relative overflow-hidden">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl"
        animate={{ x: [0, 24, 0], y: [0, 18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-20 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl"
        animate={{ x: [0, -18, 0], y: [0, 22, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.p
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-700/10 px-3 py-1 text-xs font-semibold tracking-wide text-teal-800"
          >
            বাংলাদেশের অনলাইন ব্যবসার জন্য
          </motion.p>
          <motion.h1
            variants={headline}
            initial="hidden"
            animate="show"
            className="text-4xl font-extrabold leading-[1.18] tracking-tight text-slate-950 sm:text-5xl lg:text-[52px]"
          >
            {lines.map((line) => (
              <motion.span key={line} variants={word} className="block">
                {line}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            Lite Ecommerce বাংলাদেশের দোকানের কথা মাথায় রেখে বানানো। নিজের ব্র্যান্ডের স্টোর চালু করুন, ক্যাশ অন ডেলিভারি নিন, Steadfast দিয়ে পার্সেল পাঠান, আর আসল লাভটা হিসাব করুন — আলাদা আলাদা সফটওয়্যার জোড়া লাগাতে হয় না।
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <WhatsAppButton>ডেমোর জন্য যোগাযোগ</WhatsAppButton>
            <motion.a
              href="#pricing"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-teal-700 hover:text-teal-800"
            >
              প্যাকেজ দেখুন
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ImageSlot label="স্টোরফ্রন্টের ছবি" image={images.hero} ratio="aspect-[5/4]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Stage() {
  return (
    <section className="border-y border-teal-900/5 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs font-semibold tracking-wide text-teal-700">এখন যা চালু আছে</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-extrabold tracking-tight leading-snug">
          দোকান খুলে বিক্রি শুরু করার মতো প্ল্যাটফর্ম।
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600 leading-7">
          প্রতিশ্রুতি নয় — যে কাজগুলো আজই করা যায়, সেগুলোই নিচে। লোগো বসান, প্রোডাক্ট তুলুন, অর্ডার নিন।
        </p>
        <motion.div
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {stageSteps.map((step) => (
            <motion.article
              key={step.n}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: '0 16px 32px rgba(15, 118, 110, 0.08)' }}
              className="rounded-2xl border border-slate-200 bg-[#fbfaf7] p-5"
            >
              <p className="text-xs font-bold text-amber-600">{step.n}</p>
              <h3 className="mt-2 text-[15px] font-bold leading-snug">{step.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{step.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-20">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-wide text-teal-700">প্যাকেজ</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
            দাম সোজা। টাকায়। লুকানো চার্জ নেই।
          </h2>
          <p className="mt-2 max-w-xl text-slate-600 leading-7">
            মাসিক আর বাৎসরিক — দুটোতেই এখনকার পুরো প্ল্যাটফর্ম আছে। সিদ্ধান্ত নিতে হিসাব মিলিয়ে নিন।
          </p>
        </div>
        <WhatsAppButton>প্যাকেজ নিয়ে জিজ্ঞাসা করুন</WhatsAppButton>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {packages.map((pkg, i) => (
          <motion.article
            key={pkg.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease }}
            whileHover={{ y: -8, scale: 1.015 }}
            className={`relative flex flex-col rounded-3xl border p-6 ${
              pkg.highlight
                ? 'border-teal-700 bg-teal-800 text-white shadow-xl shadow-teal-900/15'
                : 'border-slate-200 bg-white'
            }`}
          >
            {pkg.badge ? (
              <span className="absolute -top-3 right-6 rounded-full bg-amber-500 px-3 py-1 text-[11px] font-bold text-white">
                {pkg.badge}
              </span>
            ) : null}
            <p className={`text-sm font-semibold ${pkg.highlight ? 'text-teal-100' : 'text-teal-800'}`}>
              {pkg.name}
            </p>
            <p className="mt-3 flex items-end gap-1">
              <span className="text-4xl font-extrabold tracking-tight">{pkg.price}</span>
              {pkg.unit ? <span className="mb-1 text-sm opacity-80">{pkg.unit}</span> : null}
            </p>
            <p className={`mt-1 text-sm ${pkg.highlight ? 'text-teal-100' : 'text-slate-500'}`}>
              {pkg.billing}
            </p>
            <p className={`mt-4 flex-1 text-sm leading-7 ${pkg.highlight ? 'text-teal-50' : 'text-slate-600'}`}>
              {pkg.who}
            </p>
            <a
              href={WHATSAPP.href}
              target="_blank"
              rel="noreferrer"
              className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold ${
                pkg.highlight ? 'bg-white text-teal-900' : 'bg-teal-800 text-white'
              }`}
            >
              {pkg.cta}
            </a>
          </motion.article>
        ))}
      </div>
      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-bold">প্রতিটি প্যাকেজে যা পাবেন</h3>
        <p className="mt-1 text-sm text-slate-500">
          মাসিক আর বাৎসরিক — একই ফিচার। কম টাকায় কম ফিচার নয়।
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {included.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
              <Check size={16} className="mt-0.5 shrink-0 text-teal-700" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-[#f4f1ea] p-6">
          <h3 className="text-lg font-bold">কাস্টমাইজ</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            দোকানের কাজ আলাদা হলে কথা বলে ঠিক করা যায়। দাম ও সময় প্রতি স্টোর অনুযায়ী — আগে থেকে বাধ্যতামূলক প্যাকেজ নয়।
          </p>
          <ul className="mt-4 space-y-2">
            {customWork.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                <BadgeCheck size={16} className="mt-0.5 shrink-0 text-amber-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <ImageSlot label="আপনার ব্র্যান্ডের স্টোর" image={images.appearance} />
      </div>
    </section>
  )
}

function Features() {
  const icons = [Store, Boxes, Percent, LayoutDashboard, Truck, MessageCircle]
  return (
    <section id="features" className="border-y border-teal-900/5 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-xs font-semibold tracking-wide text-teal-700">পুরো ফিচার তালিকা</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-extrabold tracking-tight leading-snug">
          এখন যা আছে, সেটাই নিচে। বাড়িয়ে বলা নেই।
        </h2>
        <div className="mt-14 space-y-20">
          {featureBlocks.map((block, i) => {
            const Icon = icons[i]
            const reverse = i % 2 === 1
            return (
              <motion.div
                key={block.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={stagger}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <motion.div variants={fadeUp}>
                  <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-amber-700">
                    <Icon size={14} />
                    {block.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-tight leading-snug">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-8 text-slate-600">{block.text}</p>
                  <ul className="mt-5 space-y-2">
                    {block.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check size={16} className="mt-0.5 shrink-0 text-teal-700" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div variants={fadeLeft} whileHover={{ scale: 1.02 }}>
                  <ImageSlot label={block.imageLabel} image={block.image} />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Ai() {
  return (
    <section id="ai" className="mx-auto max-w-6xl px-5 py-20">
      <motion.div
        className="grid items-center gap-10 lg:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <motion.div variants={fadeUp}>
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-amber-700">
            <Sparkles size={14} />
            এআই প্রোডাক্ট তৈরি
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight leading-snug">
            একটা ছবি থেকে লিস্টিং।
          </h2>
          <p className="mt-3 text-slate-600 leading-8">
            অ্যাডমিনে /admin/products/new এ যান। প্রোডাক্টের একটা ছবি আপলোড করুন। এজেন্ট ব্যাকগ্রাউন্ড সরাতে পারে, স্টোরের লোগো বসাতে পারে, আর ইংরেজি বা বাংলায় শিরোনাম, বিবরণ ও কিওয়ার্ড তৈরি করে। পাবলিশের আগে এসইও স্কোর দেখা যায়। ড্রাফট রেখে পরে পাবলিশ করুন — তাড়াহুড়ো করে লাইভ করতে হয় না।
          </p>
          <ul className="mt-5 space-y-2 text-sm text-slate-700">
            {aiPoints.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={16} className="mt-0.5 text-teal-700" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div variants={fadeLeft} className="grid gap-4">
          <ImageSlot label="এআই প্রোডাক্ট তৈরির ছবি" image={images.aiUpload} />
          {/* <ImageSlot label="এআই জেনারেটেড লিস্টিং" image={images.aiListing} /> */}
        </motion.div>
      </motion.div>
    </section>
  )
}

function Cta() {
  return (
    <section id="demo" className="mx-auto max-w-6xl px-5 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease }}
        className="relative overflow-hidden rounded-[28px] bg-teal-800 px-6 py-14 text-center text-white sm:px-12"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-amber-400/20 blur-2xl"
          animate={{ x: [0, 30, 0], y: [0, 16, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Package className="mx-auto mb-4 text-amber-300" />
        </motion.div>
        <h2 className="text-3xl font-extrabold tracking-tight leading-snug sm:text-4xl">
          Lite Ecommerce লাইভ দেখে নিন।
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-teal-50 leading-8">
          হোয়াটসঅ্যাপে মেসেজ দিন। স্টোরফ্রন্ট, অ্যাডমিন, Steadfast, এসএমএস আর এআই প্রোডাক্ট তৈরি — এক কলে ঘুরে দেখাব। কোনো বাধ্যবাধকতা নেই।
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <WhatsAppButton>ডেমোর জন্য যোগাযোগ</WhatsAppButton>
          <p className="text-sm text-teal-100">{WHATSAPP.number}</p>
        </div>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#0b1220] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600 text-sm font-extrabold">
              L
            </span>
            <span className="text-[15px] font-bold tracking-tight">Lite Ecommerce</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
            বাংলাদেশের অনলাইন ব্যবসার জন্য স্টোর প্ল্যাটফর্ম। স্টোরফ্রন্ট, অ্যাডমিন, কুরিয়ার, এসএমএস, প্রমোশন, রিপোর্ট আর এআই প্রোডাক্ট তৈরি — এক জায়গায়।
          </p>
          <a
            href={WHATSAPP.href}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-300 hover:text-white"
          >
            <MessageCircle size={16} />
            {WHATSAPP.number}
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide text-slate-500">প্রোডাক্ট</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li><a href="#features" className="hover:text-white">ফিচার</a></li>
            <li><a href="#pricing" className="hover:text-white">প্যাকেজ</a></li>
            <li><a href="#ai" className="hover:text-white">এআই প্রোডাক্ট তৈরি</a></li>
            <li><a href="#demo" className="hover:text-white">ডেমোর জন্য যোগাযোগ</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide text-slate-500">প্যাকেজ</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>মাসিক · ৫০০ টাকা</li>
            <li>বাৎসরিক · ৫৫০০ টাকা</li>
            <li>কাস্টমাইজ · আলোচনা সাপেক্ষে</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Lite Ecommerce। সর্বস্বত্ব সংরক্ষিত।</p>
          <p>
            Developed by{' '}
            <a
              href={DEVELOPER.href}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white underline decoration-teal-400/60 underline-offset-4 hover:text-teal-200"
            >
              {DEVELOPER.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

function Highlights() {
  const items = [
    { icon: Store, title: 'স্টোরফ্রন্ট', text: 'হোম, শপ, প্রোডাক্ট, চেকআউট, ট্র্যাক' },
    { icon: Truck, title: 'Steadfast', text: 'পার্সেল, রিটার্ন, পেআউট, সিওডি' },
    { icon: Wallet, title: 'লাভ', text: 'কস্ট, বিক্রি, খরচ, নিট প্রফিট' },
    { icon: Sparkles, title: 'এআই লিস্টিং', text: 'এক ছবি থেকে ড্রাফট বা পাবলিশ' },
  ]
  return (
    <section className="mx-auto -mt-4 max-w-6xl px-5 pb-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08, ease }}
            whileHover={{ y: -4 }}
            className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <item.icon className="mt-0.5 text-teal-700" size={20} />
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-slate-500">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Highlights />
      <Stage />
      <Pricing />
      <Features />
      <Ai />
      <Cta />
      <Footer />
      <motion.a
        href={WHATSAPP.href}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/40"
        aria-label="হোয়াটসঅ্যাপে ডেমোর জন্য যোগাযোগ"
      >
        <motion.span
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex"
        >
          <MessageCircle />
        </motion.span>
      </motion.a>
    </div>
  )
}