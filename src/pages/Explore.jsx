import { useEffect, useState } from 'react'
import call from '../images/call.svg'
import closedd from '../images/close.svg'

const contextMenu = ["Add to favorites","Not Interested", "View Service","Report Service"]

const isDoneClass = {
    background: '#049637',
    padding: '8px',
    width: '300px',
    border:' 2px solid green',
    borderRadius: '4px',
    animation:' enter 0.3s ease',
    color: 'white'
}

const isNoteDone = {
    background: '#c50505dc',
    padding: '8px',
    width: '300px',
    border:' 2px solid red',
    borderRadius: '4px',
    animation:' enter 0.3s ease',
    color: 'white'
}


export default function Explore({services, setServices}){
    const [dots, setDots] = useState(null);
    const [context, setContext] = useState(null)
    const [report, setReport] = useState('')
    const [openReport, setOpenReport] = useState(null)
    const [note, setNote] = useState('')
    const [yes, setYes] = useState(false)

    function showNote(mawu){
        setNote(mawu)
        setTimeout(() => {
            setNote('')
        }, 2000);
    }

    function handleReport(){
        if(report === '')showNote('Please tell us what happened?');
        else {
            setYes(true)
            setReport('');
            setNote('Report submitted successfully. Our team will review the complaint and we will return to you shortly.')
         setTimeout(()=>{
            setOpenReport(null)
            setNote('')
        }, 3000)
        }

       
    }


    function deleteService(serviceIndex){
        setServices(prev => prev.filter((_, i) => i !== serviceIndex))
        setContext(null)
    }
        useEffect(() => {
            function handleWindowClick(){
                setContext(null)
            }

            window.addEventListener('click', handleWindowClick)

            return () => window.removeEventListener('click', handleWindowClick)
        }, [])

        function menuFunctionality(button, index){
            if(button === 'Not Interested')deleteService(index);
            if(button === 'Report Service'){setOpenReport(index); setContext(null)}
        }

    return(
        <div className="explore">
            {services.map((service, index) => {
                return(
                    <div className="service-card"
                    onMouseOver={()=>setDots(index)}
                    onMouseLeave={()=>setDots(null)}
                    key={index}>
                        <h2>{service.name}</h2>
                        <span>Category: {service.category}</span>
                        <span>📍: {service.location}</span>
                       
                        <a href={`tel:${service.contact}`} className="call"><img src={call} alt="call"/>Call</a>
                       {dots === index  ? (<div className="dots"
                        onClick={(e)=>{ e.stopPropagation();setContext(index)}}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>) : ''}

                        {context === index &&(
                            <div className="context-menu"
                            onClick={(e)=>e.stopPropagation()}
                            >
                                {contextMenu.map((button, i) => {
                                    return(
                                        <button
                                        onClick={()=>menuFunctionality(button, index)}
                                        key={i}>{button}</button>
                                    )
                                })}
                            </div>
                        )}

                        {openReport === index &&(
                            <div className="report">
                               <form>
                                <img src={closedd} title='close report form' onClick={()=>setOpenReport(null)}/>
                                 <h2>Report a service</h2>
                                 {note ? <span style={yes ? isDoneClass : isNoteDone}>{note}</span> : ''}
                                <p>What caused this response?</p>
                                <textarea 
                                value={report}
                                onKeyDown={(e)=>{if(e.key === 'Enter')
                                    {e.preventDefault();
                                    handleReport();}}}
                                onChange={(e)=>setReport(e.target.value)}
                                placeholder="Tell us what's wrong...?"></textarea>
                                <button onClick={(e)=>{e.preventDefault(); handleReport()}}>submit report</button>
                               </form>
                            </div>

                        )}
                    
                    </div>
                )
            })}
        </div>
    )
}