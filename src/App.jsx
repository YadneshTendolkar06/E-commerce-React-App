import authService from './appwrite/Auth'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import {login,logout} from './features/AuthSlice'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getAccount()
    .then((userData)=> {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .catch(()=> { console.log("error to get login") })
    .finally(()=> setLoading(false))
  },[])

  return loading ? <h3>Loading</h3> :
  <div>
    <div className="bg-white shadow-md py-4">
    <Header />
    </div>
    <Outlet />
  </div>
}

export default App
