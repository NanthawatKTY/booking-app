import {React, useState} from 'react'
import "./header.css"
import {FaBed, FaPlane, FaCar, FaCalendarDay, FaPeopleCarry} from 'react-icons/fa'
import {MdTravelExplore, MdOutlineAttractions, MdOutlineLocalTaxi} from 'react-icons/md'
import {BsPeopleFill} from 'react-icons/bs'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const [destination, setDestination] = useState("")  
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);  

  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult:1,
    children:0,
    room:1
  })

  const navigate = useNavigate()

  const handleOption = (name, operation) => {
    setOptions(prev =>{
        return{
        ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] -1, 
        }
    })
  }

  const handleSearch = () => {
    navigate('/hotels', {state:{destination, date, options}})
  }
    
  return (
    <div className='header'>
        {/* if type = list true: className=headerContainer listMode, false: headerContainer */}
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className='headerList'>
                <div className="headerListItem active">
                    <FaBed/>
                    <span>Stays</span>    
                </div>
                <div className="headerListItem">
                    <FaPlane/>
                    <span>Flights</span>    
                </div>
                <div className="headerListItem">
                    <MdTravelExplore/>
                    <span>Flight + Hotel</span>    
                </div>
                <div className="headerListItem">
                    <FaCar/>
                    <span>Car rentals</span>    
                </div>
                <div className="headerListItem">
                    <MdOutlineAttractions/>
                    <span>Attractions</span>    
                </div>
                <div className="headerListItem">
                    <MdOutlineLocalTaxi />
                    <span>Airport taxis</span>    
                </div>
            </div>   
            { type !== "list" &&
            <>
                <h1 className='hedaerrTitle'>A lifetime of discounts? It's Genius.</h1>
                <p className='headerDesc'>Get the advice you need. Check the latest COVID-19 restrictions before you travel</p>
                <button type="button" className='headerButton'>Sign in / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FaBed className='headerIcon'/>
                        <input 
                            type="text" 
                            placeholder="Where are you going?" 
                            className='headerSearchInput'
                            onChange={e => setDestination(e.target.value.toLowerCase())}
                        />
                    </div>
                    <div className="headerSearchItem">
                        <FaCalendarDay className='headerIcon'/>
                        <span className='headerSearchText' onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to 
                            ${format(date[0].endDate, "MM/dd/yyyy")}`}
                        </span>
                        { openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            minDate={new Date()}
                            className='date'
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <BsPeopleFill className='headerIcon'/>
                        <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
                            { openOptions && <div className="options">
                                <div className="optionItem">
                                    <span className="optionText">Adult</span>
                                    <div className="optionCounter">
                                        <button className="optionCounterButton" onClick={() => handleOption("adult", "d")} disabled={options.adult <= 1}>-</button>
                                        <span className="optionCounterNumber">{options.adult}</span>
                                        <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <div className="optionCounter">
                                        <button className="optionCounterButton" onClick={() => handleOption("children", "d")} disabled={options.children <= 0}>-</button>
                                        <span className="optionCounterNumber">{options.children}</span>
                                        <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button> 
                                    </div>
                                
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Room</span>
                                    <div className="optionCounter">
                                        <button className="optionCounterButton" onClick={() => handleOption("room", "d")} disabled={options.room <= 1}>-</button>
                                        <span className="optionCounterNumber">{options.room}</span>
                                        <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                                    </div>
                                </div>
                            </div>
                            }
                    </div>
                    <div className="headerSearchItem">
                        <button className='headerSearchBtn' onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </>
            }
        </div>
    </div>
  )
}

export default Header