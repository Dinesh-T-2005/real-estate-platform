import Image from "next/image";

export default function PropertyGallery() {
  return (
    <section className="bg-slate-50 pt-32 pb-12">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-6 lg:grid-cols-4">

          {/* Main Image */}
          <div className="relative h-[520px] overflow-hidden rounded-3xl lg:col-span-3">

            <Image
              src="/images/villa1.jpg"
              alt="Luxury Villa"
              fill
              className="object-cover transition duration-500 hover:scale-105"
              priority
            />

          </div>

          {/* Side Images */}
          <div className="grid gap-6">

            <div className="relative h-[245px] overflow-hidden rounded-3xl">

              <Image
                src="/images/villa2.jpg"
                alt="Villa"
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />

            </div>

            <div className="relative h-[245px] overflow-hidden rounded-3xl">

              <Image
                src="/images/apartment1.jpg"
                alt="Apartment"
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}