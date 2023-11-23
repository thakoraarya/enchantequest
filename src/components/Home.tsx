// import webpng from '../assets/homepageweb.png'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function Home() {
    return (
        <>
            <section className={'flex px-24 pt-[7.06rem] h-full w-full relative overflow-y-hidden overflow-x-hidden'}>
                <div className='flex flex-col w-3/6 h-full justify-between items-start py-8'>
                    <h3 className='text-[#E1E1E1] text-[2rem] font-kaisei'>AI Story Generator</h3>
                    <div className='h-full  flex flex-col items-start justify-end gap-y-10'>
                        <div className='w-full flex justify-between items-center h-auto'>
                            <button
                                className={'text-4xl text-[#5A5A5A] flex justify-between gap-x-2 hover:gap-x-4 hover:text-[#9E0101] transition-all duration-700 ease-out items-center'}>Lets
                                Make A Story <ArrowForwardIcon sx={{color: '#9E0101'}}/></button>
                            <button
                                className={'text-4xl text-[#5A5A5A] font-flex hover:text-[#9E0101] transition-all duration-700 ease-out'}>Login
                            </button>
                        </div>
                        <div className={'h-min w-full '}>
                            <h1 className='font-kaisei text-[7rem] leading-[5.2rem] text-[#E1E1E1] text-left'>The <br/> Enchanted <br/> Quest
                            </h1>
                        </div>
                        <h2 className='font-kaisei text-6xl text-[#919191]'>Quill Your Odyssy</h2>
                    </div>
                </div>

                <img loading={'eager'} className={'absolute -right-[30rem] -top-[10rem]'} src={'https://cloud.appwrite.io/v1/storage/buckets/655f53e08a4bdbbd88fb/files/655f5413966aa6e7cbe0/view?project=655e0bdd11e79ff324ed&mode=admin'}
                     alt={'homepage bg'}/>

                <div className='w-full h-full relative'>
                    {/*first card*/}
                    <div
                        className="w-64 absolute top-0 right-40 h-auto flex flex-col items-start p-2 bg-[#1A1A1A] bg-opacity-30 rounded-xl border-2 border-stone-900 backdrop-blur-[11.70px]  justify-start  gap-2">
                        <div className="text-neutral-200 text-lg font-normal font-flex leading-relaxed">01
                        </div>
                        <div
                            className="text-neutral-200 text-lg text-left font-normal font-flex leading-relaxed">Engage
                            in captivating and personalized storytelling adventures in a mystical kingdom filled with
                            magical creatures, hidden treasures, and unforeseen challenges.
                        </div>
                    </div>
                    {/*second card*/}
                    <div
                        className="w-64 absolute  top-72 right-[22.8rem] h-auto flex flex-col items-start p-2 bg-[#1A1A1A] bg-opacity-30 rounded-xl border-2 border-stone-900 backdrop-blur-[11.70px]  justify-start  gap-2">
                        <div className="text-neutral-200 text-lg font-normal font-flex leading-relaxed">02
                        </div>
                        <div
                            className=" text-neutral-200 text-lg text-left font-normal font-flex leading-relaxed">
                            Engage in captivating and personalized storytelling adventures in a mystical kingdom filled
                            with magical creatures, hidden treasures, and unforeseen challenges.
                        </div>
                    </div>
                    {/*third card*/}
                    <div
                        className="w-72 absolute bottom-[7rem] right-0 h-auto flex flex-col items-start p-2 bg-[#1A1A1A] bg-opacity-30 rounded-xl border-2 border-stone-900 backdrop-blur-[11.70px]  justify-start  gap-2">
                        <div className="text-neutral-200 text-lg font-normal font-flex leading-relaxed">03
                        </div>
                        <div
                            className=' text-neutral-200 text-lg text-left font-normal font-flex leading-relaxed'>Save
                            your generated stories to the Appwrite database, building a collection of your magical
                            journeys. Share your enchanting tales with friends and revisit your favorite adventures
                            whenever you like.
                        </div>
                    </div>
                </div>

                <div
                    className='absolute bottom-0 right-0 flex justify-between w-auto h-auto px-24 py-6 gap-x-8 bg-zinc-900 bg-opacity-25 rounded-tl-[40px] border-l-2 border-t-2 border-stone-900 backdrop-blur-[12.10px] items-center gap-8'>

                    <a href='https://bento.me/thakoraarya' target={'_blank'} rel="noreferrer"
                       className='w-auto flex gap-x-2 border-transparent hover:border-[#9E0101] border-b-2 transition-all transform-all hover:-translate-y-2 duration-300 ease-in justify-between items-center text-neutral-200 text-[32px] font-normal font-flex leading-10'>
                        Figma <OpenInNewIcon/>
                    </a>
                    <a href='https://bento.me/thakoraarya' target={'_blank'} rel="noreferrer"
                       className='w-auto flex gap-x-2 border-transparent hover:border-[#9E0101] border-b-2 transition-all transform-all hover:-translate-y-2 duration-300 ease-in justify-between items-center text-neutral-200 text-[32px] font-normal font-flex leading-10'>
                        Github <OpenInNewIcon/>
                    </a>
                    <a href='https://bento.me/thakoraarya' target={'_blank'} rel="noreferrer"
                       className='box-border w-auto flex border-transparent hover:border-[#9E0101] transition-all duration-300 transform-all hover:-translate-y-2 ease-in border-b-2 gap-x-2 justify-between items-center text-neutral-200 text-[32px] font-normal font-flex leading-10'>
                        Bento <OpenInNewIcon/>
                    </a>

                </div>
            </section>
        </>
    );
}