import About from "@/components/About/About";
import CallToAction from "@/components/CallToAction/CallToAction";
import CheckList from "@/components/CheckList/CheckList";
import ExclusiveFeatures from "@/components/ExclusiveFeatures/ExclusiveFeatures";
import Features from "@/components/Features/Features";
import Instructors from "@/components/Instructors/Instructors";
import Navbar from "@/components/Navbar/Navbar";
import Pointers from "@/components/Pointers/Pointers";
import ProductTrailer from "@/components/ProductTrailer/ProductTrailer";
import SeoHead from "@/components/SeoHead/SeoHead";
import getProductData from "@/services/api";
import { ProductResponseType } from "@/types/product";

interface ProductPageProps {
    params: { slug: string, locale: string };
}

const Product = async ({ params }: ProductPageProps) => {
    const { slug, locale } = params;
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
                <section className='min-h-72 bg-black py-10 px-4 xl:px-0'>
                    <div className='w-full xl:w-5/6 2xl:w-4/6 min-h-72 mx-auto relative content-center'>
                        <div className='md:hidden'>
                            <ProductTrailer media={data.media} />
                        </div>
                        <div className='max-w-max md:max-w-6/12 lg:max-w-7/12 xl:max-w-max mt-8 md:mt-0'>
                            <h1 className='text-2xl md:text-4xl font-bold text-white'>{data.title}</h1>
                            <div className='mt-2 max-w-max xl:max-w-5/8 text-gray-300' dangerouslySetInnerHTML={{ __html: data.description }} />
                        </div>
                        {/* product trailer, CTA and course checklist section */}
                        <div className='hidden md:block w-80 lg:w-[400px] border p-1 bg-white absolute right-0 top-0'>
                            <ProductTrailer media={data.media} />
                            <div className='px-3 mt-6'>
                                <div className='mb-6 flex items-center gap-3'>
                                    <h2 className='text-2xl font-semibold'>&#x09F3;1000</h2>
                                    <h2 className='text-xl line-through text-gray-600'>&#x09F3;2000</h2>
                                </div>
                                <CallToAction data={data.cta_text} />
                                <CheckList checklist={data.checklist} />
                            </div>
                        </div>
                    </div>
                </section>
                <div className='w-full xl:w-5/6 2xl:w-4/6 mx-auto py-10 px-4 xl:px-0'>
                    <div className='w-full md:max-w-6/12 lg:max-w-7/12 xl:max-w-5/8 space-y-10'>
                        <div className='md:hidden'>
                            <div className='mb-6 flex items-center gap-3'>
                                <h2 className='text-2xl font-semibold'>&#x09F3;1000</h2>
                                <h2 className='text-xl line-through text-gray-600'>&#x09F3;2000</h2>
                            </div>
                            <CallToAction data={data.cta_text} />
                            <CheckList checklist={data.checklist} />
                        </div>
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