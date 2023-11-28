import { OpenAI } from "openai";

//configure openai
const apikey = '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'
// const config = new OpenAI()

const openai = new OpenAI({ apiKey: apikey, dangerouslyAllowBrowser: true })
export const createstory = async (formres: any) => {
  console.log('started creating story');
  const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: `generate a story based on the following data with a title ${formres}`,
    max_tokens: 600,
    temperature: 0,
  });
  console.log('generated story', completion);

}