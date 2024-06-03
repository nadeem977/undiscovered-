import React, { useContext, useEffect, useState } from 'react'
import arrow from '../assets/img/Arrow.svg';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { CiSearch } from "react-icons/ci";
import useMediaQuery from '@mui/material/useMediaQuery';
import verifyimg from "../assets/img/verify.svg"
import { BAE_URL_API, IMAGE_URL } from '../Config';
import axios from "axios"
import { AppContext } from '../context/CreateContext';



const Dashboard = () => {


    const [profilesInfo, setProfilesInfo] = useState([])
    const [searching, setSearching] = useState("")
    const { isAdmin } = useContext(AppContext)

    useEffect(() => {
        getProfileData()
    }, [])

    const getProfileData = async () => {
        try {
            const res = await axios.get(`${BAE_URL_API}/getProfileData`);
            setProfilesInfo(res?.data);
        } catch (error) {
            console.log(error);
        }
    };

    const matches = useMediaQuery('(max-width:600px)');
    const filterprofile = profilesInfo.filter((item) => {
        return item.name.toLowerCase().trim().includes(searching.toLowerCase().trim())
    })
    if (!isAdmin) return null

    return (
        <>
            <Container>
                <div className='playerprofile_section mt-4'>
                    <div className="playerprofile_title">
                        <Link to="/"><img src={arrow} alt="" /></Link>
                        <p>Admin Dashboard</p>
                        <div className='mydiv'></div>
                    </div>
                </div>
                <div className='flex items-center mt-3 gap-2'>
                    <div className='flex items-center w-full bg-[#F8FAFC] border rounded-full pl-3 pr-1 border-[#E9E9E9] gap-1'>
                        <CiSearch className='text-[#818181] ' />
                        <input type="text" placeholder='Search payer' className='w-full outline-none border-none bg-[#F8FAFC] rounded-full p-2' value={searching} onChange={(e) => setSearching(e.target.value)} />
                    </div>
                </div>

                <div className='overflow-auto'>
                    <div className='mt-3 min-w-[700px] '>
                        {filterprofile.map((item, i) => (
                            <div className='w-full border rounded my-1 p-2 flex justify-between items-center cursor-pointer hover:bg-slate-100' key={i}>
                                <Link to={`/Viewprofile/${item._id}`}>
                                    <div className='flex items-center gap-3'>
                                        <img src={`${IMAGE_URL}/${item.image}`} alt="icons" className='rounded-full w-[60px] h-[60px] object-cover' />
                                        <span>
                                            <div className='flex gap-2 font-bold items-center'>
                                                {item.name}
                                                <img src={verifyimg} alt="icons" />
                                            </div>
                                            <p className='text-[14px] text-[#696969] p-0 m-0'>{item.university}</p>
                                            <div>
                                                <p className='text-[16px]'>F | {item.height}” | {item.weight} Ibs | {item.year}</p>
                                            </div>
                                        </span>
                                    </div>
                                </Link>
                                <div className='flex justify-between flex-wrap gap-2'>
                                    {item.Offers.filter(offer => offer.verify).length > 0 && (
                                        <Link to={`/Viewprofile/${item._id}`}>
                                            <button className='bg-green-100 p-1 rounded-full px-4'>
                                                {item.Offers.filter(offer => offer.verify).length} Verified
                                            </button>
                                        </Link>
                                    )}
                                    <Link to={`/Viewprofile/${item._id}`}>
                                        {item.Offers.filter(offer => !offer.verify).length > 0 && (
                                            <button className='bg-red-100 p-1 rounded-full px-4'>
                                                {item.Offers.filter(offer => !offer.verify).length} Not Verified
                                            </button>
                                        )}
                                    </Link>
                                    {
                                        item.Article.length > 0 && (
                                            <Link to={`/ShowArticle/${item._id}/${item.Article[0]._id}`}>
                                                <button className='bg-blue-100 p-1 rounded-full px-4'>
                                                    {item.Article.length} Articles
                                                </button>
                                            </Link>
                                        )
                                    }



                                    <Link to={`/Articles/${item._id}`}><button className=' bg-[#e1ebfa] p-1 rounded-full px-4 capitalize'>create Article</button></Link>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </Container>
        </>
    )
}

export default Dashboard
