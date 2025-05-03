import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [termsError, setTermsError] = useState("");
  const navigate = useNavigate();
  const { createUser, setUser, updateUserProfile } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    //console.log(e.target);

    const form = e.target;
    const name = form.name.value;
    if (name.length <= 2) {
      setNameError("Name should be more than 2 character");
      return;
    } else if (name.includes(" ")) {
      setNameError("No whitespace allowed in the name");
      return;
    } else {
      setNameError("");
    }

    const photo = form.photo.value;

    const email = form.email.value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email");
      return;
    } else {
      setEmailError("");
    }
    const password = form.password.value;
    if (!/^.{6,}$/.test(password)) {
      setPasswordError("Password must be minimum 6 characters long.");
      return;
    } else if (!/(?=.*[a-z])/.test(password)) {
      setPasswordError("at least one lowercase.");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("at least one uppercase.");
      return;
    } else if (!/(?=.*\d)/.test(password)) {
      setPasswordError("at least one digit.");
      return;
    } else if (!/(?=.*[@$!%*?&])/.test(password)) {
      setPasswordError("at least one special character.");
      return;
    } else {
      setPasswordError("");
    }

    const terms = form.terms.checked;
    if(!terms){
      setTermsError('please accept out terms and Conditions');
      return;
    }

    //console.log({ name, photo, email, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user)
        toast.success("user created successfully");
        navigate("/");
        updateUserProfile({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            console.log(error);
            toast.error(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.errorMessage;
        toast.error(errorMessage, errorCode);
      });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h1 className="text-3xl font-semibold text-center">
          Register your account
        </h1>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              required
            />

            {nameError && <p className="text-red-600 text-xs">{nameError}</p>}

            {/* photourl */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
              required
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />

            {emailError && <p className="text-red-600 text-xs">{emailError}</p>}

            {/* password */}
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

            {passwordError && (
              <p className="text-red-600 text-xs">{passwordError}</p>
            )}

            <label className="label mt-4">
              <input type="checkbox" name="terms" className="checkbox" />
              Accept terms and Conditions
            </label>

            {termsError && (<p className="text-red-600 text-xs">{termsError}</p>)}

            {/* button */}
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="mt-3 text-center font-semibold">
              Already Have An Account ?{" "}
              <Link to="/auth/login" className="text-secondary hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
