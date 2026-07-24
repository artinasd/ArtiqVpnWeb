import React from 'react';
import { Shield, Zap, Gamepad2, Headphones, Rocket, Send, CheckCircle2, Menu, X, Activity, Globe, Megaphone } from 'lucide-react';

// Using tg:// to directly open the app and bypass browser filtering in Iran
const BOT_LINK = "tg://resolve?domain=ArtiqVPN_Bot";
const CHANNEL_LINK = "tg://resolve?domain=ArtiqVPN";

const multiLocations = [
  { id: 'se', name: 'سوئد' }, { id: 'nl', name: 'هلند' }, { id: 'gb', name: 'انگلیس' },
  { id: 'ch', name: 'سوئیس' }, { id: 'fr', name: 'فرانسه' }, { id: 'de', name: 'آلمان' },
  { id: 'es', name: 'اسپانیا' }, { id: 'fi', name: 'فنلاند' }, { id: 'tr', name: 'ترکیه' },
  { id: 'vn', name: 'ویتنام' }, { id: 'ro', name: 'رومانی' }, { id: 'it', name: 'ایتالیا' },
  { id: 'us', name: 'آمریکا' }, { id: 'ca', name: 'کانادا' }, { id: 'at', name: 'اتریش' },
  { id: 'ae', name: 'امارات' }, { id: 'al', name: 'آلبانی' }, { id: 'ua', name: 'اوکراین' },
  { id: 'in', name: 'هند' }, { id: 'au', name: 'استرالیا' }, { id: 'hk', name: 'هنگ کنگ' },
  { id: 'jp', name: 'ژاپن' }, { id: 'id', name: 'اندونزی' }, { id: 'sg', name: 'سنگاپور' }
];

const twoLocations = [{ id: 'de', name: 'آلمان' }, { id: 'nl', name: 'هلند' }];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">

        {/* Inline styles for the smooth marquee animation */}
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 35s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Navbar */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center gap-2">
                <Shield className="w-8 h-8 text-cyan-400" />
                <span className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
                  ArtiqVPN
                </span>
              </div>

              {/* Desktop CTA */}
              <div className="hidden md:flex items-center gap-4">
                <a
                    href={CHANNEL_LINK}
                    className="text-slate-400 hover:text-cyan-400 font-medium transition-colors flex items-center gap-2 text-sm"
                >
                  <Megaphone className="w-4 h-4" />
                  کانال ما
                </a>
                <a
                    href={BOT_LINK}
                    className="flex items-center gap-2 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 text-white rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                >
                  <Headphones className="w-4 h-4" />
                  <span className="text-sm font-semibold">ارتباط با ربات</span>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-slate-400 hover:text-white transition-colors"
                >
                  {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
              <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-4 space-y-4">
                <a
                    href={CHANNEL_LINK}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium rounded-lg transition-colors"
                >
                  <Megaphone className="w-5 h-5" />
                  عضویت در کانال
                </a>
                <a
                    href={BOT_LINK}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-colors"
                >
                  <Send className="w-5 h-5" />
                  خرید از ربات
                </a>
              </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
          {/* Subtle Grid Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

          {/* Neon Glow Background Effects */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-violet-600/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm">
              <Activity className="w-4 h-4" />
              <span>آپتایم ۹۹.۹٪ • اتصال پایدار و بدون قطعی</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight">
              آزادی و سرعت واقعی در اینترنت با <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">ArtiqVPN</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              دسترسی بدون مرز به اینترنت آزاد، همراه با بالاترین سطح امنیت و حریم خصوصی. سرورهای بهینه‌شده برای ترید، گیمینگ و استریم در +۲۰ لوکیشن.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                  href="#pricing"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transform hover:-translate-y-1 text-center"
              >
                مشاهده تعرفه‌ها
              </a>
              <div className="flex w-full sm:w-auto gap-2">
                <a
                    href={BOT_LINK}
                    className="flex-1 sm:flex-none px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5 text-cyan-400" />
                  ربات ما
                </a>
                <a
                    href={CHANNEL_LINK}
                    className="flex-1 sm:flex-none px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Megaphone className="w-5 h-5 text-violet-400" />
                  کانال
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Global Network Marquee */}
        <section className="py-10 bg-slate-900/50 border-y border-slate-800/50 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

          <div className="flex items-center justify-center gap-2 mb-8">
            <Globe className="w-5 h-5 text-slate-400" />
            <span className="text-slate-400 text-sm font-medium tracking-wide">پشتیبانی از +۲۰ لوکیشن قدرتمند در سراسر جهان</span>
          </div>

          <div className="flex w-full" dir="ltr">
            <div className="flex w-[200%] animate-scroll">
              {/* Render lists twice for seamless infinite scrolling */}
              {[...multiLocations, ...multiLocations].map((loc, idx) => (
                  <div key={`${loc.id}-${idx}`} className="flex flex-col items-center justify-center min-w-[100px] gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-default">
                    <img
                        src={`https://flagcdn.com/w80/${loc.id}.png`}
                        alt={loc.name}
                        className="w-10 h-10 object-cover rounded-full border-2 border-slate-700/50 shadow-lg"
                        loading="lazy"
                    />
                    <span className="text-xs text-slate-500 font-medium">{loc.name}</span>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">چرا ArtiqVPN؟</h2>
              <p className="text-slate-400">تکنولوژی روز دنیا برای تجربه‌ای بی‌نقص از اینترنت</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                  icon={<Rocket className="w-8 h-8 text-cyan-400" />}
                  title="سرورهای پرسرعت"
                  description="بهره‌مندی از سرورهای اختصاصی با پورت‌های گیگابیتی در بهترین دیتاسنترهای اروپا."
              />
              <FeatureCard
                  icon={<Gamepad2 className="w-8 h-8 text-violet-400" />}
                  title="پینگ پایین مخصوص گیم"
                  description="مسیرهای روتینگ بهینه‌شده برای کاهش چشمگیر پینگ و رفع تحریم بازی‌ها."
              />
              <FeatureCard
                  icon={<Shield className="w-8 h-8 text-emerald-400" />}
                  title="امنیت و حریم خصوصی"
                  description="رمزنگاری پیشرفته داده‌ها و عدم ثبت لاگ کاربران برای حفظ کامل حریم خصوصی."
              />
              <FeatureCard
                  icon={<Zap className="w-8 h-8 text-yellow-400" />}
                  title="اتصال فوری"
                  description="اتصال در کمتر از یک ثانیه با پشتیبانی از جدیدترین پروتکل‌های فیلترینگ."
              />
              <FeatureCard
                  icon={<Headphones className="w-8 h-8 text-blue-400" />}
                  title="پشتیبانی ۲۴ ساعته"
                  description="تیم پشتیبانی ما در هر ساعت از شبانه‌روز آماده رفع مشکلات شما در تلگرام است."
              />
              <FeatureCard
                  icon={<Activity className="w-8 h-8 text-rose-400" />}
                  title="آپتایم ۹۹.۹٪"
                  description="پایداری تضمین شده و مانیتورینگ ۲۴ ساعته سرورها برای جلوگیری از افت کیفیت."
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-4 relative bg-slate-900/20 border-t border-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">تعرفه‌های اشتراک</h2>
              <p className="text-lg text-slate-400">بسته‌ای که با نیاز شما همخوانی دارد را انتخاب کنید</p>
            </div>

            {/* Volume Plans */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-700"></div>
                <h3 className="text-2xl font-bold text-white text-center px-4">بسته‌های اختصاصی و پرسرعت</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-700"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                <PricingCard
                    name="بسته اقتصادی"
                    volume="10GB"
                    duration="۳۰ روزه"
                    price="۴۰,۰۰۰"
                    locations={multiLocations}
                    features={["تک کاربره", "پشتیبانی استاندارد", "مناسب وب‌گردی"]}
                />
                <PricingCard
                    name="بسته بهینه"
                    volume="20GB"
                    duration="۳۰ روزه"
                    price="۷۰,۰۰۰"
                    locations={multiLocations}
                    features={["دو کاربره", "پینگ ویژه گیمینگ", "پشتیبانی اولویت‌دار"]}
                    isPopular={true}
                />
                <PricingCard
                    name="بسته پرایم"
                    volume="50GB"
                    duration="۶۰ روزه"
                    price="۱۵۰,۰۰۰"
                    locations={multiLocations}
                    features={["سه کاربره", "پهنای باند اختصاصی", "پشتیبانی VIP"]}
                />
              </div>
            </div>

            {/* Unlimited Plans */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-violet-700"></div>
                <div className="flex flex-col items-center">
                  <span className="bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-widest shadow-[0_0_10px_rgba(124,58,237,0.5)]">Special</span>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 text-center px-4">بسته‌های نامحدود واقعی</h3>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-violet-700"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
                <PricingCard
                    name="نامحدود ۱ ماهه"
                    volume="نامحدود"
                    duration="۳۰ روزه"
                    price="۲۵۰,۰۰۰"
                    locations={twoLocations}
                    features={["دو کاربره", "بدون افت سرعت", "مناسب استریم و دانلود"]}
                    accentColor="violet"
                />
                <PricingCard
                    name="نامحدود ۲ ماهه"
                    volume="نامحدود"
                    duration="۶۰ روزه"
                    price="۳۵۰,۰۰۰"
                    locations={twoLocations}
                    features={["دو کاربره", "بهترین ارزش خرید", "بدون افت سرعت", "مناسب استریم و دانلود"]}
                    isBestValue={true}
                    accentColor="violet"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 bg-slate-950 pt-12 pb-8">
          <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
            <div className="flex items-center gap-2 mb-6 opacity-80 hover:opacity-100 transition-opacity">
              <Shield className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold text-white tracking-wider">ArtiqVPN</span>
            </div>

            <p className="text-slate-500 mb-6 text-sm">
              تمامی حقوق برای ArtiqVPN محفوظ است. ارائه دهنده سرویس‌های پریمیوم گذر از تحریم.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400">
                <Activity className="w-3 h-3 text-emerald-400" />
                آپتایم ۹۹.۹٪
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400">
                <Shield className="w-3 h-3 text-cyan-400" />
                امنیت تضمین شده
              </span>
            </div>

            <div className="flex items-center justify-center gap-6">
              <a
                  href={BOT_LINK}
                  className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm font-medium"
              >
                <Send className="w-4 h-4" />
                @ArtiqVPN_Bot
              </a>
              <a
                  href={CHANNEL_LINK}
                  className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm font-medium"
              >
                <Megaphone className="w-4 h-4" />
                @ArtiqVPN
              </a>
            </div>
          </div>
        </footer>
      </div>
  );
}

// Sub-components

function FeatureCard({ icon, title, description }) {
  return (
      <div className="group p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-300">
        <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400 leading-relaxed text-sm">
          {description}
        </p>
      </div>
  );
}

function PricingCard({ name, volume, duration, price, features, locations, isPopular, isBestValue, accentColor = "cyan" }) {
  const isViolet = accentColor === "violet";
  const glowShadow = isViolet
      ? "shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]"
      : "shadow-[0_0_30px_rgba(34,211,238,0.1)] hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]";

  const borderColor = isPopular ? "border-cyan-500" : isBestValue ? "border-violet-500" : "border-slate-800";
  const buttonBg = isViolet
      ? "bg-violet-600 hover:bg-violet-500 text-white"
      : isPopular
          ? "bg-cyan-500 hover:bg-cyan-400 text-slate-950"
          : "bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white hover:border-cyan-500/50";

  // Logic to display up to 5 flags, and a counter for the rest
  const displayFlags = locations.slice(0, 5);
  const remainingFlagsCount = locations.length - 5;

  return (
      <div className={`relative flex flex-col p-8 bg-slate-900 rounded-3xl border ${borderColor} transition-all duration-300 ${glowShadow} transform hover:-translate-y-2`}>

        {isPopular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold rounded-full whitespace-nowrap">
              محبوب‌ترین
            </div>
        )}
        {isBestValue && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-xs font-bold rounded-full whitespace-nowrap">
              بهترین ارزش خرید
            </div>
        )}

        <div className="mb-6 border-b border-slate-800 pb-8 text-center">
          <h4 className="text-xl font-medium text-slate-300 mb-2">{name}</h4>
          <div className="flex items-center justify-center gap-2 mb-4 font-black">
            <span className="text-5xl text-white">{volume}</span>
            <span className="text-lg text-slate-400 mt-3 font-medium">/ {duration}</span>
          </div>

          {/* Overlapping Flags UI */}
          <div className="flex flex-col items-center gap-2 mt-4 bg-slate-950/50 py-2 rounded-xl border border-slate-800/50">
            <span className="text-xs text-slate-400 font-medium">
              {locations.length > 2 ? 'دسترسی به تمامی سرورها' : 'سرورهای آلمان و هلند'}
            </span>
            <div className="flex items-center justify-center -space-x-2 space-x-reverse" dir="ltr">
              {displayFlags.map((loc) => (
                  <img
                      key={loc.id}
                      src={`https://flagcdn.com/w40/${loc.id}.png`}
                      alt={loc.name}
                      title={loc.name}
                      className="w-7 h-7 rounded-full border-2 border-slate-900 object-cover"
                  />
              ))}
              {remainingFlagsCount > 0 && (
                  <div className="w-7 h-7 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center z-10">
                    <span className="text-[10px] font-bold text-slate-300">+{remainingFlagsCount}</span>
                  </div>
              )}
            </div>
          </div>

          <div className="text-cyan-400 font-bold text-xl mt-6">
            {price} <span className="text-sm font-normal text-slate-400">تومان</span>
          </div>
        </div>

        <ul className="space-y-4 mb-8 flex-1">
          {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className={`w-5 h-5 shrink-0 ${isViolet ? "text-violet-400" : "text-cyan-400"}`} />
                <span className="text-slate-300 text-sm">{feature}</span>
              </li>
          ))}
        </ul>

        <a
            href={BOT_LINK}
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${buttonBg}`}
        >
          <Send className="w-5 h-5" />
          خرید از طریق تلگرام
        </a>
      </div>
  );
}