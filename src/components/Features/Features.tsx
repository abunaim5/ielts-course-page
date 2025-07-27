import { SectionType } from "@/types/product";
import Image from "next/image";

interface FeaturesPropTypes {
    data: SectionType;
}

const Features = ({ data }: FeaturesPropTypes) => {
    return (
        <section>
            <h2 className='text-2xl font-bold mb-4'>{data.name}</h2>
            <div className='bg-black rounded-md p-6 grid grid-cols-2 gap-8'>
                {data.values?.map((feature, idx) => (
                    <div key={idx} className='flex gap-3'>
                        <Image alt={`${feature.title} icon`} src={feature.icon} width={100} height={100} className='w-10 h-10' />
                        <div className='text-white'>
                            <h3 className='text-lg font-semibold'>{feature.title}</h3>
                            <h6 className='text-gray-400'>{feature.subtitle}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;