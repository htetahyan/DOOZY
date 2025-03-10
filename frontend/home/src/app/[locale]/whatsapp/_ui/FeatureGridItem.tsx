import Image from 'next/image';

interface FeatureGridItemProps {
  title: string;
  description: string;
  image: string;
}

export function FeatureGridItem({ title, description, image }: FeatureGridItemProps) {
  return (
    <div 
      className="bg-[#f9f9f9] rounded-2xl h-full overflow-hidden shadow-sm transition-shadow"
    >
      <div className="flex flex-col h-full">
        {/* Image */}
        <div className="relative h-[60%]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            {title}
          </h3>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
} 