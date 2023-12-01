import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch } from "react-redux";
import authService from "./backend/auth";
import { login, logout } from "./store/authSlice";
import { dotPulse } from 'ldrs'
import { Outlet } from 'react-router-dom';

function App() {
    dotPulse.register()
    const [loading, setLoading] = useState(true)
    const [loadingPercentage, setLoadingPercentage] = useState<number>(0);

    const dispatch = useDispatch()
    useEffect(() => {
        authService.getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData }))
                } else {
                    dispatch(logout())
                }
            })
            .finally(() => {
                setLoading(false)
            }
            )
    }, [loading, dispatch])

    useEffect(() => {
        const interval = setInterval(() => {
            // Simulating loading progress
            setLoadingPercentage((prevPercentage) => (prevPercentage < 100 ? prevPercentage + 10 : prevPercentage));
        }, 300);

        // Simulating a longer loading time
        setTimeout(() => {
            clearInterval(interval);
        }, 7000);

        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(interval);
        };
    });


    return !loading ? (

        <section className='App bg-gray900 w-screen h-screen'>
            <Outlet />
        </section>

    ) : (
        <div className='h-screen w-screen bg-gray900 flex justify-center items-center'>
            <p className='font-kaisei text-5xl uppercase animate-pulse text-center text-eqred'>loading
                <l-dot-pulse
                    size="43"
                    speed="1.3"
                    color="#9E0101"
                ></l-dot-pulse> <br /> {loadingPercentage}%
            </p>
        </div>
    )
}

export default App;
