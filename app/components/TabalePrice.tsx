

export default function TabalePrice() {
  return (
    <div>
        {/* تعرفه‌ها */}
      <section className="py-16 px-5 text-center">
        <h2 className="text-3xl font-bold mb-10">پلن‌های طراحی سایت</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "پایه", price: "1 میلیون", features: ["دامنه رایگان", "سایت تک صفحه‌ای"] },
            { title: "حرفه‌ای", price: "3 میلیون", features: ["طراحی اختصاصی", "پنل مدیریت"] },
            { title: "فروشگاهی", price: "5 میلیون", features: ["درگاه پرداخت", "محصولات نامحدود"] },
          ].map((plan, i) => (
            <div key={i} className="border rounded p-6 shadow bg-white">
              <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
              <p className="text-2xl text-blue-600 mb-4">{plan.price}</p>
              <ul className="text-right mb-4 space-y-2">
                {plan.features.map((f, j) => (
                  <li key={j} className="text-gray-600">✔️ {f}</li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                سفارش این پلن
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
