import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/CreateContext'
import { IMAGE_URL } from '../../Config'
import { Link } from 'react-router-dom'

const RelativePlayers = () => {

    const { profilesInfo} = useContext(AppContext)
    const [filterYears, setFilterYears] = useState("")
    const [filterTeam, setFilterTeam] = useState("")
    
    const FilterByyears = profilesInfo.filter((item) => {
        return item.year.trim().includes(filterYears.trim())
    })
    const FilterByTeams = FilterByyears.filter((item) => {
        return item?.currentTeam.toLowerCase().trim().includes(filterTeam.toLowerCase().trim())
    })
    const uniqueYears = new Set(profilesInfo.map(item => item?.year));
 
    return (
        <div>
            <div>
                <h1 className='text-[#6A6A6A] my-3'>SWTICH PLAYER</h1>
                <div className='flex flex-col gap-3 mb-4'>
                    <select className='w-full p-2 border rounded-full outline-none form-select shadow-none' onChange={(e) => setFilterTeam(e.target.value)}>
                        <option value="">Clear Filter</option>
                        {profilesInfo.map((item, i) => (
                            <option key={i} value={`${item?.currentTeam}`}>{item?.currentTeam}</option>
                        ))}
                    </select>
                    <select className='w-full p-2 border rounded-full outline-none form-select shadow-none' onChange={(e) => setFilterYears(e.target.value)}>
                        <option value="">Clear Filter</option>
                        {[...uniqueYears].map((year, i) => (
                            <option key={i} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
            </div>
            {FilterByTeams.map((item, i) => (
                <Link to={`/ViewProfile/${item._id}`} key={i} >
                    <div className='flex items-center border-t border-b py-3 gap-3'>
                        <img
                            src={`${IMAGE_URL}/${item?.image}`}
                            alt="images"
                            className='w-[60px] h-[60px] object-cover rounded-full'/>
                        <div>
                            <h1>{item.name}</h1>
                            <p>PG | {item.height} | {item.year}</p>
                        </div>
                    </div>
                </Link>

            ))}


        </div>
    )
}

export default RelativePlayers
