import { useEffect, useState } from 'react'
import call from '../images/call.svg'
import closedd from '../images/close.svg'

const contextMenu = [
  "Add to favorites",
  "Not Interested",
  "View Service",
  "Report Service"
]

const isDoneClass = {
  background: '#049637',
  padding: '8px',
  width: '300px',
  border: '2px solid green',
  borderRadius: '4px',
  animation: 'enter 0.3s ease',
  color: 'white'
}

const isNoteDone = {
  background: '#c50505dc',
  padding: '8px',
  width: '300px',
  border: '2px solid red',
  borderRadius: '4px',
  animation: 'enter 0.3s ease',
  color: 'white'
}

const view = {
  position: 'fixed',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color:'white',
  justifyContent: 'center',
  background: 'rgba(0,0,0,0.6)',
  zIndex: 1000
}

export default function Explore({ services, setServices }) {
  const [dots, setDots] = useState(null)
  const [context, setContext] = useState(null)
  const [report, setReport] = useState('')
  const [openReport, setOpenReport] = useState(null)
  const [note, setNote] = useState('')
  const [yes, setYes] = useState(false)
  const [viewService, setViewService] = useState(null)

  function showNote(message, success = false) {
    setYes(success)
    setNote(message)

    setTimeout(() => {
      setNote('')
    }, 2000)
  }

  function handleReport() {
    if (report.trim() === '') {
      showNote('Please tell us what happened?')
    } else {
      showNote(
        'Report submitted successfully. Our team will review it shortly.',
        true
      )
      setReport('')

      setTimeout(() => {
        setOpenReport(null)
      }, 2000)
    }
  }

  function deleteService(serviceIndex) {
    setServices(prev => prev.filter((_, i) => i !== serviceIndex))
    setContext(null)
  }

  function addToFavorites(index) {
    setServices(prev =>
      prev.map((service, i) =>
        i === index
          ? { ...service, favorite: !service.favorite }
          : service
      )
    )
    showNote('Updated favorites', true)
    setContext(null)
  }

  useEffect(() => {
    function handleWindowClick() {
      setContext(null)
    }

    window.addEventListener('click', handleWindowClick)
    return () => window.removeEventListener('click', handleWindowClick)
  }, [])

  function menuFunctionality(button, index) {
    if (button === 'Not Interested') deleteService(index)

    if (button === 'Report Service') {
      setOpenReport(index)
      setContext(null)
    }

    if (button === 'View Service') {
      setViewService(index)
      setContext(null)
    }

    if (button === 'Add to favorites') {
      addToFavorites(index)
    }
  }

  if(services.length === 0) return <p>No services listed</p>

  return (
    <div className="explore">
      {services.map((service, index) => (
        <div
          className="service-card"
          onMouseOver={() => setDots(index)}
          onMouseLeave={() => setDots(null)}
          key={index}
        >
          <h2>
            {service.name} {service.favorite && '⭐'}
          </h2>

          <span>Category: {service.category}</span>
          <span>📍: {service.location}</span>

          <a href={`tel:${service.contact}`} className="call">
            <img src={call} alt="call" />
            Call
          </a>

          {dots === index && (
            <div
              className="dots"
              onClick={(e) => {
                e.stopPropagation()
                setContext(index)
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}

          {context === index && (
            <div
              className="context-menu"
              onClick={(e) => e.stopPropagation()}
            >
              {contextMenu.map((button, i) => (
                <button
                  key={i}
                  onClick={() => menuFunctionality(button, index)}
                >
                  {button}
                </button>
              ))}
            </div>
          )}

          {/* REPORT MODAL */}
          {openReport === index && (
            <div className="report" style={view}>
              <form>
                <img
                  src={closedd}
                  title="close report form"
                  onClick={() => setOpenReport(null)}
                />

                <h2>Report a service</h2>

                {note && (
                  <span style={yes ? isDoneClass : isNoteDone}>
                    {note}
                  </span>
                )}

                <p>What caused this response?</p>

                <textarea
                  value={report}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      handleReport()
                    }
                  }}
                  onChange={(e) => setReport(e.target.value)}
                  placeholder="Tell us what's wrong...?"
                />

                <button
                  onClick={(e) => {
                    e.preventDefault()
                    handleReport()
                  }}
                >
                  submit report
                </button>
              </form>
            </div>
          )}

          {/* VIEW SERVICE MODAL */}
          {viewService === index && (
            <div style={view} onClick={() => setViewService(null)}>
              <div
                className="view-service"
                onClick={(e) => e.stopPropagation()}
              >
                <h2>{service.name}</h2>
                <p><strong>Category:</strong> {service.category}</p>
                <p><strong>Location:</strong> {service.location}</p>
                <p><strong>Contact:</strong> {service.contact} <span
                onClick={()=>{service.contact.click()}}
                className='callView'>Call</span> </p>

                <button onClick={() => setViewService(null)}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}