import { SeoType } from "@/types/product";
import Head from "next/head";

interface SeoHeadPropTypes {
    seo: SeoType;
}

const SeoHead = ({ seo }: SeoHeadPropTypes) => {
    return (
        <Head>
            <title>{seo.title}</title>
            <meta name='description' content={seo.description} />
            <meta name='keywords' content={seo.keywords.join(', ')} />
            {/* Default meta data */}
            {
                seo.defaultMeta.map((data, idx) => (<meta key={idx} name={data.type === 'name' ? 'description' : ''} property={data.value} content={data.content} />))
            }
            {/* Schema meta data */}
            {
                seo.schema
                    .filter(schemaData => schemaData.type === 'ld-json' && schemaData.meta_Value?.trim())
                    .map((schemaData, idx) => (
                        <script key={idx} type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaData.meta_Value }} />
                    ))
            }
        </Head>
    );
};

export default SeoHead;