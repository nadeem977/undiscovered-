import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import arrow from '../assets/img/Arrow.svg';
import { Award } from "../assets/img/Award"
import { People } from "../assets/img/People"
import { CiSearch } from "react-icons/ci";
import Accordion from 'react-bootstrap/Accordion';
import { userCards } from '../assets/data';
import avatar from "../assets/img/Avatar.svg"
import verifyimg from "../assets/img/verify.svg"
import l1img from "../assets/img/l3.png"
import PlearFilters from '../components/modal/PlearFilters';
import { AppContext } from '../context/CreateContext';

const PlearSearch = () => {

     const{setOpen} = useContext(AppContext)
    const [activeBtn, setActiveBtn] = useState("PM")

    return (
        <>
        <PlearFilters />
            <section className="playerprofile_section">
                <Container>
                    <div className="playerprofile_title">
                        <Link to="/"><img src={arrow} alt="" /></Link>
                        <p>Player Profile</p>
                        <div className='mydiv'></div>
                    </div>

                    <section>
                        <div className='flex items-center shoadows p-2 justify-between rounded-full w-full relative'>
                            <button onClick={() => setActiveBtn("PR")} className={`w-5/12 flex items-center justify-center gap-2   rounded-full p-2 ${activeBtn === "PR" ? "text-white" : "text-black"} `}>
                                <Award color={`${activeBtn === "PM" ? "black" : "white"}`} /> Search program
                            </button>
                            <button onClick={() => setActiveBtn("PM")} className={`w-5/12 flex items-center justify-center gap-2   rounded-full p-2   ${activeBtn === "PM" ? "text-white" : "text-black"}`}>
                                <People color={`${activeBtn === "PR" ? "black" : "white"}`} /> Search player
                            </button>
                            <button className={`activeBtnin absolute w-5/12 rounded-full ${activeBtn === "PR" ? "leftran" : "rightran"}`}></button>
                        </div>

                        <div className='flex items-center mt-3 gap-2'>
                            <div className='flex items-center w-full bg-[#F8FAFC] border rounded-full pl-3 pr-1 border-[#E9E9E9] gap-1'>
                                <CiSearch className='text-[#818181] ' />
                                <input type="text" placeholder='Search' className='w-full outline-none border-none rounded-full p-2' />
                            </div>
                            <div className='p-3 flex items-center justify-center rounded-full w-[45px] h-[45px] bg-[#F8FAFC] cursor-pointer border border-[#E9E9E9]' onClick={()=>setOpen(true)}>
                                <i class="bi bi-sliders"></i></div>
                        </div>
                        <div className='mt-3 flex items-center gap-2'>
                            <select className='border border-[#DBDBDB] shadow-none p-2 px-3 rounded-full form-select w-[130px] outline-none cursor-pointer'>
                                <option value="Position">Position</option>
                                <option value="Position 2">Position 2</option>
                                <option value="Position 3">Position 3</option>
                            </select>
                            <select className='border border-[#DBDBDB] shadow-none p-2 px-3 rounded-full form-select w-[130px] outline-none cursor-pointer'>
                                <option value="Class">Class</option>
                                <option value="Class 2">Class 2</option>
                                <option value="Class 3">Class 3</option>
                            </select>
                            <select className='border border-[#DBDBDB] shadow-none p-2 px-3 rounded-full form-select w-[130px] outline-none cursor-pointer'>
                                <option value="Height">Height</option>
                                <option value="Height 2">Height 2</option>
                                <option value="Height 3">Height 3</option>
                            </select>
                            <select className='border border-[#DBDBDB] shadow-none p-2 px-3 rounded-full form-select w-[150px] outline-none cursor-pointer'>
                                <option value="Experience">Experience</option>
                                <option value="Experience 2">Experience 2</option>
                                <option value="Experience 3">Experience 3</option>
                            </select>
                        </div>

                        <div className='mt-3'>
                           {[1,2,3,4,5,6,7].map((item,i)=>(
                             <Accordion className='acourdionshadow outline-none my-3' key={i}>
                             <Accordion.Item eventKey="0">
                                 <Accordion.Header>
                                     <div className='flex items-center justify-between w-full pr-1'>
                                         <div className='flex gap-3 items-center'>
                                             <img src={avatar} alt="icons" className='rounded-full' />
                                             <div>
                                                 <div className='flex gap-2 font-bold items-center'>Kathryn Murphy <img src={verifyimg} alt="icons" /> 
                                                 <div className='flex items-center gap-3 ml-3'>
                                                     <p className='text-red-500 font-[400]'>Follow</p>
                                                  <i className="bi bi-star text-[15px]"></i> 
                                                  </div>
                                                 </div>
                                                 <p className='text-[14px] text-[#696969]'>Montverde academy</p>
                                             </div>
                                         </div>
                                         <p>
                                         New York, NY
                                         </p>
                                         <div>F  |  6’5”  |  170 Ibs  |  2025</div>
                                         <div className='border rounded-full border-[#EFF0F2] w-[40px] h-[40px] flex items-center justify-center'><img src={l1img} alt="icons" className='w-[20px]'/></div>
                                     </div>
                                 </Accordion.Header>
                                 <Accordion.Body>
                                     <div className='flex items-center justify-between w-full gap-2'>
                                         {userCards.map((item, i) => (
                                             <div key={i} className='text-center'>
                                                 <img src={item.img} alt="" className='m-auto' />
                                                 <p className='font-bold'>{item.name}</p>
                                             </div>
                                         ))}
                                     </div>
                                 </Accordion.Body>
                             </Accordion.Item>
                         </Accordion>
                           ))}
                        </div>
                    </section>
                </Container>

            </section>
        </>
    )
}

export default PlearSearch
