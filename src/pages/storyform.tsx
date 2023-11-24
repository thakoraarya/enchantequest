import Questions from '../components/question'
import { Links } from '../components/links'
import { questionsdata } from '../assets/questionsdata'
import { useForm } from 'react-hook-form'
import { stringify } from 'querystring'
import { useState } from 'react'
const Storyform = () => {

    return (
        <section className='bg-bgblob bg-gray800 h-screen flex flex-col-reverse justify-start items-center gap-y-9 w-full p-4'>
            <div className='overflow-y-scroll w-full h-full p-5 flex flex-col items-center justify-normal gap-y-3 border-2 border-gray700 bg-gray700/40 rounded-[2.75rem]'>
                <div className='flex flex-col items-start w-full gap-y-3'>
                    <div className="text-gray100 text-6xl font-normal font-['JejuMyeongjo']">Craft Your Captivating Narrative...</div>
                    <div className="text-gray100 text-4xl font-normal font-['JejuMyeongjo']">By answering the questions</div>
                </div>
                <form action="get" className='w-full flex flex-col gap-y-3'>

                    {questionsdata.map((data) => (< Questions
                        key={data.id}
                        qno={data.id}
                        question={data.question}
                        option1={data.option1}
                        option2={data.option2}
                        option3={data.option3}
                        option4={data.option4}
                    />))
                    }
                    <button type="submit" value='submit' className='w-full h-auto p-5 bg-red-800 rounded-3xl border border-stone-900 backdrop-blur-[11.70px] flex-col justify-center items-center gap-2 inline-flex text-gray100 text-4xl font-normal font-kaisei'>Unleash Your Creativity </button>

                </form>
            </div>
            <Links />
        </section>
    )
}

export default Storyform