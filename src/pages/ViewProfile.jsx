import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import arrow from '../assets/img/Arrow.svg';
import Fb from '../assets/img/fb.svg';
import Insta from '../assets/img/insta.svg';
import Yt from '../assets/img/yt.svg';
import X from '../assets/img/X.svg';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context/CreateContext';
import { BAE_URL_API, IMAGE_URL } from '../Config';
import profilimg from "../assets/img/dummi.png"
import nameplat from "../assets/img/plt.svg"
import varifyingimg from "../assets/img/verify.svg"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios"
import ViewDetails from '../components/details/ViewDetails';
import AproveingOffers from '../components/AprovingOffers/AproveingOffers';
import RelativePlayers from '../components/RelativePlayers/RelativePlayers';


const ViewProfile = () => {

    const { isAdmin, preving } = useContext(AppContext)
    const [profileDAta, setProfileData] = useState([])
    const [seasons, setSeasons] = useState([])
    const [getvideo, setGetvideo] = useState([])
    const [getImages, setGetImages] = useState([])
    const [selectSeason, setSelectSeason] = useState([])
    const [getoffers, setGetOffers] = useState([])
    const [profilUserEmail, setProfileUserEmail] = useState("")
    const [proving, setAproving] = useState({ edit: false, name: "", date: "", varify: false, Id: "", logo: "", img: "", email: "" })
    const { id } = useParams();
    const [countPosts, setCountPosts] = useState({ imgCnt: 0, vdoCnt: 0 });
 
    useEffect(() => {
        setCountPosts((prev) => ({ ...prev, vdoCnt: 0, imgCnt: 0 }));
        getUserProfile()
    }, [preving,id])

    useEffect(() => {
        setSelectSeason(seasons[0])
    }, [seasons])


    const getUserProfile = async () => {
        try {
            const data = { Id: id }
            const respo = await axios.post(`${BAE_URL_API}/findOneProfile`, data)
            setProfileData(respo?.data)
            setGetImages(respo?.data?.Images)
            setGetvideo(respo?.data?.Videos)
            setGetOffers(respo?.data?.Offers)
            setSeasons(respo?.data?.Seasons)
            setProfileUserEmail(respo?.data?.email)
            setCountPosts((prev) => ({
                ...prev,
                imgCnt: respo?.data?.Images?.length,
                vdoCnt: respo?.data?.Videos?.length,
            }));
        } catch (error) {
            console.log(error)
        }
    }

    const scrollFunc = () => {
        setTimeout(() => {
            document.getElementById("scrolling").scrollIntoView({ behavior: "smooth" });
            document.getElementById("scrolling2").scrollIntoView({ behavior: "smooth" });
            document.getElementById("scroling3").scrollIntoView({ behavior: "smooth" });
        }, 400);
    };

    const SortFunc = (val) => {
        for (let i = 0; i <= seasons?.length; i++) {
            const data = seasons[i]
            if (data.season === val) {
                setSelectSeason(data)
                break
            }
        }
    }


    return (
        <section className="playerprofile_section">
            <AproveingOffers proving={proving} />
            <Container>
                <div className="playerprofile_title">
                    <Link to="/"><img src={arrow} alt="" /></Link>
                    <p className='capitalize'>{profileDAta.name}</p>
                    <div className='mydiv'></div>
                </div>
                <div className="playerpro_inner_main">
                    <div className="playerpro_inner_for_shadow">
                        <div className="playerprofile_profile_card_main_div">
                            <div className="playerprofile_profile_card_body">
                                <div className="flex gap-2 flex-col xl:flex-row">

                                    <div className='profile_content1 w-full xl:w-7/12'>
                                        <div className="playerprofile_profile_img">
                                            <div className="playerprofile_profile_inner1">
                                                {profileDAta.image ? <img src={`${IMAGE_URL}/${profileDAta.image}`} alt="" /> :
                                                    <img src={profilimg} alt="image" />}
                                                <span></span>
                                            </div>
                                            <img src={nameplat} alt="image" className='imageName' />
                                            <h2 className='backimg '>
                                                {profileDAta.role || "role"}</h2>
                                        </div>
                                        <div className="playerprofile_profile_card_title">
                                            <div className='mils my-1'> <h1 className='m-0 text-2xl font-bold capitalize'>{profileDAta.name || "name"}</h1> <img src={varifyingimg} alt="iconn" /></div>
                                            <div className='mils capitalize text-gray-500'>
                                                {profileDAta.university || "University"} </div>

                                            <div className="playerprofile_social_icons_main flex items-center gap-3 ">
                                                <div className='p-[15px]'>
                                                    <img src={Fb} alt="" /></div>
                                                <div><img src={Insta} alt="" /></div>
                                                <div><img src={Yt} alt="" /></div>
                                                <div> <img src={X} alt="" /></div>
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
                                                        <div>
                                                            <h6>{countPosts.imgCnt + countPosts.vdoCnt || 0}</h6>
                                                            <p>Posts</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="video_tab_stat_card_body mt-4 w-full xl:w-5/12">
                                        <h5>2023-24 SEASON STATS</h5>
                                        <div className="video_tab_stat_card_inner">
                                            <div className='w-3/12'>
                                                <p>PTS</p>
                                                <h6>{profileDAta.PTS}</h6>
                                            </div>
                                            <div className='w-3/12'>
                                                <p>REB</p>
                                                <h6>{profileDAta.REB}</h6>
                                            </div>
                                            <div className='w-3/12'>
                                                <p>AST</p>
                                                <h6>{profileDAta.AST}</h6>
                                            </div>
                                            <div className='w-3/12'>
                                                <p>FG%</p>
                                                <h6>{profileDAta.FG}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* profile tabs ======================================================= */}

                    <section className="profiletab_section">
                        <Container>
                            <div className="playerprofile_profile_tabs_main_div">

                                <Tabs
                                    onClick={scrollFunc}
                                    defaultActiveKey="About"
                                    transition={false}
                                    id="noanim-tab-example"
                                    className="mb-3" >
                                    <Tab eventKey="About" title="About">
                                       <div className='flex flex-col-reverse xl:flex-row gap-5'>
                                             <div className='sm:min-w-[200px] min-w-auto'>
                                                <RelativePlayers />
                                            </div>
                                            <div className='w-full'>
                                                <ViewDetails profileDAta={profileDAta} selectSeason={selectSeason}
                                                    seasons={seasons}
                                                    SortFunc={SortFunc} />
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="Videos" title="Videos">
                                       <div className='flex flex-col-reverse xl:flex-row gap-5'>
                                              <div className='sm:min-w-[200px] min-w-auto'>
                                                <RelativePlayers />
                                            </div>
                                            <div className="video_tab_last_videos_main mt-3 w-full">
                                                <div className='w-full boxphoto' id='scrolling'>
                                                    {getvideo?.map((item, i) => (
                                                        <div className="w-full h-fit m-1 boxover" key={i}>
                                                            <video loop preload="auto" className='rounded w-full h-[200px] mb-1 object-cover' controls playsInline={true}>
                                                                <source src={`${IMAGE_URL}/${item}`} type="video/mp4" />
                                                            </video>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="Photos" title="Photos">
                                    <div className='flex flex-col-reverse xl:flex-row gap-5'>
                                              <div className='sm:min-w-[200px] min-w-auto'>
                                                <RelativePlayers />
                                            </div>
                                            <div className='w-full mt-3 boxphoto ' id='scrolling2'>
                                                {getImages?.map((item, i) => (
                                                    <div className="w-fit boxover" id='scrolling' key={i}>
                                                        <img src={`${IMAGE_URL}/${item}`} alt="images" className='rounded imagestab mb-1 object-cover' />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="Offers" title="Offers">

                                       <div className='flex flex-col-reverse xl:flex-row gap-5'>
                                              <div className='sm:min-w-[200px] min-w-auto'>
                                                <RelativePlayers />
                                            </div>
                                            <div className="offers_tab_last_cards_main_div mt-3 w-full" id='scroling3'>
                                                {getoffers?.map((item, i) => {
                                                    const date = new Date(item?.date);
                                                    const formattedDate = `${date.getDate()} ${new Intl.DateTimeFormat('en', { month: 'short' }).format(date)} ${date.getFullYear()}`;
                                                    return (
                                                        item.verify ? (

                                                            <div className="offers_tab_last_card_body hover:bg-slate-100 mb-2" key={i}>
                                                                <div className='offers_tab_last_inner1'>
                                                                    <img src={`${IMAGE_URL}/${profilUserEmail}/${item.img}`} alt="User" className='w-[50px] h-[50px] rounded-full object-cover' />
                                                                    <div >
                                                                        <h4 className='capitalize text-xl'>{item.uniname}</h4>
                                                                        <p>{formattedDate}</p>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <button type='button' className='bg-gray-200 py-1 px-3 rounded-full flex items-center gap-2'>
                                                                        <div className='p-1 bg-green-500 rounded-full w-fit'></div>Offered</button>
                                                                </div>
                                                            </div>

                                                        ) : isAdmin &&
                                                        <div className="offers_tab_last_card_body mt-1 hover:bg-slate-100">
                                                            <div className='offers_tab_last_inner1'>
                                                                <img src={`${IMAGE_URL}/${profilUserEmail}/${item.img}`} alt="User" className='w-[50px] h-[50px] rounded-full object-cover' />
                                                                <div>
                                                                    <h4 className='capitalize text-xl'>{item.uniname}</h4>
                                                                    <p>{formattedDate}</p>
                                                                </div>
                                                            </div>
                                                            <div >
                                                                {isAdmin && (
                                                                    <button type='button' className='bg-gray-200 py-1 px-3 rounded-full flex items-center gap-2' onClick={() => setAproving((prev) => ({ ...prev, name: item.uniname, date: item.date, varify: item.varify, Id: item._id, logo: item.logo, img: item.img, edit: true, email: profileDAta.email }))}>
                                                                        <div className='p-1 bg-red-500 rounded-full w-fit'></div> Transferred </button>
                                                                )}


                                                            </div>
                                                        </div>

                                                    )
                                                })}
                                            </div>
                                        </div>


                                    </Tab>
                                    <Tab eventKey="news" title="News feed">

                                       <div className='flex flex-col-reverse xl:flex-row gap-5'>
                                              <div className='sm:min-w-[200px] min-w-auto'>
                                                <RelativePlayers />
                                            </div>
                                            <div className='w-full'>
                                                {profileDAta?.Article?.map((item, i) => {
                                                    const date = new Date(item.createdAt);
                                                    const formattedDate = `${date.getDate()} ${new Intl.DateTimeFormat('en', { month: 'short' }).format(date)} ${date.getFullYear()}`;
                                                    return (
                                                        <Link to={`/ShowArticle/${profileDAta?._id}/${item?._id}`} key={i}>
                                                            <div className='w-ful shadofeed p-3 rounded'>
                                                                <h1>{item?.title}</h1>
                                                                <p className='mt-2'>{formattedDate}</p>
                                                            </div>
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                    </Tab>
                                </Tabs>
                            </div>
                        </Container>
                    </section>
                    {/* profile tabs======================================================= */}
                </div>
            </Container>
        </section>
    )
}

export default ViewProfile
