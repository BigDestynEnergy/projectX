import { BrowserRouter, Routes , Route } from "react-router-dom"
import Layout from "../Router/Layout"
import LandingPage from "../comps/Landing Page"
import Explore from "../pages/Explore"
import AddService from "../pages/Add Service"
import Request from '../pages/Request'
import NearMe from '../pages/Near'

export default function AppRouter(){
  return(
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/add" element={<AddService/>}/>
          <Route path="/request" element={<Request/>} />
          <Route path="/near" element={<NearMe/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}