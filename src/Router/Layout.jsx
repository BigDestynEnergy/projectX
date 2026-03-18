import Header from "../comps/header"
import { Outlet } from "react-router-dom"

export default function Layout(){
  return(
    <>
      <Header />
      <Outlet />
    </>
  )
}