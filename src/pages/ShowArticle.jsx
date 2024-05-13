import React, { useEffect, useState, useContext } from 'react'
import Container from 'react-bootstrap/Container';
import arrow from '../assets/img/Arrow.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios"
import { BAE_URL_API, IMAGE_URL } from '../Config';
import { AppContext } from "../context/CreateContext"
import AddRecuitersModal from '../components/addRecruites/AddRecuitersModal';

const ShowArticle = () => {

  const { profileId, ArticleId } = useParams();
  const [Profiles, setProfile] = useState()
  const { isAdmin, profilesInfo } = useContext(AppContext)
  const [playerName, setPlayerName] = useState("");
  const [playerID, setPlayerId] = useState("");
  const navigate = useNavigate()


  useEffect(() => {
    GetArticals()

  }, [profileId]);



  useEffect(() => {
    const text = Profiles?.desc;
    const matchResult = text && text.match(/"(.*?)"/);
    if (matchResult && text) {
      for (let i = 0; i < profilesInfo.length; i++) {
        let user = profilesInfo[i];
        if (user.name.toLowerCase().trim() === matchResult[1].toLowerCase().trim()) {
          setPlayerId(user)
          break
        }
      }
      if (matchResult) {
        const playerName = matchResult[1];
        const beforeText = text.slice(0, matchResult.index);
        const afterText = text.slice(matchResult.index + matchResult[0].length);
        const replacedText = (
          <>
            {beforeText}
            <Link className='underline text-black font-bold capitalize' to={`/ViewProfile/${playerID?._id}`}>{playerName}</Link>
            {afterText}
          </>
        ); 
        setPlayerName(replacedText);
      }
    }
  }, [Profiles?.desc, profilesInfo,playerID]);



  const GetArticals = async () => {
    try {
      const data = { profileId: profileId, articleId: ArticleId }
      const respose = await axios.post(`${BAE_URL_API}/ArticleProfile`, data)
      setProfile(respose?.data)
    } catch (error) {
      console.log(error)
    }
  }
  const RemovingArticle = async () => {
    try {
      const data = {
        title: Profiles.title,
        Id: Profiles._id,
        profileId: profileId
      }
      await axios.post(`${BAE_URL_API}/RemovingArticle`, data)
      navigate(`/ViewProfile/${profileId}`)
      GetArticals()
    } catch (error) {
      console.log(error)
    }
  }
  const RemovingArticleUser = async (Id) => {
    try {
      const data = {
        articleId: Profiles._id,
        profileId: profileId,
        recruites: Id
      }
      await axios.post(`${BAE_URL_API}/RemovingSignleUserFromArticle`, data)
      GetArticals()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <Container>
        <div className="playerprofile_title">
          <Link to={`/ViewProfile/${profileId}`}><img src={arrow} alt="arrow" /></Link>
          <p className='capitalize'>Article</p>
          <div className='mydiv'></div>
        </div>
        <section>
          <div className='my-5'>
            <div>
              {isAdmin && <button className='bg-red-100 rounded-full px-3 py-2 mb-2' onClick={RemovingArticle}>Remove Article</button>}
              <div className='w-full mb-5'>
                <img src={`${IMAGE_URL}/${Profiles?.title.slice(0, 5).trim()}/${Profiles?.banner}`} alt="banner" className='w-full max-h-[400px] rounded object-cover' />
              </div>
              <div className='mb-5'>
                <div className='flex items-center gap-2'>
                  <h1 className='text-xl mb-2'>Recruites</h1>
                  <AddRecuitersModal profileId={profileId} ArticleId={ArticleId} GetArticals={GetArticals} />
                </div>
                <div className='flex items-center gap-2 mt-2 flex-wrap'>
                  {Profiles?.Recruites?.map((item, i) => (
                    <div className=' relative hoverover' key={i}>
                      {isAdmin && <div className='BGremov w-[50px] left-2 top-2 h-[50px] flex 
                    items-center justify-center rounded-full text-center py-3 absolute'>
                        <i className="bi cursor-pointer text-white bi-trash3" onClick={() => RemovingArticleUser(item._id)} ></i>
                      </div>}
                      <Link to={`/ViewProfile/${item.playerId}`}>
                        <div className='flex items-center gap-2 bg-gray-100 p-2 rounded-full'>
                          <img src={`${IMAGE_URL}/${item?.img}`} alt="images" className='w-[50px] h-[50px] rounded-full object-cover' />
                          <div className='mr-3'>
                            <p className='capitalize font-[600]'>{item.name}</p>
                            <p className='text-black capitalize'>PG {item?.height} | {item?.year}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <h1 className='text-3xl capitalize mb-3'>{Profiles?.title}</h1>
              <p className='text-[18px] text-gray-700'>{playerName}</p>

            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default ShowArticle
