import React, { useState } from "react";
import { useForm } from "react-hook-form";
import authService from "../appwrite/Auth";
import { useDispatch } from "react-redux";
import { login } from "../features/AuthSlice";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [error, setError] = useState("");
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signUp = async (data) => {
    setError("");
    console.log(data);
    try {
    const accountData = await authService.CreateAccount(data);
        if (accountData) {
        const userData = await authService.getAccount();
        console.log(userData);
        if (userData) {
            dispatch(login(userData));
            console.log("helllo");
            navigate("/dashboard");
        }
        }
    } catch (error) {
        alert("Password must be between 8 and 265 characters long")
        setError(error);
    }
    };
    return (
    <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white mx-7 p-8 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
            <form onSubmit={handleSubmit(signUp)}>
            <div className="mb-4">
                <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
                >
                Name
                </label>
                <input
                type="text"
                id="name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
                {...register("name", {
                    required: true
                })}
                />
            </div>
            <div className="mb-4">
                <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
                >
                Email
                </label>
                <input
                type="email"
                id="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                {...register("email", {
                    required: true
                })}
                />
            </div>
            <div className="mb-4">
                <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
                >
                Password
                </label>
                <input
                type="password"
                id="password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                {...register("password", {
                    required: true
                })}
                />
            </div>
            <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
            >
                Sign Up
            </button>
            </form>
            <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
                Login
            </a>
            </p>
        </div>
        </div>

        {/* <div className='h-72 w-72 bg-white border-2'>
        <form onSubmit={handleSubmit(signUp)}>
            <label>Name:
            <input className='border-2 border-black' type="text" placeholder='Enter Your Name' {...register("name", {
                required: true
            })} />
            </label>
            <label>Email:
            <input className='border-2 border-black' type='email' placeholder='Enter Your Email' {...register("email", {
                required: true
            })} />
            </label>
            <label>Password:
            <input className='border-2 border-black' type="password" placeholder='Enter Your Password' {...register("password", {
                required: true
            })} />
            </label>
            <button className='bg-blue-500 px-2 py-1 rounded-lg'>Sign Up</button>

            {
                error && <div className='text-red-400 text-xl'>error</div>
            }
        </form>
        </div> */}
    </>
    );
}

export default SignUp;
