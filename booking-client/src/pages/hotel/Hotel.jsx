import { React, useState } from 'react'
import { Footer, Header, MailList, Navbar } from '../../components'
import './hotel.css'
import { GrLocation } from 'react-icons/gr'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import { MdFullscreenExit } from 'react-icons/md'
import useFetch from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'

const Hotel = () => {

  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const { data, loading, error } = useFetch(`/hotels/find/${id}`)

  const handleOpen = (index) => {
    setSlideNumber(index)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber

    if (direction === "left") {
      //If it's 0, it's gonna be 5 and if it's not it's gonna be slideNumber - 1
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Loading" 
      ): (
      <div className="hotelContainer">
        {open && <div className="slider">
          <MdFullscreenExit className='close' onClick={() => setOpen(false)} />
          <FaArrowAltCircleLeft className='arrow' onClick={() => handleMove("left")} />
          <div className="sliderWrapper">
            <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
          </div>
          <FaArrowAltCircleRight className='arrow' onClick={() => handleMove("rights")} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <GrLocation className="hotelIcon" />
            <span>{data.address}</span>
          </div>
          <div className="hotelDistance">
            <span>{data.distance}m from center</span>
          </div>
          <span className="hotelPriceHighlight">
            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {data.photos?.map((photo, index) => (
              <div key={index} className="hotelImgWrapper">
                <img onClick={() => handleOpen(index)} src={photo} alt="hotel" className='hotelImg' />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className='hotelTitle'>{data.name}</h1>
              <p className='hotelDesc'>
                {data.desc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h3>Property highlights</h3>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>)}
    </div>
  )
}

export default Hotel