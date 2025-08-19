import React from 'react'
import { Navigate, Route ,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import { useAuth } from './customHooks/useAuth'
import {Loader} from 'lucide-react'
import { Toaster } from 'react-hot-toast';


const App = () => {
  const {isCheckingAuth,authUser}=useAuth()

  if(isCheckingAuth && !authUser){
    return <div className='flex justify-center items-center h-screen'>
      <Loader className='size-10 text-[var(--color-border)] animate-spin'/>
    </div>
  }
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster  />
      <Routes>
        <Route path='/' element={authUser?<HomePage/>:<Navigate to={'/sign-up'}/>}/>
        <Route path='/sign-up' element={!authUser?<SignUpPage/>:<Navigate to={'/'}/>}/>
        <Route path='/login' element={!authUser?<LoginPage/>:<Navigate to={'/'}/>}/>
      </Routes>
    </div>
  )
}

export default App
