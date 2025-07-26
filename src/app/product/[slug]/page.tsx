import getProductData from "@/services/api";
import { ProductResponseType } from "@/types/product";

interface ProductPageProps {
    params: { slug: string };
    searchParams: { lang?: 'en' | 'bn' };
}

const Product = async ({ params, searchParams }: ProductPageProps) => {
    const { lang } = await Promise.resolve(searchParams);
    const { slug } = await Promise.resolve(params);
    const product: ProductResponseType = await getProductData(slug, lang);
    console.log(product.data)

    return (
        <div>
            <h1>{product.data.title}</h1>
        </div>
    );
};

export default Product;