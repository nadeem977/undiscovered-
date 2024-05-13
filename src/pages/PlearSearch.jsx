import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import arrow from '../assets/img/Arrow.svg';
import { People } from "../assets/img/People"
import { CiSearch } from "react-icons/ci";
import Accordion from 'react-bootstrap/Accordion';
import { userCards } from '../assets/data';
import avatar from "../assets/img/Avatar.svg"
import verifyimg from "../assets/img/verify.svg"
import l1img from "../assets/img/l3.png"
import PlearFilters from '../components/modal/PlearFilters';
import { AppContext } from '../context/CreateContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from "axios"
import { BAE_URL_API, IMAGE_URL } from '../Config';
import Rating from '@mui/material/Rating';





import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';







const PlearSearch = () => {

    const matches = useMediaQuery('(max-width:600px)');
    const { profilesInfo,setOpen } = useContext(AppContext)
    const [searching, setSearching] = useState("")
    const [years, setYears] = useState("")
    const [offers, setOffers] = useState([])
    const [accordion, setAccordion] = useState({ Id: "", actives: false });




    const Filtering = profilesInfo.filter((item) => {
        return item.year.trim().includes(years.trim())
    })
    const filterprofile = Filtering.filter((item) => {
        return item.name.toLowerCase().trim().includes(searching.toLowerCase().trim())
    })

    const handelExpend = (item) => {
        if (accordion.actives) {
            setAccordion((prev) => ({ ...prev, actives: false, Id: "" }))
        } else {
            setAccordion((prev) => ({ ...prev, actives: true, Id: item._id }))
        }
    }
    return (
        <>
            <PlearFilters />
            <section className="playerprofile_section">
                <Container>
                    <div className="flex justify-between mt-4">
                        <Link to="/"><img src={arrow} alt="" /></Link>
                        <div className='flex gap-2 text-xl'>Player List</div>
                        <div className='mydiv'></div>
                    </div>

                    <section>

                        {/* <div className='flex items-center mt-3 gap-2'>
                            <div className='flex items-center w-full bg-[#F8FAFC] border rounded-full pl-3 pr-1 border-[#E9E9E9] gap-1'>
                                <CiSearch className='text-[#818181] ' />
                                <input type="text" placeholder='Search' className='w-full outline-none border-none bg-[#F8FAFC] rounded-full p-2' onChange={(e) => setSearching(e.target.value)} />
                            </div>

                        </div> */}
                        {/* <div className='mt-3 flex flex-wrap items-center md:justify-normal justify-center gap-2'>
                            <select className='border border-[#DBDBDB] shadow-none p-2 px-3 rounded-full form-select w-[130px] outline-none cursor-pointer' >
                                <option value="Position">Position</option>
                                <option value="Position 2">Position 2</option>
                                <option value="Position 3">Position 3</option>
                            </select>

                            <select value={years} className='border border-[#DBDBDB] shadow-none p-2 px-3 rounded-full form-select w-[150px] outline-none cursor-pointer'
                                onChange={(e) => setYears(e.target.value)}>
                                <option value="">clear</option>
                                {profilesInfo.map((item, i) => (
                                    <option value={`${item.year}`} key={i}>{item.year}</option>
                                ))}
                            </select>
                        </div> */}
                        <div className='w-full overflow-auto'>

                            <div className='mt-3  min-w-[900px]'>

                                <TableContainer className='my-5'>
                                    <Table aria-label="collapsible table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell><p className='text-xl font-[600]'>Ranking</p></TableCell>
                                                <TableCell><p className='text-xl font-[600]'>Player Name</p></TableCell>
                                                <TableCell><p className='text-xl font-[600]'>Class</p></TableCell>
                                                <TableCell><p className='text-xl font-[600]'>Height</p></TableCell>
                                                <TableCell><p className='text-xl font-[600]'>Position</p></TableCell>
                                                <TableCell><p className='text-xl font-[600]'>Star Rating</p></TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        {profilesInfo.map((item, i) => (
                                            <tbody className='border-t border-b '>
                                                <TableRow>
                                                    <TableCell>
                                                        <div className='flex items-center gap-10'>
                                                            <Link to={`/ViewProfile/${item._id}`} className='flex items-center gap-3'>
                                                            <div className='rounded-full p-2 bg-[#0E0E0E] text-white w-[40px] h-[40px] flex items-center justify-center'>{i + 1}</div>
                                                                <img src={`${IMAGE_URL}/${item.image}`} alt="icons" className='rounded-full w-[50px] h-[48px] object-cover' /> 
                                                                  </Link>
                                                                   </div>
                                                    </TableCell>
                                                    <TableCell><p className='text-[17px] font-[600]'>{item.name}</p></TableCell>
                                                    <TableCell><p className='text-[17px] font-[600]'>{item.year}</p></TableCell>
                                                    <TableCell><p className='text-[17px] font-[600]'>{item.height}</p></TableCell>
                                                    <TableCell><p className='text-[17px] font-[600]'>PG</p></TableCell>
                                                    <TableCell><Rating name="size-medium" defaultValue={5} /></TableCell>
                                                    <TableCell>
                                                      <div className='flex items-center'>
                                                      <p className='text-[17px] font-[500]'>view more</p>
                                                        <IconButton aria-label="expand row" size="small" onClick={() => handelExpend(item)}>
                                                            {accordion.Id === item._id ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                                        </IconButton>
                                                      </div>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                                        <Collapse in={accordion.Id === item._id && accordion.actives} timeout="auto" unmountOnExit>
                                                            <div className='flex items-center justify-between w-full gap-2 my-3'>
                                                                {item.Offers.map((ofer, i) => (
                                                                    <div key={i}>
                                                                        {ofer.verify ? <div className='text-center flex flex-col gap-2 h-[100px] justify-between'>
                                                                            <img src={`${IMAGE_URL}/${item.email}/${ofer.img}`} alt="" className='m-auto w-[60px] h-[60px] object-cover rounded-full' />
                                                                            <p className='font-bold capitalize text-xl'>{ofer.uniname}</p>
                                                                        </div> : null}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </Collapse>
                                                    </TableCell>
                                                </TableRow>
                                            </tbody>
                                        ))}
                                    </Table>
                                </TableContainer>

                            </div>
                        </div>
                    </section>
                </Container>

            </section>
        </>
    )
}

export default PlearSearch
