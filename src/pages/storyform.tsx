import Questions from "../components/question";
import { useEffect, useState } from "react";
import { Links } from "../components/links";
import { LoaderAnimation } from "../loaders/LoaderAnimation";
import { formDataSub } from "../store/storySlice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Client, Databases } from "appwrite";
import { useCreateStory } from "../backend/openai";
import { quantum } from "ldrs";


interface questionsprops {
  Question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  id: number;
}
const Storyform = () => {
  quantum.register();
  const { control, handleSubmit } = useForm();
  const [loading, setLoading] = useState(true);
  const [loadingStory, setloadingStory] = useState(false);
  const [Error, setError] = useState("");
  const [QuestionDocuments, setQuestionDocuments] = useState<questionsprops[]>(
    [],
  );

  const dispatch = useDispatch();
  const dbid = "655f403b2d6d9367440d";
  const colid = "656118f6a61ce384d2e6";
  const client = new Client();
  const { createstory } = useCreateStory();
  const dbss = new Databases(client);
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("655e0bdd11e79ff324ed");


  // dispatch the form data to the store
  const loglog = async (data: any) => {
    setloadingStory(true);
    dispatch(formDataSub({ formContent: data })); //send form data to state.formcontent in storyslice formdatasub
    console.log(data);
    await createstory(data); //send form data to openai.ts
  };

  // load questions
  useEffect(() => {
    document.title = "Create Story | TEQ";
    const getuser = async () => {
      setError("");
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
        setLoading(false);
        return response;
      } catch (error: any) {
        return setError(error.message);
      } finally {
        if (QuestionDocuments)
          setLoading(false);
      }
    };
    getuser();
  });

  return !loading ? (
    <>
      <section className="bg-bgblob bg-gray800 h-screen flex flex-col-reverse justify-start items-center gap-y-9 w-full p-4">
        <div className={` relative ${loadingStory ? 'overflow-y-hidden' : 'overflow-y-scroll'} w-full h-full p-5 flex flex-col items-center justify-between gap-y-3 border-2 border-gray700 bg-gray700/40 rounded-[2.75rem]`}>
          <div className="flex flex-col items-start w-full gap-y-3 ">
            <h1 className="text-gray100 lg:text-6xl md:text-4xl text-2xl font-normal font-kaisei">
              Craft Your Captivating Narrative...
            </h1>
            <h2 className="text-gray100 lg:text-4xl md:text-2xl text-lg font-normal font-kaisei">
              By answering the questions
            </h2>
          </div>

          {Error && <p className="text-eqred p-4 rounded-3xl text-center  bg-white/40 lg:text-4xl md:text-2xl text-lg font-normal font-kaisei">{Error}</p>}
          {loadingStory ? (<section className="absolute z-10 inset-0 backdrop-blur-sm bg-gray700/10 w-full h-auto flex items-center justify-center">
            <l-quantum size="45"
              speed="1.75"
              color="white"></l-quantum>
          </section>) : (
            <form
              method="get"
              onSubmit={handleSubmit(loglog)}
              id="formanimation"
              className=" w-full select-none flex flex-col gap-y-3">
              {
                QuestionDocuments ? (
                  QuestionDocuments.map((data) => (
                    <Questions
                      key={data.id}
                      qno={data.id}
                      question={data.Question}
                      option1={data.option1}
                      option2={data.option2}
                      option3={data.option3}
                      option4={data.option4}
                      control={control}
                    />
                  ))
                ) : (
                  <p className="text-center text-gray100 text-3xl font-kaisei">
                    something went wrong &#128533;
                  </p>
                )
              }
              <button
                type="submit"
                value="submit"
                className="w-full hover:bg-eqred/40 hover:text-white transition-colors ease-out duration-300 h-auto p-5 bg-red-800 rounded-3xl border border-stone-900 backdrop-blur-[11.70px] flex-col justify-center items-center gap-2 inline-flex text-gray100 lg:text-4xl md:text-xl text-lg font-normal font-kaisei">
                Unleash Your Creativity
              </button>
            </form>
          )}
        </div>
        <Links />
      </section >
    </>
  ) : (

    <LoaderAnimation />
  )
};

export default Storyform;
