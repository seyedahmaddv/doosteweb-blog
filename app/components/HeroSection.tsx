

export default function HeroSection() {
  return (
    <div>
         {/* Hero Section */}
              <section className="bg-[url('/images/background/intersect.svg')] bg-no-repeat bg-cover bg-center bg-gray-100 py-20 px-5 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  طراحی سایت حرفه‌ای برای رشد کسب‌وکار شما
                </h1>
                <p className="text-lg text-gray-600 max-w-xl mx-auto">
                  با تکنولوژی‌های مدرن مانند Next.js و Tailwind CSS وب‌سایت سریع، سئو شده و واکنش‌گرا داشته باشید.
                </p>
                <button className="mt-8 bg-blue-600 text-white text-bold px-6 py-3 rounded hover:bg-blue-700 transition cursor-pointer">
                  دریافت مشاوره رایگان
                </button>
              </section>
    </div>
  )
}
