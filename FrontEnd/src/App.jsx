import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import SignUpPage from './Pages/SignUpPage'
import LogInPage from './Pages/LogInPage'
import SettingsPage from './Pages/SettingsPage'
import ProfilePage from './Pages/ProfilePage'
import { useAuthStore } from './Store/useAuthStore'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const {authUser, checkAuth, isCheckingAuth} = useAuthStore();
  
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  
  console.log({authUser});
  console.log({isCheckingAuth});
  if(isCheckingAuth && !authUser){
    return(
      <>
        <div className='flex items-center justify-center h-screen'>
          <span class="loading loading-infinity loading-lg"></span>
        </div>
      </>
    );
  }
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = "/" element = {authUser ? <HomePage /> : <Navigate to = '/login' />} />
        <Route path = "/signup" element = {(!authUser) ? <SignUpPage /> : <Navigate to = '/' />} />
        <Route path = "/login" element = {(!authUser) ? <LogInPage /> : <Navigate to = '/' />} />
        <Route path = "/Settings" element = {<SettingsPage />} />
        <Route path = "/Profile" element = {authUser ? <ProfilePage /> : <Navigate to = '/login' />} />
      </Routes>
      
      <Toaster />
    </div>
  )
}

export default App  