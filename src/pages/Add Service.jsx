import { useState } from 'react';
import service from '../images/service.svg'


const days = ["None","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const categories = ["None","Construction", "Woodwork", "Farming", "Home Decor", "Digital Services", "House Work"
]
export default function AddService(){
    const [category, setCategory] = useState('')
    const [serviceName, setServiceName] = useState('')
    const [location, setLocation] = useState('')
    const [contact, setContact] = useState('')
    const [daysFrom, setDaysFrom] = useState('')
    const [daysTo, setDaysTo] = useState('')
    const [note, setNote] = useState('')

    function showNote(words){
        setNote(words)

        setTimeout(()=>{
            setNote('')
        }, 2000)
    }

    function handleAdditionOfServices(){
       if(category === 'None')showNote('Select a category');
       if(serviceName === '')showNote('Add service name');
       if(location === '')showNote('Add a location');
    }
    return(
        <div className="add-service">
            <div className="left">
                <img src={service}/>
                <h2>List a new service</h2>
                <span>Our services are user based and we cannot have all listings, <br /> unless users add more services to offer.</span>
                <span>Complete the form to add a new service</span>

            </div>

            <div className="right">
                <form onSubmit={(e)=>{e.preventDefault(); handleAdditionOfServices()}}>
                    <h2>Add a new service</h2>
                    {/* NOTE HERE /// */}
                    {note ? <span className='note'>{note}</span> : ''}
                 

                  <div className="input-group">
                    <label htmlFor="">Select category:</label>
                     <select className='cat'
                     onChange={(e)=>setCategory(e.target.value)}
                     value={category}>
                        {categories.map((cat) => {

                            return(
                                <option value={cat}>{cat}</option>
                            )
                        })}
                     </select>
                  </div>

                  <div className="input-group">
                    <label>Service name: </label>
                    <input type="text"
                    value={serviceName}
                    onChange={(e)=>setServiceName(e.target.value)}
                    placeholder='example "plumbing"' />
                  </div>

                  <div className="input-group">
                    <label>Location: </label>
                    <input type="text"
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)}
                    placeholder='example "Kawale, Lilongwe"' />
                  </div>

                  <div className="input-group">
                    <label>Contact: </label>
                    <input type="number"
                    value={contact}
                    onChange={(e)=>setContact(e.target.value)}
                    placeholder='contact 0999 00 00 00'/>
                  </div>

                  <div className="input-group">
                    <label>Days open: </label>
                   <div className="selects">
                     <span>from: </span>
                        <select value={daysFrom}
                        onChange={(e)=>setDaysFrom(e.target.value)}
                        >
                            {days.map(day => (
                            <option key={day} value={day}>{day}</option>
                            ))}
                        </select>

                        <span>to: </span>
                        <select 
                        value={daysTo}
                        onChange={(e)=>setDaysTo(e.target.value)}
                        >
                            {days.map(day => (
                            <option key={day} value={day}>{day}</option>
                            ))}
                        </select>
                        </div>
                  </div>
                  <button>submit</button>
                </form>
            </div>
        </div>
    )
}


