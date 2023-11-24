import React from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const HomeLinks = () => {
    return (
        <div
            className='absolute bottom-0 right-0 flex justify-between w-auto h-auto xl:px-24 lg:px-16 md:px-10 px-8 py-6 gap-x-8 bg-zinc-900 bg-opacity-25 rounded-tl-[40px] border-l-2 border-t-2 border-stone-900 backdrop-blur-[12.10px] items-center gap-8'>

            <a href='https://www.figma.com/file/NJAmGpalxDSyaEakL0hppa/hackathons?type=design&node-id=448-5&mode=design' target={'_blank'} rel="noreferrer"
                className='w-auto flex gap-x-2 border-transparent hover:border-eqred border-b-2 transition-all transform-all hover:-translate-y-2 duration-300 ease-in justify-between items-center text-gray200 text-[32px] font-normal font-flex leading-10'>
                Figma <OpenInNewIcon />
            </a>
            <a href='https://github.com/thakoraarya/enchantequest' target={'_blank'} rel="noreferrer"
                className='w-auto flex gap-x-2 border-transparent hover:border-eqred border-b-2 transition-all transform-all hover:-translate-y-2 duration-300 ease-in justify-between items-center text-gray200 text-[32px] font-normal font-flex leading-10'>
                Github <OpenInNewIcon />
            </a>
            <a href='https://bento.me/thakoraarya' target={'_blank'} rel="noreferrer"
                className='box-border w-auto flex border-transparent group hover:border-eqred transition-all duration-300 transform-all hover:-translate-y-2 ease-in border-b-2 gap-x-2 justify-between items-center text-gray200 text-[32px] font-normal font-flex leading-10'>
                Bento <OpenInNewIcon />
                <iframe loading='eager' src='https://bento.me/thakoraarya' className='hidden border-2 border-eqred group-hover:block absolute h-96 bg-gradient-to-b from-red-100 via-white transition-all duration-300 ease-out group-hover:hover:h-[40rem] delay-300 to-white scroll-smooth p-5 bottom-10 right-0 rounded-xl w-96' />

            </a>

        </div>
    )
}
const Links = () => {
    return (
        <div
            className='flex justify-center px-10 w-min h-auto py-3 gap-x-8 bg-zinc-900 bg-opacity-25 rounded-full border-2 border-stone-900 backdrop-blur-[12.10px] items-center gap-6'>

            <a href='https://www.figma.com/file/NJAmGpalxDSyaEakL0hppa/hackathons?type=design&node-id=448-5&mode=design' target={'_blank'} rel="noreferrer"
                className='w-auto flex gap-x-2 border-transparent  hover:border-eqred border-b-2 transition-all transform-all hover:-translate-y-2 duration-300 ease-in justify-between items-center text-gray200 text-lg font-normal font-flex leading-10'>
                Figma <OpenInNewIcon />

            </a>
            <a href='https://github.com/thakoraarya/enchantequest' target={'_blank'} rel="noreferrer"
                className='w-auto flex gap-x-2 border-transparent  hover:border-eqred border-b-2 transition-all transform-all hover:-translate-y-2 duration-300 ease-in justify-between items-center text-gray200 text-lg font-normal font-flex leading-10'>
                Github <OpenInNewIcon />


            </a>
            <a href='https://bento.me/thakoraarya' target={'_blank'} rel="noreferrer"
                className='box-border w-auto flex group border-transparent hover:border-eqred transition-all duration-300 transform-all hover:-translate-y-2 ease-in border-b-2 gap-x-2  justify-between items-center text-gray200 text-lg font-normal font-flex leading-10'>
                Bento <OpenInNewIcon />

                <iframe loading='eager' src='https://bento.me/thakoraarya' className='hidden border-2 border-eqred group-hover:block absolute h-96 bg-gradient-to-b from-red-100 via-white transition-all duration-300 ease-out group-hover:hover:h-[40rem] delay-300 to-white scroll-smooth p-5 top-10 rounded-xl w-96' />
            </a>

        </div>
    )
}

export { HomeLinks, Links }