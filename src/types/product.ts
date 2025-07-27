export interface MediaType {
    name: string;
    resource_type: string;
    resource_value: string;
    thumbnail_url: string;
}

export interface ChecklistType {
    color: string;
    icon: string;
    id: string;
    list_page_visibility: boolean;
    text: string;
}

export interface SeoType {
    title: string;
    description: string;
    keywords: string[];
}

export interface CtaTextType {
    name: string;
    value: string;
}

export interface SectionType {
    type: string;
    name: string;
    order_idx: number;
    values: Array<{
        id: string;
        name: string;
        image: string;
        description: string;
        short_description: string;
        slug: string;
        text: string;
    }>;
}

export interface ProductDataType {
    slug: string;
    id: number;
    title: string;
    description: string;
    media: MediaType[];
    modality: string;
    platform: string;
    checklist: ChecklistType[];
    seo: SeoType[];
    cta_text: CtaTextType;
    sections: SectionType[];
}

export type ProductResponseType = {
    code: number;
    data: ProductDataType;
    message: string;
    status_code: number;
}