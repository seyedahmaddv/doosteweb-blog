

export default function Services() {
    return (
        <div>
            {/* خدمات ما */}
            <section className="py-16 px-5 text-center">
                <h2 className="text-3xl font-bold mb-10">خدمات ما</h2>
                <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
                    {[
                        { title: "طراحی سایت شخصی", icon: "💼" },
                        { title: "فروشگاه اینترنتی", icon: "🛒" },
                        { title: "سئو و بهینه‌سازی", icon: "📈" },
                        { title: "پشتیبانی و نگهداری", icon: "🛠️" },
                    ].map((service, i) => (
                        <div key={i} className="bg-white shadow p-6 rounded-lg">
                            <div className="text-4xl mb-3">{service.icon}</div>
                            <h3 className="text-xl font-semibold">{service.title}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
