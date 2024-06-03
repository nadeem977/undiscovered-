import React, { useContext, useState } from 'react' 
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { BAE_URL_API } from '../../Config';
import { AppContext } from '../../context/CreateContext';

 
  
const SocialModal = () => {

    const [open, setOpen] = React.useState(false);
    const[facebook,setFacebook] = useState("")
    const[instagram,setInstagram] = useState("")
    const[youtube,setYoutube] = useState("")
    const[twitter,setTwitter] = useState("")
    const {getUserProfile} = useContext(AppContext)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
const AddSocialURL = async()=>{
    const mails = JSON.parse(localStorage.getItem("user"))
    try {
        const data = {
            facebook:facebook,
            instagram:instagram,
            youtube:youtube,
            twitter:twitter,
            email:mails.email
        }
        await axios.post(`${BAE_URL_API}/SocialsLinks`,data)
        getUserProfile()
        setOpen(false)
    } catch (error) {
        console.log(error)
    }
}


  return (
    <div>
        <button className='p-2 border rounded hovring w-[200px]' onClick={handleOpen}>Create social links</button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <div className='provingOffers flex flex-col gap-2 w-full p-5 rounded max-w-[500px]'>
      <div className='flex flex-col gap-3 w-full'>
      <div className='flex flex-col gap-1'>
        <label htmlFor="d1">Instagram</label>
        <input type="url" id='d1' placeholder='https://www.instagram.com/' className='border rounded w-full p-2'onChange={(e)=>setInstagram(e.target.value)}/>
       </div>
       <div className='flex flex-col gap-1'>
        <label htmlFor="d1">Facebook</label>
        <input type="url" id='d1' placeholder='https://www.facebook.com/' className='border rounded w-full p-2' onChange={(e)=>setFacebook(e.target.value)}/>
       </div>
       <div className='flex flex-col gap-1'>
        <label htmlFor="d1">Youtube</label>
        <input type="url" id='d1' placeholder='https://www.youtube.com/' className='border rounded w-full p-2'onChange={(e)=>setYoutube(e.target.value)}/>
       </div>
       <div className='flex flex-col gap-1'>
        <label htmlFor="d1">Twitter</label>
        <input type="url" id='d1' placeholder='https://www.twitter.com/' className='border rounded w-full p-2'onChange={(e)=>setTwitter(e.target.value)}/>
       </div>
       <button className='w-full border rounded p-2 capitalize hovring' onClick={AddSocialURL}>create links</button>
      </div>
      </div>
    </Modal>
  </div>
  )
}

export default SocialModal
