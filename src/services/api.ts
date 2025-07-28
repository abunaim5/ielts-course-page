const getProductData = async (slug: string, locale: 'en' | 'bn' = 'en') => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${slug}?lang=${locale}`, {
            headers: {
                'X-TENMS-SOURCE-PLATFORM': 'web',
                Accept: 'application/json'
            },
            // ISR: Revalidate every 60 second
            next: { revalidate: 60 }
        });

        if (!res.ok) throw new Error('failed to fetch product');

        return res.json();
    } catch (err) {
        console.error(err);
    }
};

export default getProductData;