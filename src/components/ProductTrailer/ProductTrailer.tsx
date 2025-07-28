import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { MediaType } from "@/types/product";

interface ProductTrailerPropTypes {
    media: MediaType[];
}

const ProductTrailer = ({ media }: ProductTrailerPropTypes) => {
    return (
        <Carousel className="w-full max-w-full">
            <CarouselContent>
                {
                    media.map((m, idx) => <CarouselItem key={idx} className='h-56 md:h-44 lg:h-56 bg-black'>
                        {
                            m.resource_type === 'video' ? <iframe
                                title='YouTube video player'
                                src={`https://www.youtube.com/embed/${m.resource_value}`}
                                className='h-full aspect-video'
                                referrerPolicy='strict-origin-when-cross-origin'
                                allowFullScreen
                            /> : <Image alt={m.name} src={m.resource_value} height={400} width={400} className='h-full w-full' />
                        }
                    </CarouselItem>)
                }
            </CarouselContent>
            <CarouselPrevious className='left-3' />
            <CarouselNext className='right-3' />
        </Carousel>
    );
};

export default ProductTrailer;