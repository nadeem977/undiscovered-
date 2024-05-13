import React, { useContext, useEffect, useState } from 'react'
import Modal from '@mui/material/Modal';
import { AppContext } from '../../context/CreateContext';
import { BAE_URL_API, IMAGE_URL } from '../../Config';
import axios from "axios"



const AddRecuitersModal = ({ ArticleId, profileId, GetArticals }) => {

    const { isAdmin } = useContext(AppContext)
    const [open, setOpen] = React.useState(false);
    const [Profiles, setProfiles] = useState([])
    const handleClose = () => setOpen(false);
    const [search, setSearch] = useState("")
    const [playerId, setPlayerId] = useState()

    const getUserProfile = async () => {
        setOpen(true)
        setPlayerId("")
        try {
            const respo = await axios.get(`${BAE_URL_API}/getProfileData`);
            setProfiles(respo?.data)
        } catch (error) {
            console.log(error);
        }
    };

    const FilterUsers = Profiles.filter((item) => {
        return item.name.toLowerCase().trim().includes(search.toLowerCase().trim())
    })
 

    const addRercuiter = async () => {
        try {
            const data = {
                img: playerId.image,
                name: playerId.name, 
                height: playerId.height,
                year: playerId.year,
                ArticleId: ArticleId,
                profileId: profileId,
                playerId: playerId._id
            }
            await axios.post(`${BAE_URL_API}/UpdateArticles`, data)
            setOpen(false)
            setPlayerId("")
            GetArticals()
        } catch (error) {
            console.log(error)
        }

    };




    return (
        <>
            <div>
                {isAdmin && <button className='py-2 px-3 rounded-full text-center border cursor-pointer capitalize' onClick={getUserProfile}> add more Recruites  </button>}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <div className='provingOffers rounded p-2'>
                        <input type="text" placeholder='search players' className='p-2 rounded outline-none border w-full mb-3' onChange={(e) => setSearch(e.target.value)} />
                        <div className='w-[600px] h-[300px] overflow-y-auto flex flex-col gap-2 py-3'>
                            {FilterUsers && FilterUsers?.map((item, i) => (
                                <div key={i} className={`flex items-center hover:bg-slate-200 gap-4 w-full rounded bg-slate-100 p-3 cursor-pointer
                 ${playerId._id === item._id ? "bg-slate-200" : ""}`} onClick={() => setPlayerId(item)}>
                                    <div>
                                        <img src={`${IMAGE_URL}/${item.image}`} alt="img" className='w-[60px] h-[51px] rounded-full  object-cover' />
                                    </div>
                                    <div className='flex justify-between w-full'>
                                        <div>
                                            <h1 className='capitalize'>{item?.name}</h1>
                                            <p className='capitalize text-gray-600 text-[15px]'>{item.university}</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-600 float-right'>{item?.height} | {item?.weight}</p>
                                            <p className='text-gray-600 capitalize mt-4'>{item?.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className='capitalize w-full border rounded p-2 bg-slate-100 hover:bg-slate-200' onClick={addRercuiter}>select Recruites</button>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default AddRecuitersModal
