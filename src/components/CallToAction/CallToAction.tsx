import { CtaTextType } from "@/types/product";
import { Button } from "../ui/button";

interface CTAPropTypes {
    data: CtaTextType;
}

const CallToAction = ({ data }: CTAPropTypes) => {
    return (
        <Button className='w-full text-base font-semibold border-b-4 border-green-700 bg-green-600 hover:bg-green-700'>{data.name}</Button>
    );
};

export default CallToAction;