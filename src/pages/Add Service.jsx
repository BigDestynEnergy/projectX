import service from '../images/service.svg'


const days = ["None","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

export default function AddService(){
    return(
        <div className="add-service">
            <div className="left">
                <img src={service}/>
                <h2>List a new service</h2>
                <span>Our services are user based and we cannot have all listings, <br /> unless users add more services to offer</span>
                <span>Complete the form to add a new service</span>

            </div>

            <div className="right">
                <form>
                    <h2>Add a new service</h2>
                  <div className="input-group">
                    <label htmlFor="">Select category:</label>
                     <select>
                    <option value="none">None</option>
                    <option value="construction">Construction</option>
                    <option value="digital">Digital Services</option>
                    <option value="farming">Farming</option>
                    <option value="woodwork">Woodwork</option>
                   </select>
                  </div>

                  <div className="input-group">
                    <label>Service name: </label>
                    <input type="text"
                    placeholder='example "plumbing"' />
                  </div>

                  <div className="input-group">
                    <label>Location: </label>
                    <input type="text" placeholder='example "Kawale, Lilongwe"' />
                  </div>

                  <div className="input-group">
                    <label>Contact: </label>
                    <input type="number" placeholder='contact 0999 00 00 00'/>
                  </div>

                  <div className="input-group">
                    <label>Days open: </label>
                   <div className="selects">
                     <span>from: </span>
                        <select>
                            {days.map(day => (
                            <option key={day} value={day}>{day}</option>
                            ))}
                        </select>

                        <span>to: </span>
                        <select>
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


