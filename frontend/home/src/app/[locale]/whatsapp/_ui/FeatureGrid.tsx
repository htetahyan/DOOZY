import { FeatureGridItem } from './FeatureGridItem';

interface FeatureGridProps {
  t: any;
}

export function FeatureGrid({ t }: FeatureGridProps) {
  const items = t.raw('items');

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* First Row */}
        <div className="flex h-[85vh] flex-col md:flex-row  mb-6 gap-[5%]">
          <div className="w-full md:w-[50%]">
            <FeatureGridItem {...items[0]} />
          </div>
          <div className="w-full md:w-[45%]">
            <FeatureGridItem {...items[1]} />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex h-[85vh] flex-col md:flex-row gap-[5%]">
          <div className="w-full md:w-[45%]">
            <FeatureGridItem {...items[2]} />
          </div>
          <div className="w-full md:w-[50%]">
            <FeatureGridItem {...items[3]} />
          </div>
        </div>
      </div>
    </section>
  );
} 