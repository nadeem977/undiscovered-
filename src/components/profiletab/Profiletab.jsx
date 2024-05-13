import React, { useContext, useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import './Profiletab.css';
import { BAE_URL_API, IMAGE_URL } from '../../Config';
import axios from "axios"
import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/CreateContext';
import UserDetails from '../details/UserDetails';
import RelativePlayers from '../RelativePlayers/RelativePlayers';
import BackupIcon from '@mui/icons-material/Backup';



const Profiletab = ({ profileDAta }) => {

    const { enqueueSnackbar } = useSnackbar();
    const [CreatingOffers, setCreatingOffers] = useState(false)
    const [UserLogin, setUserLogin] = useState(null)
    const [CreateTable, setCreateTable] = useState(false)
    const [selectSeason, setSelectSeason] = useState([])
    const { getUserProfile, seasons, getvideo, getImages, getoffers, userexist } = useContext(AppContext)
    const [creatingoffers, setCreatingoffers] = useState({ name: "", date: "" })
    const [newSeason, setNewSeason] = useState({ season: "", role: "", team: "", city: "", result: "" })



    useEffect(() => {
        var users = JSON.parse(localStorage.getItem("user"))
        setUserLogin(users)
        if (users?.email) {
            getUserProfile()
        }
    }, [])

    useEffect(() => {
        if (seasons) { setSelectSeason(seasons[0]) }
    }, [seasons])


    const scrollFunc = () => {
        setTimeout(() => {
            document.getElementById("scrolling").scrollIntoView({ behavior: "smooth" });
            document.getElementById("scrolling2").scrollIntoView({ behavior: "smooth" });
            document.getElementById("scroling3").scrollIntoView({ behavior: "smooth" });
        }, 400);
    };
    const uploadingvideos = async (event) => {
        const selectedFile = event.target.files[0]
        if (selectedFile.type.slice(0, 5) === "video") {
            var emails = JSON.parse(localStorage.getItem("user"))
            if (selectedFile && emails.email) {
                const data = {
                    video: selectedFile,
                    email: emails.email
                }
                try {
                    const headers = { "Content-Type": "multipart/form-data" };
                    await axios.post(`${BAE_URL_API}/UploadVideos`, data, { headers })
                    getUserProfile()
                } catch (error) {
                    console.log(error)
                }
            }
        } else {
            enqueueSnackbar("only video you can upload here", { variant: "error" })
        }
    }
    const uploadigImages = async (event) => {
        const selectedFile = event.target.files[0]
        if (selectedFile.type.slice(0, 5) === "image") {
            var emails = JSON.parse(localStorage.getItem("user"))
            try {
                if (selectedFile && emails) {
                    const data = {
                        email: emails.email,
                        image: selectedFile
                    }
                    const headers = { "Content-Type": "multipart/form-data" };
                    await axios.post(`${BAE_URL_API}/uploadImages`, data, { headers })
                    getUserProfile()
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            enqueueSnackbar("only image you can upload here", { variant: "error" })
        }
    }
    const deleteImages = async (img) => {
        var emails = JSON.parse(localStorage.getItem("user"))
        try {
            const data = { email: emails.email, image: img }
            await axios.post(`${BAE_URL_API}/RemovingImage`, data)
            getUserProfile()
        } catch (error) {
            console.log(error)
        }
    }
    const deleteVideos = async (video) => {
        var emails = JSON.parse(localStorage.getItem("user"))
        try {
            const data = { email: emails.email, video: video }
            await axios.post(`${BAE_URL_API}/RemovingVideos`, data)
            getUserProfile()
        } catch (error) {
            console.log(error)
        }
    }
    const CreateSeasontTable = async () => {

        var emails = JSON.parse(localStorage.getItem("user"))
        try {
            const data = {
                season: newSeason.season,
                role: newSeason.role,
                city: newSeason.city,
                result: newSeason.result,
                team: newSeason.team,
                email: emails.email
            }
            const res = await axios.post(`${BAE_URL_API}/CreatingTable`, data)
            setCreateTable(false)
            setNewSeason((prev) => ({ ...prev, season: "", role: "", city: "", team: "", result: "" }))
            getUserProfile()
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    const SortFunc = (val) => {
        for (let i = 0; i <= seasons?.length; i++) {
            const data = seasons[i]
            if (data.season === val) {
                setSelectSeason(data)
                break
            }
        }
    }
    const CreatingOffersUser = async () => {
        try {
            var emails = JSON.parse(localStorage.getItem("user"))
            const data = { uniname: creatingoffers.name, date: creatingoffers.date, email: emails.email }
            await axios.post(`${BAE_URL_API}/CreatingOffersUser`, data)
            setCreatingoffers((prev) => ({ ...prev, name: "", date: "" }))
            getUserProfile()
            setCreatingOffers(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="profiletab_section">
            <Container>
                <div className="playerprofile_profile_tabs_main_div">

                    <Tabs
                        onClick={scrollFunc}
                        defaultActiveKey="Videos"
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3" >
                        <Tab eventKey="About" title="About">
                            <div className='flex flex-col-reverse xl:flex-row gap-5'>
                                <div className='sm:min-w-[200px] min-w-auto'>
                                    <RelativePlayers year={profileDAta?.year} />
                                </div>
                                <div className='w-full'>
                                    <UserDetails profileDAta={profileDAta} selectSeason={selectSeason}
                                        CreateTable={CreateTable} seasons={seasons} setCreateTable={setCreateTable}
                                        SortFunc={SortFunc} CreateSeasontTable={CreateSeasontTable}
                                        newSeason={newSeason} setNewSeason={setNewSeason} />
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="Videos" title="Videos">
                            <div className='flex flex-col-reverse xl:flex-row gap-5'>
                                <div className='sm:min-w-[200px] min-w-auto'>
                                    <RelativePlayers year={profileDAta?.year} />
                                </div>
                                <div className="video_tab_last_videos_main w-full mt-3">
                                    {profileDAta?.name ? <div className='flex items-center gap-2'>
                                        <label htmlFor="videos" className="w-full py-4 mb-3 h-full rounded flex items-center justify-center border cursor-pointer hover:bg-[#F8F9FF]">
                                            <span> <BackupIcon /> videos</span>
                                            <input type="file" id='videos' className='hidden' onChange={uploadingvideos} />
                                        </label>
                                    </div> :
                                        <Link to="/profile">
                                            <div className="w-full mt-3 py-4 h-full rounded flex items-center justify-center border cursor-pointer hover:bg-[#F8F9FF]" onClick={() => setCreatingOffers(!CreatingOffers)}>
                                                Create Profile
                                            </div>
                                        </Link>}
                                    <div className='w-full boxphoto' id='scrolling'>
                                        {getvideo?.map((item, i) => (
                                            <div className="w-full h-fit m-1 boxover" key={i}>
                                                <i className="bi bi-trash3 cursor-pointer" onClick={() => deleteVideos(item)}></i>
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
                                    <RelativePlayers year={profileDAta?.year} />
                                </div>
                                <div className='w-full'>
                                    {profileDAta?.name ? <label htmlFor="Images" className="w-full py-4  mt-3  rounded flex items-center justify-center border cursor-pointer hover:bg-[#F8F9FF]">
                                        <span> <BackupIcon /> images</span>
                                        <input type="file" id='Images' className='hidden' onChange={uploadigImages} />
                                    </label> :
                                        <Link to="/profile">
                                            <div className="w-full mt-3 py-4 h-full rounded flex items-center justify-center border cursor-pointer hover:bg-[#F8F9FF]" onClick={() => setCreatingOffers(!CreatingOffers)}>
                                                Create Profile
                                            </div>
                                        </Link>}
                                    <div className='w-full mt-3 boxphoto' id='scrolling2'>
                                        {getImages?.map((item, i) => (
                                            <div className="w-fit boxover"
                                                key={i} onClick={() => deleteImages(item)}>
                                                <i className="bi bi-trash3 cursor-pointer"></i>
                                                <img src={`${IMAGE_URL}/${item}`} alt="images"
                                                    className='rounded imagestab mb-1 object-cover' />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="Offers" title="Offers">
                            <div className='flex flex-col-reverse xl:flex-row gap-5'>
                                <div className='sm:min-w-[200px] min-w-auto'>
                                    <RelativePlayers year={profileDAta?.year} />
                                </div>
                                <div className='w-full'>
                                    {profileDAta?.name ? <div className="w-full mt-3 py-4 rounded flex items-center justify-center border cursor-pointer hover:bg-[#F8F9FF]" onClick={() => setCreatingOffers(!CreatingOffers)}>
                                        Create offers
                                    </div> :
                                        <Link to="/profile">
                                            <div className="w-full mt-3 py-4 h-full rounded flex items-center justify-center border cursor-pointer hover:bg-[#F8F9FF]" onClick={() => setCreatingOffers(!CreatingOffers)}>
                                                Create Profile
                                            </div>
                                        </Link>}
                                    {CreatingOffers ? <div className='border rounded p-3 mt-2 flex items-center gap-1'>
                                        <input type="text" className='w-4/12 p-2 border rounded outline-none '
                                            placeholder='university'
                                            value={creatingoffers.name}
                                            onChange={(e) => setCreatingoffers((prev) => ({ ...prev, name: e.target.value }))} />
                                        <input type="date" className='w-4/12 p-2 border rounded outline-none '
                                            value={creatingoffers.date}
                                            onChange={(e) => setCreatingoffers((prev) => ({ ...prev, date: e.target.value }))} />
                                        <button className='w-4/12 p-2 border rounded outline-none hover:bg-[#F8F9FF]'
                                            onClick={CreatingOffersUser}>Add offers</button>
                                    </div> : null}
                                    <div className="offers_tab_last_cards_main_div mt-3" id='scroling3'>
                                        {getoffers?.map((item, i) => {
                                            const date = new Date(item?.date);
                                            const formattedDate = `${date.getDate()} ${new Intl.DateTimeFormat('en', { month: 'short' }).format(date)} ${date.getFullYear()}`;
                                            return (
                                                <div className="offers_tab_last_card_body my-2 hover:bg-slate-100" key={i}>
                                                    <div className='offers_tab_last_inner1'>
                                                        <img src={`${IMAGE_URL}/${userexist}/${item.img}`} alt="U" className='w-[50px] h-[50px] rounded-full object-cover' />
                                                        <div>
                                                            <h4 className='capitalize text-[15px] sm:text-xl'>{item.uniname}</h4>
                                                            <p className='text-[14px] sm:text-sm'>{formattedDate}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        {item.verify ?
                                                            <button type='button' className='bg-gray-200 py-1 px-3 rounded-full flex items-center gap-2 text-sm'>
                                                                <div className='p-1 bg-green-500 rounded-full w-fit'></div>Offered</button> :
                                                            <button type='button' className='bg-gray-200 text-sm py-1 px-3 rounded-full flex items-center gap-2'>
                                                                <div className='p-1 bg-red-500 rounded-full w-fit'></div> Transferred </button>}
                                                    </div>
                                                </div>
                                            );
                                        })}

                                    </div>
                                </div>
                            </div>


                        </Tab>
                        <Tab eventKey="News" title="News feed">
                            <div className='flex flex-col-reverse xl:flex-row gap-5'>
                                <div className='sm:min-w-[200px] min-w-auto'>
                                    <RelativePlayers year={profileDAta?.year} />
                                </div>
                                <div className='w-full'>
                                    {profileDAta?.Article?.map((item, i) => {
                                        const date = new Date(item.createdAt);
                                        const formattedDate = `${date.getDate()} ${new Intl.DateTimeFormat('en', { month: 'short' }).format(date)} ${date.getFullYear()}`;
                                        return (
                                            <Link to={`/ShowArticle/${profileDAta?._id}/${item?._id}`} key={i}>
                                                <div className='w-ful shadofeed p-3 rounded'>
                                                    <h1>{item?.title}</h1>
                                                    <p className='mt-2 text-sm'>{formattedDate}</p>
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
    )
}

export default Profiletab