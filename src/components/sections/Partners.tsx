import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { partnersData, partnersContent } from "@/data/partners";

export default function Partners() {
  return (
    <section className="section-padding-connected-top section-padding bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-lg sm:text-xl font-medium text-gray-700 mb-2">
            {partnersContent.subtitle}
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {partnersContent.title}
          </h2>
        </div>
        
        <div className="overflow-hidden">
          <Marquee
            pauseOnHover
            className="[--duration:25s]"
          >
            {partnersData.map((partner) => (
              <div key={partner.name} className="relative h-16 w-auto mx-8 opacity-60 hover:opacity-100 transition-opacity" style={{ width: `${partner.width}px` }}>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes={`${partner.width}px`}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </Marquee>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            {partnersContent.description}
          </p>
        </div>
      </div>
    </section>
  );
}