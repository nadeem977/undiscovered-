import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import arrow from '../assets/img/Arrow.svg';
import { Link, useParams,useNavigate } from 'react-router-dom';
import { BAE_URL_API } from '../Config';
import axios from "axios"


const Articals = () => {


  const [article, setArticle] = useState({ title: "", desc: "" })
  const [baner, setBanner] = useState()
  // const [recriter, setRecriter] = useState()
  const { id } = useParams();
  const navigate = useNavigate()


  const createArticle = async () => {
    try {
      
      const formData = new FormData();
      formData.append("title", article.text);
      formData.append("desc", article.desc);
      // formData.append("images", recriter);
      formData.append("image", baner); 
      formData.append("Id", id);
      const headers = { "Content-Type": "multipart/form-data" };
      await axios.post(`${BAE_URL_API}/ArticlesByAdmin`, formData, { headers })
      setArticle((prev)=>({...prev,text:"",desc:""}))
      navigate("/Dashboard")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className="playerprofile_section">
      <Container>
        <div className="playerprofile_title">
          <Link to="/"><img src={arrow} alt="" /></Link>
          <p className='capitalize'>Article</p>
          <div className='mydiv'></div>
        </div>

        <div className='flex flex-col max-w-[700px] mx-auto my-5 gap-2'>
          <input type="text" value={article.text} placeholder='title' className='border rounded outline-none p-2' onChange={(e) => setArticle((prev) => ({ ...prev, text: e.target.value }))} />
          <textarea placeholder='description' value={article.desc} className='p-2 border rounded outline-none min-h-[300px]' onChange={(e) => setArticle((prev) => ({ ...prev, desc: e.target.value }))}></textarea>
          <div className='flex items-center justify-between gap-2'>
            <span className='w-6/12'>
              <label htmlFor="te4a" className='capitalize'>article banner</label><br />
              <input type="file" id='te4a'  className='border p-2 hover:bg-[#e9ecff] rounded w-full' onChange={(e) => setBanner(e.target.files[0])} />
            </span>
            {/* <span className='w-6/12'>
              <label htmlFor="te3" className='capitalize'>Recruiter</label><br />
              <input type="file" id='te3' className='border p-2 rounded hover:bg-[#e9ecff]  w-full' onChange={(e) => setRecriter(e.target.files[0])} />
            </span> */}
          </div>
          <button className='border rounded w-full p-2 capitalize hover:bg-[#e9ecff]' onClick={createArticle}>create article</button>
        </div>
      </Container>
    </section>
  )
}

export default Articals
