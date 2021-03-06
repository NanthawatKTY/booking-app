import React from 'react'
import useFetch from '../../hooks/useFetch'
import './featured.css'

const Featured = () => {

  const {data, loading, error} = useFetch(
    "hotels/countByCity?cities=Pattaya,Bangkok,Lampang"
    )  
 
  return (
    <div className='featured'>
        {/* If loading is true */}
        {loading ? ("Loading please wait") 
        : (
            <>
                <div className="featuredItem">
                    <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/region/square250/49651.webp?k=8f0a6f72f68d8342fc376418b933e045e21082d4f59ca5f2b6cba763693d03ff&o=" />
                    <div className="featuredTitles">
                        <h1>Pattaya</h1>
                        <h2>{data[0]} properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/square250/620029.webp?k=2b3fb39970f71c5190270e70dd344cac77a2cd8b17c2f25f1a394d1c6e23ecc1&o=" />
                    <div className="featuredTitles">
                        <h1>Bangkok</h1>
                        <h2>{data[1]} properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/square250/688686.webp?k=29874ff5f47c2539d4b784b4c480094758a41fd1597414ae565c00b0ce22bd17&o=" />
                    <div className="featuredTitles">
                        <h1>Lampang</h1>
                        <h2>{data[2]} properties</h2>
                    </div>
                </div>
            </>
        )}
    </div>
  )
}

export default Featured