import { OpenAI } from "openai";
import { useDispatch, useSelector } from "react-redux";
import { genStory } from "../store/storySlice";
import storyService from "../backend/story";
import { ID } from "appwrite";
import { useNavigate } from "react-router-dom";

export const useCreateStory = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apikey: string = process.env.REACT_APP_OPENAI_API_KEY as string;

  //configure openai
  const checkUser = useSelector((state: any) => state.auth.userData)
  const openai = new OpenAI({ apiKey: apikey, dangerouslyAllowBrowser: true });


  // create story from the form data
  const createstory = async (formdata: any) => {
    console.log("started creating story");
    const completion = await openai.completions.create({
      model: "text-davinci-003",
      prompt: `generate a story the way William Shakespeare write with a story by giving  title and  story separately using ${formdata}`,
      max_tokens: 600,
      temperature: 0,
    });
    // all data from createstory
    // console.log("completion");
    console.table(completion);
    // copy and save completion to clipboard
    // navigator.clipboard.writeText(JSON.stringify(completion));
    // just the story
    const response = completion.choices[0].text;
    // \n\nTitle: A Tale of Love and Loss\n\n remove the title from the story
    const responsetitle: any = completion.choices[0].text.match(/Title: (.+?)\n/)?.[1].toString().replace("title:", "");
    const responsecontent: any = completion.choices[0].text.match(/Story:(.+)/s)?.toString().replace("Story:", "");
    console.log('response', response);
    console.log('title', responsetitle);
    console.log('content', responsecontent);

    const StoreStory: any = await storyService.saveNewStory({
      userid: checkUser.$id,
      storyId: ID.unique(),
      storyname: responsetitle,
      storycontent: responsecontent,
    })
    const savedstorycontent = StoreStory.$id;
    console.log("storyid", StoreStory.$id);
    dispatch(genStory({ storyContent: savedstorycontent }));
    return navigate('/story')
  }
  return { createstory }
}