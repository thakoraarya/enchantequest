import Questions from "../components/question";
import { useEffect, useState } from "react";
import { Account, Client, Databases } from "appwrite";
import { Links } from "../components/links";
import { LoaderAnimation } from "../loaders/LoaderAnimation";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createStory } from "../store/storySlice";
import gsap from "gsap";
import authService from "../backend/auth";
import { login as storeLogin } from "../store/authSlice";
interface questionsprops {
  Question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  id: number;
}

const Storyform = () => {
  const { control, handleSubmit } = useForm();
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState("");
  const [QuestionDocuments, setQuestionDocuments] = useState<questionsprops[]>(
    [],
  );
  const dispatch = useDispatch();
  const dbid = "655f403b2d6d9367440d";
  const colid = "656118f6a61ce384d2e6";
  const client = new Client();
  const account = new Account(client);
  const navigate = useNavigate();
  const dbss = new Databases(client);
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("655e0bdd11e79ff324ed");

  //   log form submission
  const loglog = (data: any) => {
    dispatch(createStory(data));
    navigate("/story");
    return console.table(data);
  };

  useEffect(() => {
    const getuser = async () => {
      setError("");
      try {
        // const getuser = await authService.getCurrentUser();
        const checkuser = await account.get();
        if (checkuser) {
          const useravail = await authService.getCurrentUser();
          if (useravail) {
            dispatch(storeLogin(useravail));
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
          }

          if (Error) {
            window.alert(Error);
          }
        }
      } catch (error: any) {
        return setError(error.message);
      }
    };
    getuser();
  });

  //   //   gsap animation
  //   useEffect(() => {
  //     gsap.from(".bgblob", {
  //       y: 20,
  //       duration: 3,
  //       yoyoEase: "power2.inOut",
  //     });
  //     gsap.to(".bgblob", {
  //       y: 0,
  //       duration: 3,
  //       delay: 1,
  //       yoyoEase: "power2.inOut",
  //     });
  //   });

  return !loading ? (
    <section className="bg-bgblob bgblob bg-gray800 h-screen flex flex-col-reverse justify-start items-center gap-y-9 w-full p-4">
      <div className="overflow-y-scroll w-full h-full p-5 flex flex-col items-center justify-normal gap-y-3 border-2 border-gray700 bg-gray700/40 rounded-[2.75rem]">
        <div className="flex flex-col items-start w-full gap-y-3 ">
          <h1 className="text-gray100 lg:text-6xl md:text-4xl text-2xl font-normal font-kaisei">
            Craft Your Captivating Narrative...
          </h1>
          <h2 className="text-gray100 lg:text-4xl md:text-2xl text-lg font-normal font-kaisei">
            By answering the questions
          </h2>
        </div>
        <form
          method="get"
          onSubmit={handleSubmit(loglog)}
          id="formanimation"
          className=" w-full flex flex-col gap-y-3">
          {QuestionDocuments ? (
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
          )}
          <button
            type="submit"
            value="submit"
            className="w-full h-auto p-5 bg-red-800 rounded-3xl border border-stone-900 backdrop-blur-[11.70px] flex-col justify-center items-center gap-2 inline-flex text-gray100 lg:text-4xl md:text-xl text-lg font-normal font-kaisei">
            Unleash Your Creativity
          </button>
        </form>
      </div>
      <Links />
    </section>
  ) : (
    <LoaderAnimation />
  );
};

export default Storyform;
