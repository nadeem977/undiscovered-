import React, { useContext, useEffect, useState } from 'react'
import Modal from '@mui/material/Modal';
import { BAE_URL_API } from '../../Config';
import axios from "axios"
import { AppContext } from '../../context/CreateContext';


const AproveingOffers = ({ proving }) => {

    const [open, setOpen] = React.useState(false);
    // const [verifyLogo, setverIfyLogo] = useState()
    const {setProving} =useContext(AppContext)
    const [teamLogo, setTeamLogo] = useState()

    useEffect(() => {
        if (proving.edit) { setOpen(true) }
    }, [proving])

    const handleClose = () => { setOpen(false) }

    const AprovingOffers = async () => {
        try {
            const formData = new FormData();
            formData.append('email', proving.email);
            formData.append('verifing', true);
            formData.append('Id', proving.Id);
            // formData.append('images', verifyLogo);
            formData.append('image', teamLogo);
            const headers = { "Content-Type": "multipart/form-data" };
             await axios.post(`${BAE_URL_API}/UpdateOffers`, formData, { headers });
            setProving(true)
            setOpen(false)
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <div className='provingOffers flex flex-col gap-2 p-5 rounded max-w-[500px]'>
                    <div className='flex items-center justify-between flex-col w-full '>
                        <div className='w-full  flex flex-col gap-2 items-center '>
                            <h1 className='text-2xl capitalize'>{proving?.name}</h1>
                            <h1 className='text-xl'>{proving?.date}</h1>
                        </div>
                        <div className='w-full'>
                            {/* <label htmlFor="2" className='w-fit capitalize rounded '>upload verify logo</label>
                            <input type="file" id='2' className='mb-2 border rounded p-2 hover:bg-[#f5f6fb] cursor-pointer inputWidth' onChange={(e) => setverIfyLogo(e.target.files[0])} /> */}
                            <label htmlFor="3" className='w-fit capitalize mt-2'>Upload team logo</label>
                            <input type="file" id='3' className='border rounded p-2 hover:bg-[#f5f6fb] cursor-pointer inputWidth' onChange={(e) => setTeamLogo(e.target.files[0])} />
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <input type="checkbox" id='checking' className='w-[30px]' />
                        <label htmlFor="checking" className='text-green-600 text-xl'>verifed</label>
                    </div>
                    <button className='w-full rounded-full bg-green-200 border p-2' onClick={AprovingOffers}>verify</button>
                </div>
            </Modal>
        </div>
    )
}

export default AproveingOffers
