import React, { useState } from "react";
import authService from "../appwrite/Auth";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../features/AuthSlice";
import { set, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
function Login() {
    const [error, setError] = useState("");
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false)

    const signIn = async (data) => {
    setError("");
    try {
        setLoader(true)
        const loginData = await authService.login(data);
        if (loginData) {
        const userData = await authService.getAccount();
        if (userData) {
            dispatch(login({ userData }));
            navigate("/dashboard");
            setLoader(false)
        }
        }
    } catch (error) {
        setError(error);
    }
    };

    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white mx-7 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit(signIn)}>
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
            <div className="mb-6">
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

            {
                loader && <div className="text-2xl font-semibold text-center">Loading Page</div>
            }

            {
                error &&  <div className="text-red-600">Enter Correct Email and Password</div>
            }

            <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
            Login
            </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup">
            Sign up
            </Link>
        </p>
        </div>
    </div>
);
}

export default Login;
