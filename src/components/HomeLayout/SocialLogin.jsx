import React, { use } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const SocialLogin = () => {
    const  {signInWithGoogle, signInWithGitHub} = use(AuthContext)
    const handleGoogleSignIn = () => {
        // console.log("google sign in complete")
        signInWithGoogle()
        .then(result => {
            // console.log(result)
            const user = result.user;
            toast.success(`${user.displayName} Sign in successful`)
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;

            toast.error(errorCode, errorMessage)
        })
    }

    const handleGithubSignIn = () => {
        signInWithGitHub()
        .then(result => {
            // console.log(result)
            const user = result.user;
            toast.success(`${user.displayName} Sign in successful`)
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;

            toast.error(errorCode, errorMessage)
        })
    }
    return (
        <div>
            <h3 className='font-bold mb-5'>Login With</h3>
            <div className='space-y-3'>
                <button onClick={handleGoogleSignIn} className='btn btn-outline btn-secondary w-full'><FcGoogle size={24}/> Login With Google</button>
                <button onClick={handleGithubSignIn} className='btn btn-outline btn-primary w-full'><FaGithub size={24}/> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;