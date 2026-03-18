import { useState } from 'react'
import search from '../images/search.svg'

const tabs = [
    "Home", "Explore", "Favorites", "Add Service", "Request", "API"
]

export default function Header(){
    const [activeTab, setActiveTab] = useState('')

    return(
        <header>
            <div className="line"></div>
            <h1>Ka<span>Plug</span>🔌</h1>

            <div className="tabs">
                {tabs.map((tab, index) => {
                return(
                    <button 
                    className={activeTab === tab ? `active tab-button` : 'tab-button'}
                    onClick={()=>setActiveTab(tab)}
                    key={index}>{tab}</button>
                )
            })}
            </div>

            <div className="search">
                <input type="search" placeholder="Search here..." />
                <img src={search} alt="" />
            </div>


        </header>
    )
}