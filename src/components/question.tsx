import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
interface questionProps {
    qno: number;
    question: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
}

const Questions: React.FC<questionProps> = ({ qno, question, option1, option2, option3, option4 }) => {
    const { register, setValue } = useForm();
    const [customOptionSelected, setCustomOptionSelected] = useState(false);

    // const handleCustomOptionSelect = () => {
    //     // Set the value of the custom option to the input value
    //     const customOptionValue = document.getElementById(option4)?.ariaValueText || '';
    //     setValue(qno.toString(), customOptionValue);

    //     // Set customOptionSelected state to true
    //     setCustomOptionSelected(true);
    // };

    const handleOptionSelect = () => {
        setCustomOptionSelected(false);
    };


    return (
        <section className=" w-full rounded-3xl border border-gray900 p-3 backdrop-blur-[11.70px] bg-opacity-30 flex flex-col justify-start gap-y-2 bg-[#434343] ">
            {qno < 10 ? (<p className="text-lg w-full text-left text-gray100"> 0{qno}</p>) : <p className="text-lg w-full text-left text-gray100"> {qno}</p>}
            <p className="text-2xl w-full text-left text-gray100">{question}</p>
            {/* 1 option */}
            <div>
                <input
                    className="peer sr-only"
                    type="radio"
                    id={option1}
                    value={option1}
                    {...register(qno.toString(), { required: true })}
                    onClick={handleOptionSelect} required
                />
                <label
                    className={`flex px-5 py-3 bg-gray700/30 border text-gray100 border-gray700 rounded-xl cursor-pointer peer-checked:bg-eqred peer-checked:border-transparent ${customOptionSelected && 'peer-checked'
                        }`}
                    htmlFor={option1}
                >
                    {option1}
                </label>
            </div>
            {/* 2 option */}
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
                    className={`flex px-5 py-3 bg-gray700/30 border text-gray100 border-gray700 rounded-xl cursor-pointer peer-checked:bg-eqred peer-checked:border-transparent ${customOptionSelected && 'peer-checked'
                        }`}
                    htmlFor={option2}
                >
                    {option2}
                </label>
            </div>
            {/* 4 option */}
            <div>
                <input
                    className="peer sr-only"
                    type="radio"
                    id={option4}
                    value={option4}
                    {...register(qno.toString(), { required: true })}
                    onClick={handleOptionSelect}
                />
                <label
                    className={`flex px-5 py-3 bg-gray700/30 border text-gray100 border-gray700 rounded-xl cursor-pointer peer-checked:bg-eqred peer-checked:border-transparent ${customOptionSelected && 'peer-checked'
                        }`}
                    htmlFor={option4}
                >
                    {option4}
                </label>
            </div>
            {/* 3 option */}
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
                    className={`flex px-5 py-3 bg-gray700/30 border text-gray100 border-gray700 rounded-xl cursor-pointer peer-checked:bg-eqred peer-checked:border-transparent ${customOptionSelected && 'peer-checked'
                        }`}
                    htmlFor={option3}
                >
                    {option3}
                </label>
            </div>

            {/* Additional input for a custom option */}
            {/* <div>
                <input
                    className="peer sr-only"
                    type="radio"
                    id={option4}
                    value={option4}
                    {...register(qno.toString(), { required: true })}
                    onClick={handleCustomOptionSelect}
                />
                <label
                    className={`flex border text-gray100 border-gray700 rounded-xl cursor-pointer peer-checked:border-eqred peer-checked:bg-eqred ${customOptionSelected && 'peer-checked'
                        }`}
                    htmlFor={option4}
                >
                    <input
                        id={option4}
                        type="text"
                        placeholder={'Express your imagination'}
                        className="w-full rounded-xl p-5  focus:outline-none bg-transparent focus:ring-transparent text-gray100 placeholder:text-[#898989]"
                        onClick={handleCustomOptionSelect}
                    />
                </label>
            </div> */}
        </section>
    );
};

export default Questions;
