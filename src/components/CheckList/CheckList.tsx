import { ChecklistType } from "@/types/product";
import Image from "next/image";

interface CheckListPropTypes {
    checklist: ChecklistType[];
}

const CheckList = ({checklist}: CheckListPropTypes) => {
    return (
        <div className='mt-9'>
            <h2 className='text-xl font-semibold'>এই কোর্সে যা থাকছে</h2>
            {
                checklist.map(check => <div key={check.id} className='flex items-center gap-3 my-3'>
                    <Image alt="" src={check.icon} width={100} height={100} className='w-5 h-5' />
                    <h4>{check.text}</h4>
                </div>)
            }
        </div>
    );
};

export default CheckList;