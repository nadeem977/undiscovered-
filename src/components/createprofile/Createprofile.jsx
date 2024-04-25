import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import arrow from '../../assets/img/Arrow.svg';
import { Link } from 'react-router-dom';
import './Createprofile.css'
import { BAE_URL_API } from '../../Config';
import axios from "axios"
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';


const Createprofile = () => {


    const { enqueueSnackbar } = useSnackbar();
   const navigate = useNavigate()

    const [profile, setProfile] = useState({
        name: "",
        height: "",
        desc: "",
        speciality: "",
        division: "",
        team: "",
        weight: "",
        cntTeam: "",
        season: "",
        result: "",
        year: "",
        club: "",
        Teams: "",
        image:""
    })


    const CreateProfils = async () => {
        const email = JSON.parse(localStorage.getItem("user"))
        if(!email) return console.log("email not found")
        try {
           const data = {
            name: profile.name,
            height: profile.height,
            aboutPlayr: profile.desc,
            speciality: profile.speciality,
            division: profile.division,
            teamName: profile.team,
            weight: profile.weight,
            currentTeam: profile.cntTeam,
            year: profile.year,
            result: profile.result,
            image:profile.image,
            season: profile.season,
            club: profile.club,
            team: profile.Teams,
            email:email.email
        }
        const headers = { "Content-Type": "multipart/form-data" };
         await axios.post(`${BAE_URL_API}/CreateProfiles`,data,{headers})
        enqueueSnackbar("profile has been successfully created", { variant: "success" });
        setProfile((prev)=>({...prev,
            name: "",
            height: "",
            desc: "",
            speciality: "",
            division: "",
            team: "",
            weight: "",
            cntTeam: "",
            season: "",
            result: "",
            year: "",
            club: "",
            Teams: "",
            image:""
        }))
       navigate("/playinfo")
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <section className="create_profile_section">
            <Container>
                <div className="createpro_content_main_div">
                    <div className="cre_pro_title">
                        <Link to="/"><img src={arrow} alt="" /></Link>
                        <p>Create Profile</p>
                        <div className='mydiv'></div>
                    </div>
                    <div className="createpro_card_main_div">
                        <div className="createpro_card1_div">
                            <Row>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Enter Name</label>
                                        <input type="text" placeholder='Enter Name' value={profile.name} onChange={(e) => setProfile((prev) => ({ ...prev, name: e.target.value }))} />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Enter Team Name</label>
                                        <input type="text" placeholder='Enter Team Name' value={profile.team} onChange={(e) => setProfile((prev) => ({ ...prev, team: e.target.value }))} />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Upload Image</label>
                                        <input type="file" onChange={(e) => setProfile((prev) => ({ ...prev, image: e.target.files[0] }))} />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Enter Height</label>
                                        <input type="text" placeholder='Enter Height' value={profile.height} onChange={(e) => setProfile((prev) => ({ ...prev, height: e.target.value }))} />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Enter Weight</label>
                                        <input type="text" placeholder='Enter Weight' value={profile.weight} onChange={(e) => setProfile((prev) => ({ ...prev, weight: e.target.value }))} />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Enter Year</label>
                                        <input type="text" placeholder='Enter Year' value={profile.year} onChange={(e) => setProfile((prev) => ({ ...prev, year: e.target.value }))} />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">About Player</label>
                                        <textarea type="text" placeholder='Enter Year' value={profile.desc} onChange={(e) => setProfile((prev) => ({ ...prev, desc: e.target.value }))} />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Current Team</label>
                                        <select value={profile.cntTeam} onChange={(e) => setProfile((prev) => ({ ...prev, cntTeam: e.target.value }))}>
                                            <option value="Select Team">Select Team</option>
                                            <option value="Exeter Chiefs">Exeter Chiefs</option>
                                            <option value="Exeter Chiefs">Exeter Chiefs</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Club</label>
                                        <select value={profile.club} onChange={(e) => setProfile((prev) => ({ ...prev, club: e.target.value }))}>
                                            <option value="Select Club" selected disabled>Select Club</option>
                                            <option value="Warriors Rugby Club">Warriors Rugby Club</option>
                                            <option value="Warriors Rugby Club">Warriors Rugby Club</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Specialization</label>
                                        <select value={profile.speciality} onChange={(e) => setProfile((prev) => ({ ...prev, speciality: e.target.value }))}>
                                            <option value="Specialization" >Specialization</option>
                                            <option value="Offensive Strategies">Offensive Strategies</option>
                                            <option value="Offensive Strategies">Offensive Strategies</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Season</label>
                                        <input type="text" placeholder='2022' value={profile.season} onChange={(e) => setProfile((prev) => ({ ...prev, season: e.target.value }))} />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Team</label>
                                        <input type="text" placeholder='Team' value={profile.Teams} onChange={(e) => setProfile((prev) => ({ ...prev, Teams: e.target.value }))} />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Division</label>
                                        <input type="text" placeholder='Division' value={profile.division} onChange={(e) => setProfile((prev) => ({ ...prev, division: e.target.value }))} />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Result</label>
                                        <input type="text" placeholder='Result' value={profile.result} onChange={(e) => setProfile((prev) => ({ ...prev, result: e.target.value }))} />
                                    </div>
                                </Col>
                            </Row>
                            <div className="createpro_last_btn">
                                <Button onClick={CreateProfils}>Submit</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Createprofile