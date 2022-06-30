import { React, useState } from 'react'
import { Footer, Header, MailList, Navbar } from '../../components'
import './hotel.css'
import { GrLocation } from 'react-icons/gr'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import { MdFullscreenExit } from 'react-icons/md'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];


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
      <div className="hotelContainer">
        {open && <div className="slider">
          <MdFullscreenExit className='close' onClick={() => setOpen(false)} />
          <FaArrowAltCircleLeft className='arrow' onClick={() => handleMove("left")} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FaArrowAltCircleRight className='arrow' onClick={() => handleMove("rights")} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Turrismo Hotel</h1>
          <div className="hotelAddress">
            <GrLocation className="hotelIcon" />
            <span>Soi Na Jomtien 32, Na Jomtien, Sattahip, Chonburi, 20250 Na Jomtien, Thailand</span>
          </div>
          <div className="hotelDistance">
            <span>Good location - show</span>
          </div>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, index) => (
              <div key={index} className="hotelImgWrapper">
                <img onClick={() => handleOpen(index)} src={photo.src} alt="hotel" className='hotelImg' />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className='hotelTitle'>X2 Vibe Pattaya Seaphere - SHA Extra Plus</h1>
              <p className='hotelDesc'>
                This property is 3 minutes walk from the beach. X2 Vibe Pattaya Seaphere - SHA Extra Plus Residence is offering accommodation in Na Jomtien.
                All rooms boast a TV with cable channels and a private bathroom. The property has free WiFi.
                The rooms at the hotel come with a seating area. X2 Vibe Pattaya Seaphere - SHA Extra Plus Residence offers some rooms that feature a balcony. All guest rooms will provide guests with a microwave.
                Guests at the accommodation can enjoy a buffet breakfast. There is an on-site restaurant, which specialises in Asian cuisine.
                X2 Vibe Pattaya Seaphere - SHA Extra Plus Residence offers a year-round outdoor pool.
                The reception at the hotel can provide tips on the area.
                Pattaya Central is 14 km from X2 Vibe Pattaya Seaphere - SHA Extra Plus Residence. The nearest airport is Utapao-Rayong-Pataya International Airport, 18 km from the accommodation.
                X2 Vibe Pattaya Seaphere - SHA Extra Plus has been welcoming Booking.com guests since 30 Jun 2017.
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
      </div>
    </div>
  )
}

export default Hotel