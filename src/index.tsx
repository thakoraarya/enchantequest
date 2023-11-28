import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Storyform from "./pages/storyform";
import StoryDashboard from "./pages/profile";
import Story from "./pages/story";
import Notfound from "./pages/notfound";
import { Login, Signup } from "./components/auth";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
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
    path: "/profile",
    element: <StoryDashboard />,
  },
  {
    path: "/story",
    element: <Story />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/newuser",
    element: <Signup />,
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
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
