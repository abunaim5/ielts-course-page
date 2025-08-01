import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { Button } from "../ui/button";

const Navbar = ({ locale }: { locale: string }) => {

    return (
        <nav className='py-3 px-4 xl:px-6 2xl:px-0'>
            <div className='w-full 2xl:w-3/4 mx-auto flex items-center justify-between'>
                <h1 className='text-2xl font-bold'>10MS</h1>
                <div className='space-x-8 hidden md:block'>
                    <span>Home</span>
                    <span>Skills</span>
                    <span>Admission</span>
                    <span>English Center</span>
                </div>
                <div className='space-x-4'>
                    <LanguageToggle currentLang={locale} />
                    <Button className='text-base font-semibold text-white bg-green-600 hover:bg-green-700'>Login</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;