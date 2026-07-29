"use client";

import Image from "next/image";
import { Property } from "@/types/property";

interface Props {
  property: Property;
}

export default function PropertyGallery({ property }: Props) {
  const imageUrl = `http://localhost:8000${property.image}`;

  return (
    <section className="bg-slate-50 pb-12 pt-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-6 lg:grid-cols-4">

          {/* Main Image */}
          <div className="relative h-[520px] overflow-hidden rounded-3xl lg:col-span-3">

            <Image
              src={imageUrl}
              alt={property.title}
              fill
              unoptimized
              sizes="(max-width:1024px) 100vw, 75vw"
              className="object-cover transition duration-500 hover:scale-105"
              priority
            />

          </div>

          {/* Side Image 1 */}
          <div className="grid gap-6">

            <div className="relative h-[245px] overflow-hidden rounded-3xl">

              <Image
                src={imageUrl}
                alt={property.title}
                fill
                unoptimized
                sizes="25vw"
                className="object-cover transition duration-500 hover:scale-105"
              />

            </div>

            {/* Side Image 2 */}
            <div className="relative h-[245px] overflow-hidden rounded-3xl">

              <Image
                src={imageUrl}
                alt={property.title}
                fill
                unoptimized
                sizes="25vw"
                className="object-cover transition duration-500 hover:scale-105"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}