import Questions from '../components/question'
// import { questionsdata } from '../assets/questionsdata'
import { useEffect, useState } from 'react'
import { Client, Databases } from 'appwrite'
import { Links } from '../components/links';
import { Storyformloader } from '../loaders/storyformloader';
interface questionsprops {
    Question: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    id: number;
}




const Storyform = () => {
    const [loading, setLoading] = useState(true)
    const [QuestionDocuments, setQuestionDocuments] = useState<questionsprops[]>([]);
    const dbid = '655f403b2d6d9367440d';
    const colid = '656118f6a61ce384d2e6';
    const client = new Client();
    const dbss = new Databases(client);
    client.setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('655e0bdd11e79ff324ed');

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await dbss.listDocuments(dbid, colid);
                const qs = response.documents.map((doc: Record<string, any>) => ({
                    Question: doc.question,
                    option1: doc.option1,
                    option2: doc.option2,
                    option3: doc.option3,
                    option4: doc.option4,
                    id: doc.id, // Store the document ID
                }));
                setQuestionDocuments(qs);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false); // Set loading to false after fetching data
            }

        };
        fetchQuestions();
    })



    return (
        !loading ? (<section className='bg-bgblob bg-gray800 h-screen flex flex-col-reverse justify-start items-center gap-y-9 w-full p-4'>
            <div className='overflow-y-scroll w-full h-full p-5 flex flex-col items-center justify-normal gap-y-3 border-2 border-gray700 bg-gray700/40 rounded-[2.75rem]'>
                <div className='flex flex-col items-start w-full gap-y-3 '>
                    <div className="text-gray100 lg:text-6xl md:text-4xl text-2xl font-normal font-kaisei">Craft Your Captivating Narrative...</div>
                    <div className="text-gray100 lg:text-4xl md:text-2xl text-lg font-normal font-kaisei">By answering the questions</div>
                </div>
                <form action="post" className='w-full flex flex-col gap-y-3'>

                    {(QuestionDocuments.map((data) => (< Questions
                        key={data.id}
                        qno={data.id}
                        question={data.Question}
                        option1={data.option1}
                        option2={data.option2}
                        option3={data.option3}
                        option4={data.option4}
                    />)))
                    }
                    <button type="submit" value='submit' className='w-full h-auto p-5 bg-red-800 rounded-3xl border border-stone-900 backdrop-blur-[11.70px] flex-col justify-center items-center gap-2 inline-flex text-gray100 lg:text-4xl md:text-xl text-lg font-normal font-kaisei'>Unleash Your Creativity </button>

                </form>
            </div>
            <Links />
        </section >) : (<Storyformloader />)
    )
}

export default Storyform;