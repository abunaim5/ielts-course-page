import { Button } from "../ui/button";

const Navbar = () => {
    return (
        <nav className='py-3'>
            <div className='w-3/4 mx-auto flex items-center justify-between'>
                <h1 className='text-2xl font-bold'>10MS</h1>
                <div className='space-x-8'>
                    <span>Home</span>
                    <span>Skills</span>
                    <span>Admission</span>
                    <span>English Center</span>
                </div>
                <Button className='text-base font-semibold text-white bg-green-600'>Login</Button>
            </div>
        </nav>
    );
};

export default Navbar;