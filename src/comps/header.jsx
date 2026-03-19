import { NavLink } from "react-router-dom"
import search from '../images/search.svg'
import { useNavigate } from "react-router-dom"

const tabs = [
  { name: "Home", path: "/" },
  { name: "Explore", path: "/explore" },
   {name: 'Near Me', path: "/near"},
  { name: "Request", path: "/request" },
   { name: "Add Service", path: "/add" },
   {name: 'API', path: '/api'}
]



export default function Header(){
  const navigate = useNavigate()
  return(
    <header>
      <div className="line"></div>

      <h1 onClick={()=>navigate('/')}>Ka<span>Plug</span>🔌</h1>

      <div className="tabs">
        {tabs.map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.path}
            className={({ isActive }) =>
              `tab-button ${isActive ? "active" : ""}`
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </div>

      <div className="search">
        <input type="search" placeholder="Search here..." />
        <img src={search} alt="search icon" />
      </div>
    </header>
  )
}