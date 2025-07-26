
const getProductData = async (slug: string, lang: 'en' | 'bn' = 'en') => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${slug}?lang=${lang}`, {
        headers: {
            'X-TENMS-SOURCE-PLATFORM': 'web',
            Accept: 'application/json'
        }
    });

    if(!res.ok) throw new Error('failed to fetch product');

    return res.json();
};

export default getProductData;