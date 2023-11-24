import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./store/store";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Storyform from './pages/storyform';
import StoryDashboard from './pages/storydashboard';
import Story from './pages/story';
import Notfound from './pages/notfound';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// const router = createBrowserRouter(
//     createRoutesFromElements(

//         <Route path="/" element={<App />} >
//             <Route path="createstory" element={<Storyform />} />
//             <Route path="storydashboard" element={<StoryDashboard />} />
//             <Route path="story" element={<Story />} />
//             <Route path="*" element={<Notfound />} />
//         </Route>
//     )
// );

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/createstory",
        element: <Storyform />,
    },
    {
        path: "/mystories",
        element: <StoryDashboard />,
    },
    {
        path: "/story",
        element: <Story />,
    },
    {
        path: "*",
        element: <Notfound />,
    },
]);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
