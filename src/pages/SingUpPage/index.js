import React, { useState } from 'react'
import CustomSelect from '../../components/CustomSelect';
import ageGroupOptions from '../../options/ageGroup';
import sexOptions from '../../options/sex';
import { useNavigate } from 'react-router-dom';
import { fetchRegister } from "../../api/requsts";

export default function SingUpPage() {

    const [playerTag, setPlayerTag] = useState("");

    const [userEmail,setUserEmail] = useState("");

    const [userPassword,setUserPassword] = useState("");

    const [ageGroupSelected, ageGroupSetSelected] = useState("");

    const [sexSelected, setSexSelected] = useState("");

    const ageGroupPlaceholder = "나이대";

    const sexPlaceholder = "성별";

    const navigate = useNavigate();

    const onPlayerTagHandler = (e) => {
        setPlayerTag(e.target.value);
    }

    const onUserEmailTagHandler = (e) => {
        setUserEmail(e.target.value)
    }

    const onUserPasswordTagHandler = (e) => {
        setUserPassword(e.target.value)
    }

    const SubmitHandler = async (e) => {
        e.preventDefault();

        const userInfo = { 
            playerTag: playerTag,
            ageGroup: ageGroupSelected,
            sex: sexSelected,
            userEmail: userEmail,
            userPassword : userPassword
        };
        console.log(userInfo);
        try {
            const rep = await fetchRegister(userInfo);
            console.log(rep.data);
            navigate("/");

        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <div className='absolute z-40 w-screen h-screen flex justify-center content-center flex-wrap'>
                <div className='p-10 bg-white relative z-50 shadow-sm rounded-lg'>
                    <form
                        onSubmit={SubmitHandler}>
                        <div className='my-3'>

                        <input
                        className='p-3 rounded-md outline-none shadow-xl'
                        value={userEmail}
                        placeholder='email'
                        onChange={onUserEmailTagHandler} />
                        </div>
                        <div className='my-3'>

                        <input
                        className='p-3 rounded-md outline-none shadow-xl'
                        value={userPassword}
                        placeholder='password'
                        onChange={onUserPasswordTagHandler} />
                        </div>

                        <div className='my-3'>

                        <input
                            className='p-3 rounded-md outline-none shadow-xl'
                            value={playerTag}
                            placeholder='PlayerTag'
                            onChange={onPlayerTagHandler} />
                            </div>
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
                        <div className='mt-5 shadow-xl'>
                            <button type='submit' className='rounded-md w-full p-3 bg-green-400 hover:bg-green-500'>제출</button>
                        </div>
                    </form>
                </div>
            </div>
            <img
                className='h-screen w-screen absolute left-0 top-0'
                alt='create background'
                src={'/images/background/create.webp'} />
        </div>
    )
}
