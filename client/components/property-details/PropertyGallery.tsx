"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Property } from "@/types/property";
import { getPropertyGallery } from "@/lib/api";

interface GalleryImage {
  id: string;
  image: string;
}

interface Props {
  property: Property;
}

export default function PropertyGallery({ property }: Props) {
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState(property.image);

  useEffect(() => {
    setSelectedImage(property.image);

    async function loadGallery() {
      try {
        const images = await getPropertyGallery(property.id);
        setGallery(images);
      } catch (error) {
        console.error(error);
      }
    }

    loadGallery();
  }, [property]);

  return (
    <section className="bg-slate-50 pb-12 pt-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-6 lg:grid-cols-4">

          {/* Main Image */}

          <div className="relative h-[520px] overflow-hidden rounded-3xl lg:col-span-3">

            <Image
              src={`http://localhost:8000${selectedImage}`}
              alt={property.title}
              fill
              unoptimized
              priority
              sizes="(max-width:1024px) 100vw, 75vw"
              className="object-cover transition duration-500 hover:scale-105"
            />

          </div>

          {/* Gallery */}

          <div className="space-y-4">

            {/* Main Image Thumbnail */}

            <div
              className="relative h-28 cursor-pointer overflow-hidden rounded-2xl border-2 border-blue-600"
              onClick={() => setSelectedImage(property.image)}
            >
              <Image
                src={`http://localhost:8000${property.image}`}
                alt={property.title}
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            {/* Gallery Images */}

            {gallery.map((img) => (
              <div
                key={img.id}
                className="relative h-28 cursor-pointer overflow-hidden rounded-2xl"
                onClick={() => setSelectedImage(img.image)}
              >
                <Image
                  src={`http://localhost:8000${img.image}`}
                  alt="Gallery"
                  fill
                  unoptimized
                  className="object-cover transition hover:scale-105"
                />
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}