import { useState } from "react";


function NavigationBar(){

    const [isClicked, setIsClicked] = useState(null);

    const handleClick = (navLink) => {
        setIsClicked(navLink);
    };

    return <div className="bg-neutral-500 p-4 fixed w-full top-0 left-0 z-10 font-semibold">
        <div className="container mx-auto flex justify-between items-center">
            <nav class="main-nav">
                <ul className="flex space-x-8">
                    <li><a href="#" className="text-white hover:text-slate-950">WordSeek</a></li>
                    <li><a href="#" className="text-white hover:text-slate-950">User Guide</a></li>  
                    <li><a href="#" className="text-white hover:text-slate-950">Admin Guide</a></li>
                </ul>
            </nav>
        </div>
    </div>
};

export default NavigationBar;