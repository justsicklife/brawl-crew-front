import axios from 'axios';
import React, { useState } from 'react'
import CustomSelect from '../../components/CustomSelect';

export default function SingUpPage() {

    const [playerTag, setPlayerTag] = useState("");

    const [ageGroupSelected, ageGroupSetSelected] = useState("");

    const [sexSelected, setSexSelected] = useState("");

    const ageGroupOptions = [
        { label: "초등학생", value: "ELEMENTARY" },
        { label: "중학생", value: "MIDDLE_SCHOOL" },
        { label: "고등학생", value: "HIGH_SCHOOL" },
        { label: "성인", value: "ADULT" }
    ];

    const sexOptions = [
        { label: "남성", value: "MALE" },
        { label: "여성", value: "FEMALE" },
    ]

    const ageGroupPlaceholder = "나이대";

    const sexPlaceholder = "성별";

    const onPlayerTagHandler = (e) => {
        setPlayerTag(e.target.value);
    }

    const SubmitHandler = async (e) => {
        e.preventDefault();

        const req = { playerTag: playerTag, ageGroup: ageGroupSelected,sex: sexSelected };
        console.log(req);
        try {
            const rep = await axios.post("http://localhost:8080/user", req);
            console.log(rep.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <div className='absolute z-50 w-screen h-screen flex justify-center content-center flex-wrap'>
                <form
                    onSubmit={SubmitHandler}>
                    <input
                        className='p-3 rounded-md outline-none'
                        value={playerTag}
                        placeholder='PlayerTag'
                        onChange={onPlayerTagHandler} />
                    <div>
                        <CustomSelect
                            selected={ageGroupSelected}
                            setSelected={ageGroupSetSelected}
                            options={ageGroupOptions}
                            placeholder={ageGroupPlaceholder}
                        />

                        <CustomSelect
                            selected={sexSelected}
                            setSelected={setSexSelected}
                            options={sexOptions}
                            placeholder={sexPlaceholder}
                        />
                    </div>
                    <div className='mt-5'>
                        <button className='rounded-md w-full p-3 bg-green-400 hover:bg-green-500'>제출</button>
                    </div>
                </form>
            </div>
            <img
                className='h-screen w-screen absolute left-0 top-0'
                alt='create background'
                src={`/images/background/create.webp`} />
        </div>
    )
}
