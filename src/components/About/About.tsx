import { SectionType } from "@/types/product";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

interface AboutPropTypes {
    data: SectionType;
}

const About = ({ data }: AboutPropTypes) => {
    return (
        <section>
            <h2 className='text-2xl font-bold mb-4'>{data.name}</h2>
            <div className='border rounded-md p-6'>
                <Accordion type='single' collapsible defaultValue='0'>
                    {
                        data.values.map((about, idx) => (<AccordionItem key={idx} value={`${idx}`}>
                            <AccordionTrigger className='text-base cursor-pointer'><div dangerouslySetInnerHTML={{ __html: about.title }} /></AccordionTrigger>
                            <AccordionContent>
                                <div dangerouslySetInnerHTML={{ __html: about.description }} />
                            </AccordionContent>
                        </AccordionItem>))
                    }
                </Accordion>
            </div>
        </section>
    );
};

export default About;