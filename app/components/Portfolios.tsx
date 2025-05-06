import Image from 'next/image'

export default function Portfolios() {
  return (
    <div>
        {/* نمونه کارها */}
      <section className="bg-gray-50 py-16 px-5 text-center">
        <h2 className="text-3xl font-bold mb-10">نمونه‌کارها</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white shadow rounded overflow-hidden">
              <Image
                src={`/portfolio/demo${i}.jpg`}
                alt={`نمونه ${i}`}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-right">
                <h3 className="font-semibold mb-2">نمونه پروژه {i}</h3>
                <p className="text-sm text-gray-600">توضیح کوتاه درباره پروژه</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
