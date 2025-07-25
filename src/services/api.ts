import getAxiosPublic from "@/lib/axiosPublic";

const getProductData = async (lang: 'en' | 'bn' = 'en') => {
    const axiosPublic = getAxiosPublic();

    const res = await axiosPublic.get('/products/ielts-course', {
        params: { lang },
        headers: {
            'X-TENMS-SOURCE-PLATFORM': 'web',
            'Accept': 'application/json'
        }
    });

    return res.data;
};

export default getProductData;