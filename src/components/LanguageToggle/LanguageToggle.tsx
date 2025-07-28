'use client'
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";

const LanguageToggle = ({ currentLang }: { currentLang: string }) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleToggleLang = () => {
        const newLang = currentLang === 'en' ? 'bn' : 'en';
        const splitPath = pathname.split('/');
        splitPath[1] = newLang;
        router.push(splitPath.join('/'));
    }
    // console.log(pathname)

    return (
        <Button variant='outline' className='cursor-pointer' onClick={handleToggleLang}>
            <span className='flex items-center'><sup>অ</sup><sub>A</sub></span> <span className='text-base'>{currentLang === 'en' ? 'বাং' : 'EN'}</span>
        </Button>
    );
};

export default LanguageToggle;