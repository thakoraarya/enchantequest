import { Controller } from "react-hook-form";
interface questionProps {
  qno: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  control: any;
}
interface sampleprops {
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  control: any;
  name: string;
}

const Option = ({
  option1,
  option2,
  option3,
  option4,
  control,
  name,
}: sampleprops) => {

  return (
    <Controller
      render={({ field }) => (
        <>
          <label className={`bg-gray700/30 flex px-5 py-3  md:hover:bg-gray500 duration-300 ease-out transition-colors  border text-gray100 border-gray700 rounded-xl cursor-pointer peer-checked:bg-eqred peer-checked:border-transparent`}>
            <input type="radio"  {...field} value={option1} required />
            {option1}
          </label>

          <label className="flex px-5 py-3 md:hover:bg-gray500 duration-300 ease-out transition-colors bg-gray700/30 border text-gray100 border-gray700 rounded-xl cursor-pointer peer-checked:bg-eqred peer-checked:border-transparent">
            <input type="radio" {...field} value={option2} required />
            {option2}
          </label>

          <label className="flex px-5 py-3 md:hover:bg-gray500 duration-300 ease-out transition-colors bg-gray700/30 border text-gray100 border-gray700 rounded-xl cursor-pointer peer-checked:bg-eqred peer-checked:border-transparent">
            <input type="radio" {...field} value={option3} required />
            {option3}
          </label>

          <label className="flex px-5 py-3 md:hover:bg-gray500 duration-300 ease-out transition-colors bg-gray700/30 border text-gray100 border-gray700 rounded-xl cursor-pointer peer-checked:bg-eqred peer-checked:border-transparent">
            <input type="radio" {...field} value={option4} required />
            {option4}
          </label>
        </>
      )}
      control={control}
      name={name}
    />
  );
};

const Questions = ({
  qno,
  question,
  option1,
  option2,
  option3,
  option4,
  control,
}: questionProps) => {
  return (
    <section className=" w-full rounded-3xl border border-gray900 p-3 backdrop-blur-[11.70px] bg-opacity-30 flex flex-col justify-start gap-y-2 bg-[#434343] ">
      <p className="md:text-lg text-sm  w-full text-left text-gray100">
        {qno < 10 ? `0${qno}` : `${qno}`}
      </p>
      <p className="md:text-2xl text-lg w-full text-left text-gray100">
        {question}
      </p>
      <Option
        option1={option1}
        option2={option2}
        option3={option3}
        option4={option4}
        control={control}
        name={question}
      />

      <div>
        {/*
                <input
                    className="peer sr-only"
                    type="radio"
                    id={option1}
                    value={option1}
                    {...register(qno.toString(), { required: true })}
                    onClick={handleOptionSelect}
                />
                <label
                    className={`flex px-5 py-3 md:hover:bg-gray500 duration-300 ease-out transition-colors bg-gray700/30 border text-gray100 border-gray700 rounded-xl cursor-pointer peer-checked:bg-eqred peer-checked:border-transparent ${customOptionSelected && 'peer-checked'
                        }`}
                    htmlFor={option1}
                >
                    {option1}
                </label>
            </div>
            <div>
                <input
                    className="peer sr-only"
                    type="radio"
                    id={option2}
                    value={option2}
                    {...register(qno.toString(), { required: true })}
                    onClick={handleOptionSelect}
                />
                <label
                    className={`flex px-5 py-3 md:hover:bg-gray500 duration-300 ease-out transition-colors bg-gray700/30 border text-gray100 border-gray700 rounded-xl cursor-pointer peer-checked:bg-eqred peer-checked:border-transparent ${customOptionSelected && 'peer-checked'
                        }`}
                    htmlFor={option2}
                >
                    {option2}
                </label>
            </div>
            <div>
                <input
                    className="peer sr-only"
                    type="radio"
                    id={option3}
                    value={option3}
                    {...register(qno.toString(), { required: true })}
                    onClick={handleOptionSelect}
                />
                <label
                    className={`flex px-5 py-3 md:hover:bg-gray500 duration-300 ease-out transition-colors bg-gray700/30 border text-gray100 border-gray700 rounded-xl cursor-pointer peer-checked:bg-eqred peer-checked:border-transparent ${customOptionSelected && 'peer-checked'
                        }`}
                    htmlFor={option3}
                >
                    {option3}
                </label>
            </div>
            <div>
                <input
                    className="peer sr-only"
                    type="radio"
                    id={option4}
                    value={option4}
                    {...register(qno.toString(), { required: true })}
                    onClick={handleOptionSelect}
                    required
                />
                <label
                    className={`flex px-5 py-3 md:hover:bg-gray500 duration-300 ease-out transition-colors bg-gray700/30 border text-gray100 border-gray700 rounded-xl cursor-pointer peer-checked:bg-eqred peer-checked:border-transparent ${customOptionSelected && 'peer-checked'
                        }`}
                    htmlFor={option4}
                >
                    {option4}
                </label>
            */}
      </div>
    </section>
  );
};

export default Questions;
