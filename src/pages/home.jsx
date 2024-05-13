import React, { useContext, useEffect } from 'react'
import Hero from '../components/hero/Hero';
import Header from '../components/navbar/Header';
import Footer from '../components/footer/Footer';
import { AppContext } from '../context/CreateContext';
import Container from 'react-bootstrap/Container';
import { VideosHome, TopPlayers, topnews, classesPlayers } from '../assets/data';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { cardsData } from '../assets/data';
import Rating from '@mui/material/Rating';
import { IMAGE_URL } from '../Config';
import { Link } from 'react-router-dom';
 

const Home = () => {

  const { setUserexist, getUserProfile ,profilesInfo} = useContext(AppContext)
  useEffect(() => {
    const emails = JSON.parse(localStorage.getItem("user"))
    setUserexist(emails?.email)
    if (emails) {
      getUserProfile()
    }
  }, [])



  return (
    <>
      <Header />
      <Hero />
      <Container>
        <section>
          <div className='flex justify-between w-full items-center my-5'>
            <h1 className='font-bold text-xl'>Videos</h1>
            <h1 className='font-bold'>View all</h1>
          </div>
          <div className='home_videos'>
            {VideosHome.map((item, i) => (
              <div key={i} className='mb-4'>
                <div>
                  <video loop preload="auto" className='rounded w-full h-[200px] mb-1 object-cover'
                    controls playsInline={true}>
                    <source src={item.video} type="video/mp4" />
                  </video>
                </div>
                <div>
                  <h1 className='my-1'>{item.title}</h1>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className='flex justify-between w-full items-center my-5'>
            <h1 className='font-bold text-xl'>Top Player’s</h1>
            <h1 className='font-bold '>View all</h1>
          </div>
          <div className='home_videos'>
            {profilesInfo?.map((item, i) => (
              <div key={i} className='flex gap-2 items-center my-5'>
                <img src={`${IMAGE_URL}/${item?.image}`} alt="imag" className='object-cover rounded-full w-[70px] h-[70px]' />
                <div>
                  <Link className='underline text-xl font-[500]' to={`/ViewProfile/${item._id}`}>{item.name}</Link>
                  <p>PG | {item?.height} | {item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className='flex justify-between w-full items-center my-5'>
            <h1 className='font-bold text-xl'>All News</h1>
            <h1 className='font-bold '>View all</h1>
          </div>
          <div>
            <Tabs
              defaultActiveKey="Topnews"
              transition={false}
              className='newTabe'
              id="noanim-tab-example">
              <Tab eventKey="Topnews" title="Top news">
                <div className='NEwsFeedsHome mt-5'>
                  {topnews.map((item, i) => (
                    <div key={i}>
                      <img src={item.img} alt="images" className='w-full h-[200px] object-cover rounded' />
                      <div className='my-2'>
                        <p className='text-[15px] mb-2'>{item.date}</p>
                        <h1 className='mb-2 '>{item.title}</h1>
                        <p className='text-[#818181]'>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab>
              <Tab eventKey="Hightlight" title="Hight light">
                heigh light
              </Tab>
              <Tab eventKey="Interviews" title="Interviews">
                interviews
              </Tab>
            </Tabs>
          </div>
        </section>
        <section>
          <div className='flex justify-between w-full items-center my-5'>
            <h1 className='font-bold text-xl'>Class of 2024 Player’s</h1>
            <h1 className='font-bold '>View all</h1>
          </div>
          <div className='home_videos'>
            {profilesInfo?.map((item, i) => (
             item.year ==="2024" && (<div className='text-center my-3' key={i}>
                <img src={`${IMAGE_URL}/${item?.image}`} alt="image" className='w-[100px] h-[100px] object-cover rounded-full m-auto' />
                <div className='mt-2'>
                <Link className='underline text-xl font-[500]' to={`/ViewProfile/${item._id}`}>{item.name}</Link>   
                <p>PG | {item?.height} | {item?.year}</p>
                </div>
              </div>)
            ))}
          </div>

          <div className='cards_div mt-5'>
            {cardsData?.map((item, i) => (
              <div key={i} className='shados p-4 rounded'>
                 <div className='flex  items-center gap-4'>
                 <img src={item?.img} alt="image" className='w-[60px] h-[60px] rounded-full object-cover'/>
                 <span>
                 <h1 className='text-xl mb-1'>{item.title}</h1>
                  <Rating name="size-small" defaultValue={item?.star} size="small" />
                 </span>
                 </div>
                 <p className='text-center mt-3 leading text-[#333333]'>{item?.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
      <Footer />
    </>
  )
}

export default Home