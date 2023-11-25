import React from 'react'
import { dotPulse } from 'ldrs'
export const Storyformloader = () => {
    dotPulse.register()
    return (
        // <div className="bg-bgblob w-full h-full px-24 py-5 flex-col-reverse text-transparent justify-start items-center gap-9 inline-flex">
        //     <div className="w-full h-full relative bg-neutral-900/20 blur-[200px]">
        //         <div className="w-full h-full left-[1327.08px] top-[437.42px] absolute origin-top-left rotate-[-163deg] bg-amber-200 bg-opacity-70 rounded-full"></div>
        //         <div className="w-full h-full left-[253.79px] top-[269px] absolute origin-top-left rotate-[25deg] bg-orange-200 bg-opacity-70 rounded-full"></div>
        //         <div className="w-full h-full left-[981.42px] top-[781px] absolute origin-top-left rotate-[28deg] bg-green-300 rounded-full"></div>
        //     </div>
        //     <div className="self-stretch grow shrink basis-0 p-5 bg-stone-900 bg-opacity-40 rounded-[44px] border-2 border-stone-900 backdrop-blur-[11.70px] flex-col justify-start items-start gap-3 flex">
        //         <div className="flex-col justify-start items-start gap-3 flex">
        //             <div className="text-transparent text-[56px] font-normal font-['JejuMyeongjo']">Craft Your Captivating Narrative...</div>
        //             <div className="text-transparent text-[34px] font-normal font-['JejuMyeongjo']">By answering the questions</div>
        //         </div>
        //         <div className="self-stretch h-[341px] p-3 bg-neutral-700 bg-opacity-30 rounded-3xl border border-stone-900 backdrop-blur-[11.70px] flex-col justify-start items-start gap-2 flex">
        //             <div className="text-transparent text-lg font-normal font-flex leading-relaxed">01</div>
        //             <div className="self-stretch text-transparent text-2xl font-normal font-flex leading-[35.16px]">Who is the main character, and what defines them?</div>
        //             <div className="self-stretch h-60 flex-col justify-start items-start gap-3 flex">
        //                 <div className="self-stretch px-5 py-2.5 bg-zinc-900 bg-opacity-30 rounded-xl border border-stone-900 backdrop-blur-[11.70px] justify-start items-center gap-2 inline-flex">
        //                     <div className="grow shrink basis-0 h-[26px] text-transparent text-lg font-normal font-flex leading-relaxed">A brave adventurer</div>
        //                 </div>
        //                 <div className="self-stretch px-5 py-2.5 bg-zinc-900 bg-opacity-30 rounded-xl border border-stone-900 backdrop-blur-[11.70px] justify-start items-center gap-2 inline-flex">
        //                     <div className="w-[1144px] self-stretch text-transparent text-lg font-normal font-flex leading-relaxed">An aspiring artist</div>
        //                 </div>
        //                 <div className="self-stretch h-[66px] p-5 bg-zinc-900 bg-opacity-30 rounded-xl border border-stone-900 backdrop-blur-[11.70px] flex-col justify-center items-start gap-2 flex">
        //                     <div className="self-stretch h-[26px] text-transparent text-lg font-normal font-flex leading-relaxed">Express your imagination</div>
        //                 </div>
        //                 <div className="self-stretch h-[66px] p-5 bg-zinc-900 bg-opacity-30 rounded-xl border border-stone-900 backdrop-blur-[11.70px] flex-col justify-center items-start gap-2 flex">
        //                     <div className="self-stretch h-[26px] text-transparent text-lg font-normal font-flex leading-relaxed">Express your imagination</div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="self-stretch h-[341px] p-3 bg-neutral-700 bg-opacity-30 rounded-3xl border border-stone-900 backdrop-blur-[11.70px] flex-col justify-start items-start gap-2 flex">
        //             <div className="text-transparent text-lg font-normal font-flex leading-relaxed">01</div>
        //             <div className="self-stretch text-transparent text-2xl font-normal font-flex leading-[35.16px]">Who is the main character, and what defines them?</div>
        //             <div className="self-stretch h-60 flex-col justify-start items-start gap-3 flex">
        //                 <div className="self-stretch px-5 py-2.5 bg-zinc-900 bg-opacity-30 rounded-xl border border-stone-900 backdrop-blur-[11.70px] justify-start items-center gap-2 inline-flex">
        //                     <div className="w-[1144px] self-stretch text-transparent text-lg font-normal font-flex leading-relaxed">A brave adventurer</div>
        //                 </div>
        //                 <div className="self-stretch px-5 py-2.5 bg-zinc-900 bg-opacity-30 rounded-xl border border-stone-900 backdrop-blur-[11.70px] justify-start items-center gap-2 inline-flex">
        //                     <div className="w-[1144px] self-stretch text-transparent text-lg font-normal font-flex leading-relaxed">An aspiring artist</div>
        //                 </div>
        //                 <div className="self-stretch px-5 py-2.5 bg-zinc-900 bg-opacity-30 rounded-xl border border-stone-900 backdrop-blur-[11.70px] justify-start items-center gap-2 inline-flex">
        //                     <div className="w-[1144px] self-stretch text-transparent text-lg font-normal font-flex leading-relaxed">A scientist on a mission</div>
        //                 </div>
        //                 <div className="self-stretch h-[66px] p-5 bg-zinc-900 bg-opacity-30 rounded-xl border border-stone-900 backdrop-blur-[11.70px] flex-col justify-center items-start gap-2 flex">
        //                     <div className="self-stretch h-[26px] text-transparent text-lg font-normal font-flex leading-relaxed">Here the user will be able to enter what the imagination is expressing....</div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="self-stretch h-[341px] p-3 bg-neutral-700 bg-opacity-30 rounded-3xl border border-stone-900 backdrop-blur-[11.70px] flex-col justify-start items-start gap-2 flex">
        //             <div className="text-transparent text-lg font-normal font-flex leading-relaxed">01</div>
        //             <div className="self-stretch text-transparent text-2xl font-normal font-flex leading-[35.16px]">Who is the main character, and what defines them?</div>
        //             <div className="self-stretch h-60 flex-col justify-start items-start gap-3 flex">
        //                 <div className="self-stretch h-[46px] px-5 py-2.5 bg-zinc-900 bg-opacity-30 rounded-xl border border-stone-900 backdrop-blur-[11.70px] flex-col justify-center items-start gap-2 flex">
        //                     <div className="self-stretch h-[26px] text-transparent text-lg font-normal font-flex leading-relaxed">A brave adventurer</div>
        //                 </div>
        //                 <div className="self-stretch h-[46px] px-5 py-2.5 bg-zinc-900 bg-opacity-30 rounded-xl border border-stone-900 backdrop-blur-[11.70px] flex-col justify-center items-start gap-2 flex">
        //                     <div className="self-stretch h-[26px] text-transparent text-lg font-normal font-flex leading-relaxed">An aspiring artist</div>
        //                 </div>
        //                 <div className="self-stretch h-[46px] px-5 py-2.5 bg-red-800 rounded-xl border border-stone-900 backdrop-blur-[11.70px] flex-col justify-center items-start gap-2 flex">
        //                     <div className="self-stretch h-[26px] text-transparent text-lg font-normal font-flex leading-relaxed">A scientist on a mission</div>
        //                 </div>
        //                 <div className="self-stretch h-[66px] p-5 bg-zinc-900 bg-opacity-30 rounded-xl border border-stone-900 backdrop-blur-[11.70px] flex-col justify-center items-start gap-2 flex">
        //                     <div className="self-stretch h-[26px] text-transparent text-lg font-normal font-flex leading-relaxed">Express your imagination</div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="px-10 py-2.5 bg-stone-900 bg-opacity-30 rounded-[30px] border-2 border-stone-900 backdrop-blur-[200px] justify-center items-center gap-6 inline-flex">
        //         <div className="justify-end items-center gap-2 flex">
        //             <div className="text-transparent text-lg font-normal font-flex leading-relaxed">Figma</div>
        //             <div className="w-[18px] h-[18px] relative">
        //                 <div className="w-[18px] h-[18px] left-0 top-0 absolute bg-zinc-300"></div>
        //             </div>
        //         </div>
        //         <div className="justify-end items-center gap-2 flex">
        //             <div className="text-transparent text-lg font-normal font-flex leading-relaxed">Github</div>
        //             <div className="w-[18px] h-[18px] relative">
        //                 <div className="w-[18px] h-[18px] left-0 top-0 absolute bg-zinc-300"></div>
        //             </div>
        //         </div>
        //         <div className="justify-end items-center gap-2 flex">
        //             <div className="text-transparent text-lg font-normal font-flex leading-relaxed">Bento</div>
        //             <div className="w-[18px] h-[18px] relative">
        //                 <div className="w-[18px] h-[18px] left-0 top-0 absolute bg-zinc-300"></div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='h-screen w-screen bg-gray900 flex justify-center items-center'>
            <p className='font-kaisei text-5xl uppercase animate-pulse text-center text-eqred'>loading
                <l-dot-pulse
                    size="43"
                    speed="1.3"
                    color="#9E0101"
                ></l-dot-pulse>
            </p>
        </div>

    )
}
