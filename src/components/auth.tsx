import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authService from "../backend/auth";
import { login as storeLogin } from "../store/authSlice";
import { Links } from "./links";
import gsap from "gsap";
import { LoaderAnimation } from "../loaders/LoaderAnimation";

// interface AuthCheckerProps {
//     children: ReactNode;
//     authenticate: boolean;
// }
// //auth checker
// export const AuthChecker = ({ children, authenticate = true }: AuthCheckerProps) => {
//     const navigate = useNavigate()
//     const [loading, setLoading] = useState(true)
//     const authStatus = useSelector((state: any) => state.auth.status)
//     useEffect(() => {
//         if (authenticate && !authStatus) {
//             navigate('/login')
//         }
//         else if (!authenticate && authStatus) {
//             navigate('/')
//         }
//         setLoading(false)
//     }, [authStatus, authenticate, navigate])
//     return loading ? <LoaderAnimation /> : <>{children}</>
// }

// login component
export const Login = () => {
  const [error, setError] = useState("");
  // const [loading, setLoading] = useState(true)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const [userData, setUserData] = useState<any>(null); // Add state to hold user data
  const { register, handleSubmit } = useForm();

  const login = async (data: any) => {
    setError("");
    try {
      const session = await authService.login(data);

      if (session) {
        const userData = await authService.getCurrentUser();

        if (userData) {
          dispatch(storeLogin(userData));
          // setUserData(userData); // Set user data to state
          console.log(userData);
          navigate("/profile");
        } else return setError(error);
      } else return setError(error);
      if (session) {
        console.table(session);
      }
    } catch (error: any) {
      return setError(error.message);
    }
  };

  //   function loglog(data: any) {
  //     console.log(data);
  //   }

  // gsap animation
  useEffect(() => {
    gsap.from(".bg-bgblob", { opacity: 0, duration: 1, ease: "power2.inOut" });
    gsap.to(".bg-bgblob", { opacity: 1, duration: 1, ease: "power2.inOut" });
    gsap.from(".form", {
      y: 1000,
      duration: 2,
      delay: 0,
      ease: "power2.inOut",
    });
    gsap.to(".form", { y: 0, duration: 2, delay: 0, ease: "power2.inOut" });
  });

  return (
    <>
      {/* {loading ? ( */}
      <section className=" bg-bgblob bg-gray800 h-screen flex flex-col-reverse justify-center items-center gap-y-9 w-full p-4">
        <div className=" form bg-right-top bg-blend-overlay overflow-y-scroll w-min md:min-w-[31.25rem] h-auto p-5 flex flex-col items-center justify-normal gap-y-6 border-2 border-gray700/60 bg-gray700/30 rounded-[2.75rem]">
          <div className="flex flex-col items-start w-full">
            <div className="text-gray100 md:text-4xl text-2xl font-normal text-center w-full capitalize font-kaisei">
              Welcome Back!
            </div>
          </div>
          <form
            onSubmit={handleSubmit(login)}
            method="post"
            className="form w-full flex flex-col gap-y-3">
            <div className="w-full flex flex-col gap-y-3 bg-gray600/10 rounded-3xl p-5 border-2 border-stone-900">
              {/* <label className="text-gray100 lg:text-xl md:text-lg text-base font-normal font-flex" htmlFor="email">Email</label> */}
              <input
                placeholder="name@example.com"
                type="email"
                {...register("email", { required: true })}
                id="email"
                className="flex  px-5 py-3 ring-2 ring-transparent focus:outline-none focus:ring-eqred md:hover:bg-gray500 duration-300 ease-out transition-colors bg-gray700/40 border text-gray100 border-gray700/60 rounded-xl cursor-pointer peer-checked:bg-eqred peer-checked:border-transparent placeholder:text-gray500  hover:placeholder:text-gray700"
              />
              {/* <label className="text-gray100 lg:text-xl md:text-lg text-base font-normal font-flex" htmlFor="email">Password</label> */}
              <input
                placeholder="secret password"
                type="password"
                {...register("password", { required: true })}
                id="password"
                className="flex px-5 py-3 ring-2 ring-transparent focus:outline-none focus:ring-eqred md:hover:bg-gray500 duration-300 ease-out transition-colors bg-gray700/40 border text-gray100 border-gray700/60 rounded-xl cursor-pointer peer-checked:bg-eqred peer-checked:border-transparent placeholder:text-gray500 hover:placeholder:text-gray700"
              />
            </div>
            <button
              type="submit"
              value="submit"
              className="w-full h-auto p-5 bg-red-800 rounded-3xl border-2 border-stone-900 backdrop-blur-[11.70px] flex-col justify-center items-center gap-2 inline-flex text-gray100 lg:text-2xl md:text-xl text-lg font-normal font-kaisei capitalize">
              login
            </button>
          </form>
          {error && <div className="text-red-500 text-center">{error}</div>}
          <div className="w-full flex gap-x-2 justify-start items-center">
            <p className=" text-left text-gray400 lg:text-xl md:text-lg text-base font-normal font-flex capitalize">
              New user?
            </p>
            <Link
              to={"/newuser"}
              className="underline md:hover:text-eqred focus:text-eqred  text-left text-gray400 font-semibold lg:text-xl md:text-lg text-base font-flex capitalize">
              create Account
            </Link>
          </div>
        </div>
        {/* <Links /> */}
      </section>
      {/* ) : <LoaderAnimation />} */}
    </>
  );
};

// signup component
export const Signup = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const signup = async (data: any) => {
    setError("");
    try {
      const newuser = await authService.createAccount(data);
      if (newuser) {
        setLoading(true);
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(storeLogin(userData));
          setLoading(true);
          navigate("/profile");
        }
      } else {
        setError(error);
      }
    } catch (error: any) {
      window.alert(error.message);
      return setError(error.message);
    }
  };

  //   function loglog(data: any) {
  //     console.log(data);
  //   }

  // gsap animation
  useEffect(() => {
    gsap.from(".bg-bgblob", { opacity: 0, duration: 1, ease: "power2.inOut" });
    gsap.to(".bg-bgblob", { opacity: 1, duration: 1, ease: "power2.inOut" });
    gsap.from(".form", {
      y: 1000,
      duration: 2,
      delay: 0,
      ease: "power2.inOut",
    });
    gsap.to(".form", { y: 0, duration: 2, delay: 0, ease: "power2.inOut" });
  });

  return (
    <>
      {!loading ? (
        <section className=" bg-bgblob bg-right-top md:bg-center bg-gray800 h-screen flex flex-col-reverse justify-center items-center gap-y-9 w-full p-4">
          <div className=" form bg-right-top bg-blend-overlay overflow-y-scroll w-min md:min-w-[31.25rem] h-auto p-5 flex flex-col items-center justify-normal gap-y-6 border-2 border-gray700/60 bg-gray700/30 rounded-[2.75rem]">
            <div className="flex flex-col items-start w-full">
              <div className="text-gray100 lg:text-6xl md:text-4xl text-2xl font-normal text-center w-full capitalize font-kaisei">
                Register
              </div>
            </div>
            <form
              onSubmit={handleSubmit(signup)}
              method="post"
              className=" form w-full flex flex-col gap-y-3">
              <div className="w-full flex flex-col gap-y-3 bg-gray600/10 rounded-3xl p-5 border-2 border-stone-900">
                <label
                  className="text-gray100 lg:text-xl md:text-lg text-base font-normal font-flex"
                  htmlFor="email">
                  Email
                </label>
                <input
                  placeholder="name@example.com"
                  type="email"
                  {...register("email", { required: true })}
                  id="email"
                  className="flex  px-5 py-3 ring-2 ring-transparent focus:outline-none focus:ring-eqred md:hover:bg-gray500 duration-300 ease-out transition-colors bg-gray700/40 border text-gray100 border-gray700/60 rounded-xl cursor-pointer peer-checked:bg-eqred peer-checked:border-transparent placeholder:text-gray500  hover:placeholder:text-gray700"
                  required
                />
                <label
                  className="text-gray100 lg:text-xl md:text-lg text-base font-normal font-flex"
                  htmlFor="email">
                  Password
                </label>
                <input
                  placeholder="secret password"
                  type="password"
                  {...register("password", { required: true })}
                  id="password"
                  className="flex px-5 py-3 ring-2 ring-transparent focus:outline-none focus:ring-eqred md:hover:bg-gray500 duration-300 ease-out transition-colors bg-gray700/40 border text-gray100 border-gray700/60 rounded-xl cursor-pointer peer-checked:bg-eqred peer-checked:border-transparent placeholder:text-gray500 hover:placeholder:text-gray700"
                  required
                />
                <label
                  className="text-gray100 lg:text-xl md:text-lg text-base font-normal font-flex"
                  htmlFor="username">
                  Username
                </label>
                <input
                  placeholder="aarya thakor"
                  type="text"
                  {...register("username", { required: true })}
                  id="username"
                  className="flex  px-5 py-3 ring-2 ring-transparent focus:outline-none focus:ring-eqred md:hover:bg-gray500 duration-300 ease-out transition-colors bg-gray700/40 border text-gray100 border-gray700/60 rounded-xl cursor-pointer peer-checked:bg-eqred peer-checked:border-transparent placeholder:text-gray500  hover:placeholder:text-gray700"
                  required
                />
              </div>
              <div className="w-full flex gap-x-2 justify-start items-center">
                <p className=" text-left text-gray400 lg:text-xl md:text-lg text-base font-normal font-flex capitalize">
                  already user?
                </p>
                <Link
                  to={"/login"}
                  className="underline md:hover:text-eqred focus:text-eqred  text-left text-gray400 font-semibold lg:text-xl md:text-lg text-base font-flex capitalize">
                  login
                </Link>
              </div>
              <button
                type="submit"
                value="submit"
                className="w-full h-auto p-5 bg-red-800 rounded-3xl border-2 border-stone-900 backdrop-blur-[11.70px] flex-col justify-center items-center gap-2 inline-flex text-gray100 lg:text-2xl md:text-xl text-lg font-normal font-kaisei capitalize">
                signup
              </button>
            </form>
            {error && <div className="text-red-500 text-center">{error}</div>}
          </div>
          <Links />
        </section>
      ) : (
        <LoaderAnimation />
      )}
    </>
  );
};
