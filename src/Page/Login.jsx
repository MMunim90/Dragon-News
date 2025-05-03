import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { auth, AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const location = useLocation();
  // console.log(location)
  const navigate = useNavigate();
  const { signIn } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log({email, password})
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        toast.success(`${user.displayName} Logged In Successfully`);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorcode = error.code;
        const errorMessage = error.message;
        toast.error(errorcode, errorMessage);
        setError(errorcode);
      });
  };

  const handleForgetPassword = () => {
    // console.log(emailRef.current.value);
    const email = emailRef.current.value;

    //send password reset email
    sendPasswordResetEmail(auth, email)
    .then(() => {
      toast.warning("A password reset email is send. please check your inbox");
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      toast.error(errorCode, errorMessage)
    })
  }

  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h1 className="text-3xl font-semibold text-center">
          Login your account
        </h1>
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <button
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="btn btn-xs absolute top-2 right-6"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div onClick={handleForgetPassword}>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {error && <p className="text-red-600 text-xs">{error}</p>}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="mt-3 text-center font-semibold">
              Don’t Have An Account ?{" "}
              <Link
                to="/auth/register"
                className="text-secondary hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
