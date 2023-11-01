import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signin.css';
import img1 from '../assets/login-img1.webp';
import img2 from '../assets/login-img2.webp';
import img3 from '../assets/login-img3.webp';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        if (data.token) {
          document.cookie = `token=${data.token}; path=/;`;
          setError('');
          navigate('/home');
        } else {
          setError('Invalid credentials'); // Set error message if token is not received
        }
      } else {
        setError(data.message || 'An error occurred'); // Set an error message based on the response
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred'); // Set a generic error message if there's an error
    }
  };
  

  return (
    <div className='page'>
    <div className='login-page'>
      <form onSubmit={handleSubmit} className=''>
        <h4 style={{color:"#0056d2" , textAlign:"center"}}>Compare & Select from 100+</h4>
        <p style={{textAlign:"center"}}><i>Best University for your Courses</i></p>
        <div className='univ-img-list'>
          <div className='univ-img'><img src={img1}/></div>
          <div className='univ-img'><img src={img2}/></div>
          <div className='univ-img'><img src={img3}/></div>
        </div>
        <p style={{textAlign:'center' , color:'#16b1a2' ,fontWeight:'bolder'}}>No-Cost EMI From 4,999/-  100% Placement Assistance</p>
        <div className='login-box'>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button className='form-button' type="submit">Login</button>
        </div>
      </form>
      <div style={{ color: 'red' }}>{error}</div>
    </div>
    </div>
  );
}

export default Login;
