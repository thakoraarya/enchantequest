// import webpng from '../assets/homepageweb.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { HomeLinks } from '../components/links'
import { Link } from 'react-router-dom';
export function Home() {
    return (
        <>
            <section className={'flex md:flex-row flex-col justify-start md:justify-between xl:px-24 lg:px-16 md:px-10 px-4 xl:pt-[7.06rem] lg:pt-[5rem] md:pt-[4rem] h-full w-full relative overflow-y-hidden overflow-x-hidden'}>
                <div className='flex flex-col md:w-auto w-full h-full justify-between items-start md:py-8 py-2'>
                    <h3 className='text-gray100 md:text-[2rem] text-lg font-kaisei'>AI Story Generator</h3>
                    <div className='h-full flex flex-col items-start md:justify-end justify-start md:gap-y-10 gap-y-3'>
                        <div className='w-full flex justify-between items-center h-auto'>
                            <Link to={'/createstory'}>
                                <button
                                    className={'md:text-4xl text-xl text-gray600 flex justify-between gap-x-2 hover:gap-x-4 md:hover:text-eqred transition-all duration-700 ease-out items-center'}>Lets
                                    Make A Story <ArrowForwardIcon sx={{ color: '#9E0101' }} /></button>
                            </Link>
                            <button
                                className={'md:text-4xl text-xl text-gray600 font-flex md:hover:text-eqred transition-all duration-700 ease-out'}>Login
                            </button>
                        </div>
                        <div className={'h-min w-full '}>
                            <h1 className='font-kaisei md:text-[7rem] text-5xl lg:leading-[5.2rem] leading-[2.5rem]  text-gray100 text-left'>The <br /> Enchanted <br /> Quest
                            </h1>
                        </div>
                        <h2 className='font-kaisei md:text-6xl text-2xl text-gray500'>Quill Your Odyssy</h2>
                    </div>
                </div>

                <img loading={'eager'} className={'absolute inset-0 object-contain md:-right-[30rem] md:-inset-y-[14rem]'} src={'https://cloud.appwrite.io/v1/storage/buckets/655f53e08a4bdbbd88fb/files/655f5413966aa6e7cbe0/view?project=655e0bdd11e79ff324ed&mode=admin'}
                    alt={'homepage bg'} />

                <div className='w-full mdLml-4 md:min-w-[30rem] h-full md:ml-12 flex flex-col justify-start gap-y-2 relative'>
                    {/*first card*/}
                    <div
                        className="xl:w-64 lg:w-56 md:w-32 w-full md:absolute md:top-0 xl:right-40 lg:right-0 h-auto flex flex-col items-start p-2 bg-gray700 bg-opacity-30 rounded-xl border-2 border-stone-900 backdrop-blur-[11.70px]  justify-start  gap-2">
                        <div className="text-gray200 xl:text-lg lg:text-md md:text-base text-sm font-normal font-flex leading-relaxed">01
                        </div>
                        <div
                            className="text-gray200 xl:text-lg lg:text-md md:text-base text-sm md:text-left text-justify font-normal font-flex leading-relaxed">Engage
                            in captivating and personalized storytelling adventures in a mystical kingdom filled with
                            magical creatures, hidden treasures, and unforeseen challenges.
                        </div>
                    </div>
                    {/*second card*/}
                    <div
                        className="xl:w-64 lg:w-56 md:w-32 w-full md:absolute xl:top-72 lg:top-40 left-0 h-auto flex flex-col items-start p-2 bg-gray700 bg-opacity-30 rounded-xl border-2 border-stone-900 backdrop-blur-[11.70px]  justify-start  gap-2">
                        <div className="text-gray200 xl:text-lg lg:text-md md:text-base text-sm font-normal font-flex leading-relaxed">02
                        </div>
                        <div
                            className=" text-gray200 xl:text-lg lg:text-md md:text-base text-sm md:text-left text-justify font-normal font-flex leading-relaxed">
                            Engage in captivating and personalized storytelling adventures in a mystical kingdom filled
                            with magical creatures, hidden treasures, and unforeseen challenges.
                        </div>
                    </div>
                    {/*third card*/}
                    <div
                        className="md:max-w-[18rem] md:w-auto md:min-w-[15.6rem] w-full md:absolute bottom-[7rem] right-0 h-auto flex flex-col items-start p-2 bg-gray700 bg-opacity-30 rounded-xl border-2 border-stone-900 backdrop-blur-[11.70px]  justify-start  gap-2">
                        <div className="text-gray200 xl:text-lg lg:text-md md:text-base text-sm font-normal font-flex leading-relaxed">03
                        </div>
                        <div
                            className=' text-gray200 xl:text-lg lg:text-md md:text-base text-sm md:text-left text-justify font-normal font-flex leading-relaxed'>Save
                            your generated stories to the Appwrite database, building a collection of your magical
                            journeys. Share your enchanting tales with friends and revisit your favorite adventures
                            whenever you like.
                        </div>
                    </div>
                </div>

                <HomeLinks />
            </section>
        </>
    );
}