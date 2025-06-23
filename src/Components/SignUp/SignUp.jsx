import { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import signUp from "../../assets/signup.svg"

import { HiEye, HiEyeOff } from "react-icons/hi";
import {  updateProfile } from "firebase/auth";
// import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";



const SignUp = () => {
    const navigate = useNavigate();
    const [success, setSuccess] = useState("");
    const {createUser} = useContext(AuthContext);
    const [registerError, setRegisterError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
  
    const handleRegister = (e) => {
      e.preventDefault();
      console.log(e.currentTarget);
      const form = new FormData(e.currentTarget);

      const name = e.target.name.value;
      const email = e.target.email.value;
      const number = e.target.number.value;
      const password = e.target.password.value;
      const accepted = e.target.terms.checked;
      console.log(name, email, number, password, accepted);
  
      if (password.length < 6) {
        setRegisterError("Password should be at least 6 characters.");
        return;
      } else if (!/[A-Z]/.test(password)) {
        setRegisterError("Password should have at least 1 upper case");
        return;
      } else if (!accepted) {
        setRegisterError("Please Check! Remember me");
        return;
      }
      //reset error
      setRegisterError("");
      setSuccess("");
  
      // create user
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          e.target.reset();
          navigate("/");
          setSuccess("Successfully Registered.");
          updateProfile(result.user, {
            displayName: name,
            photoURL: photo,
          })
            .then(() => console.log("profile updated"))
            .catch();
        })
        .catch((error) => {
          console.error(error);
          setRegisterError("Email already used! Try again");
        });
    };
    return (
        <div className="gap-5 mt-20 flex items-center justify-center font-poppins">
        <div className="w-[500px] h-[500px] ">
          <div className="">
            <img src={signUp} alt="" />
          </div>
        </div>
        <div className="w-full shadow-md max-w-md p-8 space-y-3 rounded-xl dark:text-gray-50 dark:bg-gray-800">
          <h1 className="text-2xl font-bold text-center">Registration</h1>
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block dark:text-gray-600">
                Username
              </label>
              <input
                type="text"
                required
                name="name"
                id="name"
                placeholder="Username"
                className="w-full px-4 border py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block dark:text-gray-600">Email</label>
              <input
                type="email"
                required
                name="email"
                id="email"
                placeholder="username@email.com"
                className="w-full border px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="photo" className="block dark:text-gray-600">
                Number
              </label>
              <input
                type="text"
                required
                name="number"
                id="number"
                placeholder="number"
                className="w-full border px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className=" space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <div className="relative items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  name="password"
                  id="password"
                  placeholder="********"
                  className=" border w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-slate-900 dark:text-gray-100 focus:dark:border-violet-600"
                />
                <span
                  className="absolute right-3 mt-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <HiEyeOff /> : <HiEye />}
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  aria-label="Remember me"
                  className="mr-1 border rounded-sm focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2 dark:accent-violet-600"
                />
                <label htmlFor="terms" className="text-sm dark:text-gray-600">
                  Remember me
                </label>
              </div>
            </div>
  
            <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600">
              Register
            </button>
          </form>
          {registerError && (
            <p className="text-red-500 font-poppins">{registerError}</p>
          )}
          {success && <p className="text-green-700">{success}</p>}
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            <p className="px-3 text-sm text-gray-900">
              Create Survey Accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          </div>
  
          <div>
            <p className="text-xs mt-8 text-center sm:px-6 text-gray-600">
              Already have an account?{" "}
              <a
                rel="noopener noreferrer"
                href="#"
                className="underline text-gray-800"
              >
                <Link to="/login"> Login</Link>
              </a>
            </p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;