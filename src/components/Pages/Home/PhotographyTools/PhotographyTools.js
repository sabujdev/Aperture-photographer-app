import React from 'react';
import gears from '../../../../Asset/images/tools.jpeg'

const PhotographyTools = () => {
    return (
        <div className='flex flex-col md:flex-row bg-[#011924] px-3 py-16 md:py-0 text-white items-center justify-between'>
            <div className='flex-1 pt-10 md:p-20 order-2 md:order-1'>
                <p className='text-slate-300'>THE GEAR CAGE</p>
                <h3 className='text-4xl md:text-5xl pt-2 pb-5'>Tools that I use.</h3>
                <p className='text-slate-500'>The say that "no place is boring if you've had a good night's sleep and have a pocket full of unexposed film". While we don't shoot (a lot) of film these days — these are the tools that we actually use everyday to capture the amazing things around us.</p>
            </div>
            <div className='flex-1 order-1 md:order-2'>
                <img src={gears} alt="" />
            </div>
        </div>
    );
};

export default PhotographyTools;