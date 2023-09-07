import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
    email: string;
    firstName: string;
    lastName: string;
}

const SignUpForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        firstName: '',
        lastName: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Call the API
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        const data = await response.json();
        if (data.success) {
            alert("Signed up successfully!");
        } else {
            alert(data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="firstName" 
                placeholder="First Name" 
                value={formData.firstName} 
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="lastName" 
                placeholder="Last Name" 
                value={formData.lastName} 
                onChange={handleChange} 
            />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;
