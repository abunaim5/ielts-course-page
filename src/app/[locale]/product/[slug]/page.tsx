import About from "@/components/About/About";
import CheckList from "@/components/CheckList/CheckList";
import ExclusiveFeatures from "@/components/ExclusiveFeatures/ExclusiveFeatures";
import Features from "@/components/Features/Features";
import Instructors from "@/components/Instructors/Instructors";
import Navbar from "@/components/Navbar/Navbar";
import Pointers from "@/components/Pointers/Pointers";
import ProductTrailer from "@/components/ProductTrailer/ProductTrailer";
import SeoHead from "@/components/SeoHead/SeoHead";
import { Button } from "@/components/ui/button";
import getProductData from "@/services/api";
import { ProductResponseType } from "@/types/product";

interface ProductPageProps {
    params: { slug: string, locale: 'en' | 'bn' };
}

const Product = async ({ params }: ProductPageProps) => {
    const { slug, locale } = await Promise.resolve(params);
    const { data }: ProductResponseType = await getProductData(slug, locale);
    const instructors = data.sections.find(section => section.type === 'instructors');
    const features = data.sections.find(section => section.type === 'features');
    const pointers = data.sections.find(section => section.type === 'pointers');
    const exclusiveFeatures = data.sections.find(section => section.type === 'feature_explanations');
    const about = data.sections.find(section => section.type === 'about');
    // console.log(instructors)
    // console.log(data)

    return (
        <>
            <SeoHead seo={data.seo} />
            <Navbar locale={locale} />
            <main>
                <section className='h-72 bg-black py-10'>
                    <div className='w-4/6 h-full mx-auto relative content-center'>
                        <div className=''>
                            <h1 className='text-4xl font-bold text-white'>{data.title}</h1>
                            <div className='mt-2 max-w-5/8 text-gray-300' dangerouslySetInnerHTML={{ __html: data.description }} />
                        </div>
                        {/* product trailer, CTA and course checklist section */}
                        <div className='w-[400px] border p-1 bg-white absolute right-0 top-0'>
                            <ProductTrailer media={data.media} />
                            <div className='px-3 mt-6'>
                                <div className='mb-6 flex items-center gap-3'>
                                    <h2 className='text-2xl font-semibold'>&#x09F3;1000</h2>
                                    <h2 className='text-xl line-through text-gray-600'>&#x09F3;2000</h2>
                                </div>
                                <Button className='w-full text-base font-semibold border-b-4 border-green-700 bg-green-600 hover:bg-green-700'>{data.cta_text.name}</Button>
                                <CheckList checklist={data.checklist} />
                            </div>
                        </div>
                    </div>
                </section>
                <div className='w-4/6 mx-auto py-10'>
                    <div className='max-w-5/8 space-y-10'>
                        {instructors && <Instructors data={instructors} />}
                        {features && <Features data={features} />}
                        {pointers && <Pointers data={pointers} />}
                        {exclusiveFeatures && <ExclusiveFeatures data={exclusiveFeatures} />}
                        {about && <About data={about} />}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Product;