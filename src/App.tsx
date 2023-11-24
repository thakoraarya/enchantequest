import React, {useEffect, useState} from 'react';
import './App.css';
import {Home} from "./components/Home";
import {useDispatch} from "react-redux";
import authService from "./backend/auth";
import {login, logout} from "./store/authSlice";

function App() {
    const [loading, setLoading] = useState(true)
    const [loadingPercentage, setLoadingPercentage] = useState<number>(0);

    const dispatch = useDispatch()
    useEffect(() => {
            authService.getCurrentUser()
                .then((userData) => {
                    if (userData) {
                        dispatch(login({userData}))
                    } else {
                        dispatch(logout())
                    }
                })
                .finally(() => {
                        setLoading(false)
                    }
                )
        }, []
    )

    useEffect(() => {
        const interval = setInterval(() => {
            // Simulating loading progress
            setLoadingPercentage((prevPercentage) => (prevPercentage < 100 ? prevPercentage + 10 : prevPercentage));
        }, 500);

        // Simulating a longer loading time
        setTimeout(() => {
            clearInterval(interval);
        }, 5000);

        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(interval);
        };
    }, []);


    return !loading ? (
        <section className='App bg-[#151515] w-screen h-screen'>
            <Home/>
        </section>
    ) : (
        <div className='h-screen w-screen bg-[#151515] flex justify-center items-center'>
            <p className='font-kaisei text-5xl uppercase animate-pulse text-center text-[#9E0101]'>loading... <br/> {loadingPercentage}%
            </p>
        </div>
    )
}

export default App;
