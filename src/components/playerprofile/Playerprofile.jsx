import React, { useContext,useState ,useEffect} from 'react'
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
                                                   {profileDAta.image ? <img src={`${IMAGE_URL}/${profileDAta.image}`} alt="" />:
                                                    <img src={profilimg} alt="image" />}
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div className="playerprofile_profile_card_title">
                                                <h2>{profileDAta.name || "Your name"} <img src={USA_flag} alt="" /></h2>
                                                <p><img src={Flag2} alt="" /> Carnegie Mellon University</p>
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
                                                <div className="playerprofile_social_icons_main">
                                                    <img src={Fb} alt="" />
                                                    <img src={Insta} alt="" />
                                                    <img src={Yt} alt="" />
                                                    <img src={X} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="video_tab_stat_card_body">
                                                <h5>2023-24 SEASON STATS</h5>
                                                <div className="video_tab_stat_card_inner">
                                                    <div>
                                                        <p>PTS</p>
                                                        <h6>0.0</h6>
                                                    </div>
                                                    <div>
                                                        <p>REB</p>
                                                        <h6>0.1</h6>
                                                    </div><div>
                                                        <p>AST</p>
                                                        <h6>0.0</h6>
                                                    </div>
                                                    <div>
                                                        <p>FG%</p>
                                                        <h6>0.0</h6>
                                                    </div>
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
                                </div>
                            </div>

                        </div>
                        <Profiletab profileDAta={profileDAta}/>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Playerprofile


// playerprofile