'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { GiFallingLeaf } from 'react-icons/gi'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { configDotenv } from 'dotenv'

configDotenv()

const LoginPage = () => {
  const [scaleX, setScaleX] = useState(true)

  const handleLeafClick = () => {
    setScaleX((prev) => !prev)
  }

  // Handle Google OAuth success
  const handleGoogleLoginSuccess = (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential)
    console.log('Google Login Success:', decodedToken)

    // Extract user info
    const { email, name, picture } = decodedToken
    console.log('User Email:', email)
    console.log('User Name:', name)
    console.log('User Picture:', picture)

    // Send user info to your backend for further processing
    fetch('/api/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name, picture }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Backend Response:', data)
        // Redirect or update state based on the response
      })
      .catch((error) => {
        console.error('Error sending data to backend:', error)
      })
  }

  // Handle Google OAuth error
  const handleGoogleLoginError = () => {
    console.log('Google Login Failed')
  }

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <div className='w-full h-screen bg-gradient-to-b from-lightGray to-darkGray relative flex items-center justify-center'>
        <div
          className={
            'w-full h-screen bg-gradient-to-b from-lightGreen to-darkGreen absolute top-0 left-0 transition-all duration-700'
          }
          style={{
            clipPath: scaleX
              ? 'polygon(0 0, 55% 0, 45% 100%, 0% 100%)'
              : 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            boxShadow: '10px 0px 10px rgba(0, 0, 0, 0.5)',
          }}
        ></div>
        <div className='flex flex-col items-center justify-center w-[20%] text-white z-[9999]'>
          <div className='flex flex-col items-start w-full'>
            <h1 className='text-5xl font-bold mb-3'>LOGIN</h1>
            <form className='flex flex-col w-full'>
              <p className='text-2xl'>email</p>
              <input
                type='email'
                placeholder='Email'
                className='p-2 py-1 outline-none rounded-lg bg-gradient-to-b from-formGreen to-white text-black focus:outline focus:outline-darkGreen'
              />
              <p className='text-2xl mt-2'>password</p>
              <input
                type='password'
                placeholder='Password'
                className='p-2 py-1 outline-none rounded-lg bg-gradient-to-b from-formGreen to-white text-black focus:outline focus:outline-darkGreen'
              />
              <Link
                href='/forgot-password'
                className='text-slate-300 text-xs mt-1 hover:text-white transition-colors duration-100'
              >
                Forgot your password?
              </Link>
            </form>
          </div>
          {/* Google OAuth Button */}
          <div className='mt-5'>
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginError}
              theme='filled_blue'
              size='medium'
              text='signin_with'
            />
          </div>
          <GiFallingLeaf
            className='text-leafColor text-7xl mt-5 cursor-pointer rotate-180 hover:rotate-[190deg] transition-all duration-200'
            onClick={handleLeafClick}
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  )
}

export default LoginPage
