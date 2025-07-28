import { SectionType } from "@/types/product";
import { Check } from "lucide-react";
import Image from "next/image";

interface ExclusivePropTypes {
    data: SectionType;
}

const ExclusiveFeatures = ({ data }: ExclusivePropTypes) => {
    return (
        <section>
            <h2 className='text-xl md:text-2xl font-bold mb-4'>{data.name}</h2>
            <div className='border rounded-md p-4 md:p-6'>
                {data.values?.map((feature, idx) => (
                    <div key={idx} className={`flex flex-col md:flex-row justify-between gap-3 py-6 ${idx === 0 ? 'border-b' : ''}`}>
                        <div className='space-y-3'>
                            <h3>{feature.title}</h3>
                            {
                                feature.checklist.map((checkData, idx) => (<div key={idx} className='flex gap-3'>
                                    <Check className='min-w-5 h-5 text-green-500' />
                                    <p>{checkData}</p>
                                </div>))
                            }
                        </div>
                        <Image alt={`${feature.title} icon`} src={feature.file_url} width={100} height={100} className='w-full max-w-56 h-fit' />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExclusiveFeatures;