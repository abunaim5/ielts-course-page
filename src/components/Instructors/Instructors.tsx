import { SectionType } from "@/types/product";
import Image from "next/image";

interface InstructorsPropTypes {
    data: SectionType;
}

const Instructors = ({ data }: InstructorsPropTypes) => {
    return (
        <section>
            <h2 className='text-2xl font-bold mb-4'>{data.name || 'Course Instructors'}</h2>
            <div className=''>
                {data.values?.map((instructor, idx) => (
                    <div key={idx} className='p-6 border flex items-center gap-4 rounded-md'>
                        {instructor.image && (
                            <Image
                                src={instructor.image}
                                alt={instructor.name || 'Instructor'}
                                width={500}
                                height={500}
                                className='w-fit h-20 object-cover rounded-full mb-4'
                            />
                        )}
                        <div>
                            <h3 className='text-xl font-semibold mb-2'>{instructor.name}</h3>
                            <div
                                className='text-sm'
                                dangerouslySetInnerHTML={{ __html: instructor.description || '' }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Instructors;