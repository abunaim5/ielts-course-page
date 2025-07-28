import { SectionType } from "@/types/product";
import { Check } from "lucide-react";

interface PointersPropTypes {
    data: SectionType
}

const Pointers = ({ data }: PointersPropTypes) => {
    return (
        <section>
            <h2 className='text-xl md:text-2xl font-bold mb-4'>{data.name}</h2>
            <div className='border rounded-md p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-8'>
                {data.values?.map((pointer, idx) => (
                    <div key={idx} className='flex gap-3'>
                        <Check className='min-w-5 h-5 text-green-500' />
                        <p>{pointer.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pointers;