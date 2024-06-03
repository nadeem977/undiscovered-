import React, { useContext, useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import './Playerprofile.css'
import arrow from '../../assets/img/Arrow.svg';
import Fb from '../../assets/img/fb.svg';
import Insta from '../../assets/img/insta.svg';
import Yt from '../../assets/img/yt.svg';
import X from '../../assets/img/X.svg';
import Profiletab from '../profiletab/Profiletab';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/CreateContext';
import { BAE_URL_API, IMAGE_URL } from '../../Config';
import profilimg from "../../assets/img/dummi.png"
import nameplat from "../../assets/img/plt.svg"
import varifyingimg from "../../assets/img/verify.svg"
import axios from "axios"
import SocialModal from '../socialModal/SocialModal';


const Playerprofile = () => {

    const { setEditableData, userexist, getUserProfile, profileDAta, countPosts } = useContext(AppContext)

    useEffect(() => {
        getUserProfile()
    }, [])

    const Deleteprofile = async (Id, image) => {
        try {
            const data = { Id: Id, image: image }
            await axios.post(`${BAE_URL_API}/deleteProfile`, data)
            setEditableData()
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <section className="playerprofile_section">
                <Container>
                    <div className="playerprofile_title">
                        <Link to="/"><img src={arrow} alt="" /></Link>
                        <p>{profileDAta.name}</p>
                        <div className='mydiv'></div>
                    </div>
                    <div className="playerpro_inner_main">
                        <div className="playerpro_inner_for_shadow">
                            <div className="playerprofile_profile_card_main_div">
                                <div className="playerprofile_profile_card_body">
                                    <div className="playerprofile_profile_card_inner">
                                        <div className='profile_content1'>
                                            <div className="playerprofile_profile_img">
                                                <div className="playerprofile_profile_inner1">
                                                    {profileDAta.image ? <img src={`${IMAGE_URL}/${profileDAta.image}`} alt="" /> :
                                                        <img src={profilimg} alt="image" />}
                                                    <span></span>
                                                </div>
                                                <img src={nameplat} alt="image" className='imageName' />
                                                <h2 className='backimg '>
                                                    {/* <img src={USA_flag} alt="" /> */}
                                                    {profileDAta?.role?.slice(0,10) || "role"}</h2>
                                            </div>
                                            <div className="playerprofile_profile_card_title">
                                                {/* <div className='mils text-[14px]'><img src={imgmils} alt="icon" /> 14 miles away</div> */}
                                                <div className='mils my-1'> <h1 className='m-0 text-2xl font-bold capitalize'>{profileDAta.name || "name"}</h1> <img src={varifyingimg} alt="iconn" /></div>
                                                <div className='mils capitalize'>
                                                    {/* <img src={Flag2} alt="" /> */}
                                                    {profileDAta.university || "University"} </div>
                                                <br />
                                                {profileDAta.facebook || profileDAta.instagram || profileDAta.youtube || profileDAta.twitter ?

                                                    <div className="playerprofile_social_icons_main flex items-center gap-4">
                                                        {profileDAta.facebook &&  <Link to={`${profileDAta.facebook}`}><div className='p-[15px]'><img src={Fb} alt="" /></div></Link>}
                                                        {profileDAta.instagram &&  <Link to={`${profileDAta.instagram}`}><div><img src={Insta} alt="" /></div></Link>}
                                                        {profileDAta.youtube && <Link to={`${profileDAta.youtube}`}><div><img src={Yt} alt="" /></div></Link>}
                                                        {profileDAta.twitter && <Link to={`${profileDAta.twitter}`}><div> <img src={X} alt="" /></div></Link>}
                                                    </div>

                                                    : <SocialModal />}
                                            </div>
                                        </div>

                                        <div className="playerprofile_info_div">
                                            <div>
                                                <p>Height</p>
                                                <h6>{profileDAta.height || 0}</h6>
                                            </div>
                                            <p className='border-r border-r-[#6E779A33] h-[40px] ' />
                                            <div>
                                                <p>Weight</p>
                                                <h6>{profileDAta.weight || 0} lbs</h6>
                                            </div>
                                            <p className='border-r border-r-[#6E779A33] h-[40px] ' />
                                            <div style={{ borderRight: "none" }}>
                                                <p>Year</p>
                                                <h6>{profileDAta.year || 0}</h6>
                                            </div>
                                        </div>
                                        <div className='flowbtns'>
                                            {/* <div className='flex manageStar justify-end mt-[-20px] '>
                                                <div className='border  border-black w-[40px]  flex items-center justify-center h-[40px] rounded-full'>
                                                    <i className="bi bi-star text-[20px]"></i>
                                                </div>
                                                <i className="bi bi-star-fill"></i>
                                            </div> */}
                                            {profileDAta.name && <button className='w-[200px]  mt-2 text-[18px] py-2.5
                                             bg-[#FF3333] flex gap-2 items-center justify-center
                                              text-white rounded-full '
                                                onClick={() => Deleteprofile(profileDAta._id, profileDAta.image)}>
                                                <i className="bi bi-person-add"></i>  Delete profile</button>}
                                            <Link to={`/${userexist ? "profile" : "login"}`} className='w-full'>
                                                {profileDAta.name ?
                                                    <button className=' w-[200px]  text-[18px] hovring  m-0 py-2.5 flex gap-2 border mt-3 items-center justify-center border-gray-600 rounded-full'
                                                        onClick={() => setEditableData(profileDAta)}>
                                                        Edit profile
                                                    </button>
                                                    : <button className=' w-[200px] text-[18px] hovring  m-0 py-2.5 flex gap-2 border mt-3 items-center justify-center border-gray-600 rounded-full'>
                                                        Create profile
                                                    </button>
                                                }
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <Profiletab profileDAta={profileDAta} />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Playerprofile

