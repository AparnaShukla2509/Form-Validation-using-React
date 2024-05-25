import React, { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        phoneNo: '',
        country: '',
        city: '',
        panNo: '',
        aadharNo: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation
        let errors = {};
        // Add validation logic for each field
        if (!formData.firstName) {
            errors.firstName = 'First Name is required';
        }
        // Add validations for other fields
        if (!formData.lastName) {
            errors.lastName = 'Last Name is required';
        }

        if (!formData.username) {
            errors.userName = 'User Name is required';
        }

        if (!formData.email) {
            errors.email = 'Email is required';
        }

        if (!formData.password) {
            errors.password = 'Password is required';
        }

        if (!formData.phoneNo) {
            errors.phoneNo = 'Phone No is required';
        }

        if (!formData.country) {
            errors.country = 'Country is required';
        }
        
        if (!formData.city) {
            errors.city = 'City is required';
        }

        if (!formData.panNo) {
            errors.panNo = 'Pan No is required';
        }

        if (!formData.aadharNo) {
            errors.aadharNo = 'Aadhar No is required';
        }

        if (Object.keys(errors).length === 0) {
            // Handle successful form submission, e.g., navigate to a new route
            console.log('Form submitted successfully:', formData);
            // Implement navigation to a new route here
        } else {
            setErrors(errors);
        }
    };

    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
                {errors.firstName && <p>{errors.firstName}</p>}
                {/* Add other input fields with similar structure */}
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
                {errors.lastName && <p>{errors.lastName}</p>}

                <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="User Name" />
                {errors.username && <p>{errors.username}</p>}

                <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                {errors.email && <p>{errors.email}</p>}

                <input type="text" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                {errors.password && <p>{errors.password}</p>}

                <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} placeholder="Phone No" />
                {errors.phoneNO && <p>{errors.phoneNo}</p>}

                <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" />
                {errors.country && <p>{errors.country}</p>}

                <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
                {errors.city && <p>{errors.city}</p>}

                <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} placeholder="Pan No" />
                {errors.panNo && <p>{errors.panNo}</p>}

                <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} placeholder="Aadhar No" />
                {errors.aadharNo && <p>{errors.aadharNo}</p>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RegistrationForm;     
