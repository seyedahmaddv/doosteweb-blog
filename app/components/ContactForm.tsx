

export default function ContactForm() {
  return (
    <div>
        {/* فرم تماس */}
      <section className="bg-gray-100 py-16 px-5 text-center">
        <h2 className="text-3xl font-bold mb-8">درخواست مشاوره رایگان</h2>
        <form className="max-w-xl mx-auto grid gap-4 text-right">
          <input type="text" placeholder="نام و نام خانوادگی" className="p-3 rounded border" />
          <input type="tel" placeholder="شماره تماس" className="p-3 rounded border" />
          <textarea placeholder="پیام شما" rows={4} className="p-3 rounded border"></textarea>
          <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            ارسال پیام
          </button>
        </form>
      </section>
    </div>
  )
}
