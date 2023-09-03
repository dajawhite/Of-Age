"use client"

import React, { useState } from 'react';

const SignUpForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/early-access/route', {
              body: JSON.stringify({
                email,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
              method: 'POST',
            });
        
            const { error } = await res.json();
        
            if (error) {
              // Handle the error
            }
        
            // Handle success
          } catch (error) {
            // Handle the error
          }

        setSubmitted(true);
    };

    return (
        <div className="w-full max-w-xs mx-auto">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
            {submitted && (
                <p className="text-center text-gray-500 text-xs">
                    Thank you for signing up for early access!
                </p>
            )}
        </div>
    );
};

export default SignUpForm;
