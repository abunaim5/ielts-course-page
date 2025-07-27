import Features from "@/components/Features/Features";
import Instructors from "@/components/Instructors/Instructors";
import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import getProductData from "@/services/api";
import { ProductResponseType } from "@/types/product";
import Image from "next/image";

interface ProductPageProps {
    params: { slug: string };
    searchParams: { lang?: 'en' | 'bn' };
}

const Product = async ({ params, searchParams }: ProductPageProps) => {
    const { lang } = await Promise.resolve(searchParams);
    const { slug } = await Promise.resolve(params);
    const { data }: ProductResponseType = await getProductData(slug, lang);
    const instructors = data.sections.find(section => section.type === 'instructors');
    const features = data.sections.find(section => section.type === 'features');
    // console.log(instructors)
    // console.log(data)

    return (
        <>
            <Navbar />
            <section className='h-72 bg-black py-10'>
                <div className='w-4/6 h-full mx-auto relative content-center'>
                    <div className=''>
                        <h1 className='text-4xl font-bold text-white'>{data.title}</h1>
                        <div className='mt-2 max-w-5/8 text-gray-300' dangerouslySetInnerHTML={{ __html: data.description }} />
                    </div>
                    <div className='w-[400px] border p-1 bg-white absolute right-0 top-0'>
                        {
                            <Carousel className="w-full max-w-full">
                                <CarouselContent>
                                    {
                                        data.media.map((m, idx) => <CarouselItem key={idx} className='h-56 bg-black'>
                                            {
                                                m.resource_type === 'video' ? <iframe
                                                    title='YouTube video player'
                                                    src={`https://www.youtube.com/embed/${m.resource_value}`}
                                                    className='h-full aspect-video'
                                                    // allow="accelerometer; autoplay; clipboard-write; picture-in-picture; web-share"
                                                    referrerPolicy='strict-origin-when-cross-origin'
                                                    allowFullScreen
                                                /> : <Image alt={m.name} src={m.resource_value} height={500} width={500} className='max-h-56 w-full' />
                                            }
                                        </CarouselItem>)
                                    }
                                </CarouselContent>
                                <CarouselPrevious className='left-3' />
                                <CarouselNext className='right-3' />
                            </Carousel>
                        }
                        <div className='px-3 mt-6'>
                            <div className='mb-6 flex items-center gap-3'>
                                <h2 className='text-2xl font-semibold'>&#x09F3;1000</h2>
                                <h2 className='text-xl line-through text-gray-600'>&#x09F3;2000</h2>
                            </div>
                            <Button className='w-full text-base font-semibold border-b-4 border-green-700 bg-green-600 hover:bg-green-700'>{data.cta_text.name}</Button>
                            <div className='mt-9'>
                                <h2 className='text-xl font-semibold'>এই কোর্সে যা থাকছে</h2>
                                {
                                    data.checklist.map(check => <div key={check.id} className='flex items-center gap-3 my-3'>
                                        <Image alt="" src={check.icon} width={100} height={100} className='w-5 h-5' />
                                        <h4>{check.text}</h4>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='w-4/6 mx-auto py-10'>
                <div className='max-w-5/8 space-y-8'>
                    {instructors && <Instructors data={instructors} />}
                    {features && <Features data={features} />}
                </div>
            </div>
        </>
    );
};

export default Product;