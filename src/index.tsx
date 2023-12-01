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
import { AuthChecker, Login, Signup } from "./components/auth";
import { Home } from "./pages/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Home />
        ),
      },
      {
        path: "/login",
        element: (
          <AuthChecker children={
            <Login />} authentication={false} />
        ),
      },
      {
        path: "/newuser",
        element: (
          <AuthChecker children={
            <Signup />} authentication={false} />
        ),
      },
      {
        path: "/createstory",
        element: (
          <AuthChecker children={
            <Storyform />
          } authentication />
        ),
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
        path: "*",
        element: <Notfound />,
      },]
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
