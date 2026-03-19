import { BrowserRouter, Routes , Route } from "react-router-dom"
import Layout from "../Router/Layout"
import LandingPage from "../comps/Landing Page"
import Explore from "../pages/Explore"
import AddService from "../pages/Add Service"
import Request from '../pages/Request'
import NearMe from '../pages/Near'
import API from '../pages/API'
import { useEffect, useState } from "react"


export default function AppRouter(){
  const [services, setServices] = useState(()=>{
    const saved = localStorage.getItem('services');
    return saved ? JSON.parse(saved) : []
  });
  
  useEffect(()=>{
    localStorage.setItem('services', JSON.stringify(services))
  }, [services])


  return(
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={<Explore
          setServices={setServices}
          services={services}/>}/>
          <Route path="/add" element={<AddService 
          setServices={setServices}/>}/>
          <Route path="/request" element={<Request/>} />
          <Route path="/near" element={<NearMe/>}/>
          <Route path="/api" element={<API/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}