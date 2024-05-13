import React, { useContext, useState } from 'react'
import Modal from '@mui/material/Modal';
import { AppContext } from '../../context/CreateContext';
import Container from 'react-bootstrap/Container';
import arrow from '../../assets/img/Arrow.svg';

const PlearFilters = () => {


  const { open, setOpen } = useContext(AppContext)
  const [activBtns, setActiveBtns] = useState("NC")
  const [division, setDivision] = useState("2020")
  const [YesorNo, setYesorNo] = useState("Yes")


  return (
    <>
      <div>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <div className='w-full h-full bg-white overflow-auto pb-5 '>
            <section className="playerprofile_section">
              <Container>
                <div className="w-full flex items-center justify-between  py-5">
                  <div className='cursor-pointer'
                    onClick={() => setOpen(false)}><img src={arrow} alt=""  />
                  </div>
                  <h1 className='text-xl'>Filter & Show</h1>
                  <div className='w-fit text-xl'>Clear filter</div>
                </div>
                <section>
                  <div>
                    <h1 className='m-2 text-xl font-sumibold'>Program type</h1>
                    <div className='flex mt-3 items-center gap-2 flex-wrap'>
                      <button className={`rounded-full border py-2 px-4   w-full sm:w-fit
                                ${activBtns === "NC" ? "bg-[#FF3333] text-white" : "text-black"}`}
                        onClick={() => setActiveBtns("NC")}>NCAA</button>
                      <button
                        className={`rounded-full border py-2 px-4 w-full sm:w-fit
                                ${activBtns === "NA" ? "bg-[#FF3333] text-white" : "text-black"}`}
                        onClick={() => setActiveBtns("NA")}
                      >NJCAA</button>
                      <button
                        className={`rounded-full border py-2 px-4 w-full sm:w-fit
                                 ${activBtns === "NT" ? "bg-[#FF3333] text-white" : "text-black"}`}
                        onClick={() => setActiveBtns("NT")}
                      >NAIA</button>
                      <button
                        className={`rounded-full border py-2 px-4 w-full sm:w-fit
                                 ${activBtns === "NP" ? "bg-[#FF3333] text-white" : "text-black"}`}
                        onClick={() => setActiveBtns("NP")}
                      >PREP</button>
                      <button
                        className={`rounded-full border py-2 px-4 w-full sm:w-fit
                                 ${activBtns === "HS" ? "bg-[#FF3333] text-white" : "text-black"}`}
                        onClick={() => setActiveBtns("HS")}
                      >HS</button>
                    </div>
                  </div>
                  <div className='w-full flex items-center mt-4  rounded-full border border-[#898989]'>
                    <i className="bi bi-geo-alt-fill relative text-[#898989] ml-5  z-10"></i>
                    <select className='w-full pl-5 text-[#898989] rounded-full shadow-none relative py-3 outline-none border-none form-select'>
                      <option value="Chicago, IL">Chicago, IL</option>
                      <option value="Chicago, IL">Lahore</option>
                      <option value="Chicago, IL">punjab</option>
                      <option value="Chicago, IL">kashmeer</option>
                    </select>
                  </div>
                  <div className='mt-4'>
                    <h1 className='m-2 text-xl font-sumibold'>School division</h1>
                    <div className='flex items-center  gap-2 wrapingBox'>
                      <button className={`rounded-full w-full sm:w-3/12 border py-2 px-3  
                                ${division === "2020" ? "bg-[#FF3333] text-white" : "text-black"}`}
                        onClick={() => setDivision("2020")}>2020</button>
                      <button
                        className={`rounded-full border py-2 px-3  w-full sm:w-3/12
                                ${division === "NA" ? "bg-[#FF3333]  text-white" : "text-black"}`}
                        onClick={() => setDivision("NA")}
                      >2021</button>
                      <button
                        className={`rounded-full border py-2 px-3  w-full sm:w-3/12
                                 ${division === "NT" ? "bg-[#FF3333]  text-white" : "text-black"}`}
                        onClick={() => setDivision("NT")}
                      >2022</button>
                      <button
                        className={`rounded-full border py-2 px-3  w-full sm:w-3/12
                                 ${division === "NP" ? "bg-[#FF3333]  text-white" : "text-black"}`}
                        onClick={() => setDivision("NP")}
                      >2023</button>
                      <button
                        className={`rounded-full border py-2 px-3  w-full sm:w-3/12
                                 ${division === "HS" ? "bg-[#FF3333]  text-white" : "text-black"}`}
                        onClick={() => setDivision("HS")}
                      >2024</button>
                    </div>
                  </div>
                  <div className='mt-4'>
                    <h1 className='text-xl'>Tuition</h1>
                    <div className='flex  sm:flex-row flex-col mt-3 items-center justify-between   gap-2'>
                      <select className='w-full sm:w-6/12 border outline-none shadow-none border-[#898989] rounded-full p-2 form-select '>
                        <option value="Min">Min</option>
                        <option value="Min">Min 1</option>
                        <option value="Min">Min 2</option>
                      </select>
                      <select className='w-full sm:w-6/12 border outline-none shadow-none border-[#898989] rounded-full p-2 form-select '>
                        <option value="Max">Max</option>
                        <option value="Max">Max 1</option>
                        <option value="Max">Max 2</option>
                      </select>
                    </div>
                  </div>
                  <div className='mt-4'>
                    <h1 className='text-xl'>Verified coach</h1>
                    <div className='flex mt-3  sm:flex-row flex-col  items-center justify-between gap-2'>
                      <button className={`w-full sm:w-6/12 rounded-full p-2 text-center border border-[#898989] ${YesorNo ==="No"?"bg-[#FF3333] text-white":"text-black"}`} onClick={()=>setYesorNo("No")}>No</button>
                      <button className={`w-full sm:w-6/12 rounded-full p-2 text-center border border-[#898989] ${YesorNo ==="Yes"?"bg-[#FF3333] text-white":"text-black"}`} onClick={()=>setYesorNo("Yes")}>Yes</button>
                    </div>
                  </div>
                  <button className='p-2 mt-4 rounded-full bg-[#FF3333] text-white w-full'>Apply</button>
                </section>
              </Container>
            </section>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default PlearFilters
