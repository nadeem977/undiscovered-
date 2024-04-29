import React, { useContext, useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import './Playerprofile.css'
import arrow from '../../assets/img/Arrow.svg';
import USA_flag from '../../assets/img/flag.svg';
import Flag2 from '../../assets/img/Flag2.svg';
import PP from '../../assets/img/pp.svg';
import Fb from '../../assets/img/fb.svg';
import Insta from '../../assets/img/insta.svg';
import Yt from '../../assets/img/yt.svg';
import X from '../../assets/img/X.svg';
import Profiletab from '../profiletab/Profiletab';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/CreateContext';
import { IMAGE_URL } from '../../Config';
import profilimg from "../../assets/img/dummi.png"
import nameplat from "../../assets/img/plt.svg"
import imgmils from "../../assets/img/mils.png"
import varifyingimg from "../../assets/img/verify.svg"

const Playerprofile = () => {

    const { profilesInfo } = useContext(AppContext)
    const [profileDAta, setProfileData] = useState([])




    const findProfile = () => {

        const matchingemail = JSON.parse(localStorage.getItem("user"))
        if (matchingemail && profilesInfo) {
            for (let i = 0; i < profilesInfo.length; i++) {
                const matchprofile = profilesInfo[i]
                if (matchprofile.email === matchingemail.email) {
                    setProfileData(matchprofile)
                }
                break
            }
        }
    }


    useEffect(() => {
        findProfile()
    }, [profilesInfo])

    return (
        <>
            <section className="playerprofile_section">
                <Container>
                    <div className="playerprofile_title">
                        <Link to="/"><img src={arrow} alt="" /></Link>
                        <p>Player Profile</p>
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
                                                <h2 className='backimg '><img src={USA_flag} alt="" /> {profileDAta.role || " Player"}</h2>
                                            </div>
                                            <div className="playerprofile_profile_card_title">
                                                <div className='mils text-[14px]'><img src={imgmils} alt="icon" /> 14 miles away</div>
                                                <div className='mils my-1'> <h1 className='m-0 text-2xl font-bold'>Zaytsev khair</h1> <img src={varifyingimg} alt="iconn" /></div>
                                                <div className='mils'><img src={Flag2} alt="" /> Carnegie Mellon University </div>
                                                <br />
                                                <div className="playerprofile_social_icons_main">
                                                    <div className='p-[15px]'>
                                                    <img src={Fb} alt="" /></div>
                                                    <div><img src={Insta} alt="" /></div>
                                                    <div><img src={Yt} alt="" /></div>
                                                    <div> <img src={X} alt="" /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='profile_content2'>
                                            <div>
                                                <div className="playerprofile_info_div">
                                                    <div>
                                                        <p>Height</p>
                                                        <h6>{profileDAta.height || 0}</h6>
                                                    </div>
                                                    <div>
                                                        <p>Weight</p>
                                                        <h6>{profileDAta.weight || 0} lbs</h6>
                                                    </div>
                                                    <div style={{ borderRight: "none" }}>
                                                        <p>Year</p>
                                                        <h6>{profileDAta.year || 0}</h6>
                                                    </div>
                                                </div>
                                                <div className="profile_followers_counter">
                                                    <div>
                                                        <h6>150</h6>
                                                        <p>Posts</p>
                                                    </div>
                                                    <div>
                                                        <h6>125k</h6>
                                                        <p>Followers</p>
                                                    </div>
                                                    <div>
                                                        <h6>1,782</h6>
                                                        <p>Following</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div  >
                                            <div className='flex justify-end mt-[-20px] '>
                                                <div className='border border-black w-[40px] flex items-center justify-center h-[40px] rounded-full'>
                                                    <i className="bi bi-star text-[20px]"></i></div>
                                                {/* <i className="bi bi-star-fill"></i> */}
                                            </div>
                                            <button className='w-[200px] mt-2 text-[18px] py-2.5 bg-[#FF3333] flex gap-2 items-center justify-center text-white rounded-full '>
                                                <i className="bi bi-person-add"></i>  Follow</button> 
                                            <button className='w-[200px]  text-[18px] hovring  m-0 py-2.5 flex gap-2 border mt-3 items-center justify-center border-gray-600 rounded-full'>
                                                <i className="bi bi-chat-dots-fill"></i>  Message
                                            </button>

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


// playerprofile