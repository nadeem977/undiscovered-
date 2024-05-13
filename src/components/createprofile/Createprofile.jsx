import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import arrow from '../../assets/img/Arrow.svg';
import { Link } from 'react-router-dom';
import './Createprofile.css'
import { BAE_URL_API } from '../../Config';
import axios from "axios"
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/CreateContext';


const Createprofile = () => {

    const { editabledata } = useContext(AppContext)
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate()
    const [profile, setProfile] = useState({
        name: "",
        height: "",
        desc: "",
        speciality: "",
        division: "",
        weight: "",
        cntTeam: "",
        season: "",
        result: "",
        year: "",
        club: "",
        image: "",
        university: "",
        role: "",
        PTS: "",
        AST: "",
        REB: "",
        FG: "",
    })


    useEffect(() => {
        if (editabledata.name) {
            console.log("its working or not")
            setProfile((prev) => ({
                ...prev,
                name: editabledata.name,
                height: editabledata.height,
                desc: editabledata.aboutPlayr,
                speciality: editabledata.speciality,
                weight: editabledata.weight,
                cntTeam: editabledata.currentTeam,
                year: editabledata.year,
                club: editabledata.club,
                image: editabledata.image,
                university: editabledata.university,
                role: editabledata.role,
                PTS: editabledata.PTS,
                AST: editabledata.AST,
                REB: editabledata.REB,
                FG: editabledata.FG,
            }))
        }
    }, [])

    const CreateProfils = async () => {
        const email = JSON.parse(localStorage.getItem("user"))
        if (!email) return console.log("email not found")
        try {
            const data = {
                name: profile.name,
                height: profile.height,
                aboutPlayr: profile.desc,
                speciality: profile.speciality,
                weight: profile.weight,
                currentTeam: profile.cntTeam,
                year: profile.year,
                image: profile.image,
                club: profile.club,
                email: email.email,
                university: profile.university,
                role: profile.role,
                PTS: profile.PTS,
                AST: profile.AST,
                REB: profile.REB,
                FG: profile.FG,
            }
            const headers = { "Content-Type": "multipart/form-data" };
            await axios.post(`${BAE_URL_API}/CreateProfiles`, data, { headers })
            enqueueSnackbar("profile has been successfully created", { variant: "success" });
            setProfile((prev) => ({
                ...prev,
                name: "",
                height: "",
                desc: "",
                speciality: "",
                weight: "",
                cntTeam: "",
                year: "",
                club: "",
                image: "",
                university: "",
                role: "",
                PTS: "",
                AST: "",
                REB: "",
                FG: "",
            }))
            navigate("/Playerprofile")
        } catch (error) {
            console.log(error)
        }
    }
    const UpdateProfils = async () => {
        const email = JSON.parse(localStorage.getItem("user"))
        if (!email) return console.log("email not found")
        try {
            const data = {
                name: profile.name,
                height: profile.height,
                aboutPlayr: profile.desc,
                speciality: profile.speciality,
                weight: profile.weight,
                currentTeam: profile.cntTeam,
                year: profile.year,
                image: profile.image,
                club: profile.club,
                email: email.email,
                university: profile.university,
                role: profile.role,
                PTS: profile.PTS,
                AST: profile.AST,
                REB: profile.REB,
                FG: profile.FG,
                oldImg:editabledata.image
            }
            const headers = { "Content-Type": "multipart/form-data" };
            await axios.post(`${BAE_URL_API}/UpdateProfiles`, data, { headers })
            enqueueSnackbar("profile has been successfully Updated", { variant: "success" });
            setProfile((prev) => ({
                ...prev,
                name: "",
                height: "",
                desc: "",
                speciality: "",
                weight: "",
                cntTeam: "",
                year: "",
                club: "",
                image: "",
                university: "",
                role: "",
                PTS: "",
                AST: "",
                REB: "",
                FG: "",
            }))
            navigate("/Playerprofile")
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
                                        <label htmlFor="">Name</label>
                                        <input type="text" placeholder='Name' value={profile.name} onChange={(e) => setProfile((prev) => ({ ...prev, name: e.target.value }))} />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Current Team Name</label>
                                        <input type="text" placeholder='Current Team Name' value={profile.cntTeam} onChange={(e) => setProfile((prev) => ({ ...prev, cntTeam: e.target.value }))} />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">University</label>
                                        <input type="text" placeholder='University' value={profile.university} onChange={(e) => setProfile((prev) => ({ ...prev, university: e.target.value }))} />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Current Role</label>
                                        <input type="text" placeholder='Role' value={profile.role} onChange={(e) => setProfile((prev) => ({ ...prev, role: e.target.value }))} />
                                    </div>
                                </Col>

                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">PTS</label>
                                        <input type="number" placeholder='PTS' value={profile.PTS} onChange={(e) => setProfile((prev) => ({ ...prev, PTS: e.target.value }))} />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">REB</label>
                                        <input type="number" placeholder='REB' value={profile.REB} onChange={(e) => setProfile((prev) => ({ ...prev, REB: e.target.value }))} />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">AST</label>
                                        <input type="number" placeholder='AST' value={profile.AST} onChange={(e) => setProfile((prev) => ({ ...prev, AST: e.target.value }))} />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">FG</label>
                                        <input type="number" placeholder='FG' value={profile.FG} onChange={(e) => setProfile((prev) => ({ ...prev, FG: e.target.value }))} />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Profile Image</label>
                                        <input type="file" onChange={(e) => setProfile((prev) => ({ ...prev, image: e.target.files[0] }))} />
                                    </div>
                                </Col>

                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Height</label>
                                        <input type="number" placeholder='Height' value={profile.height} onChange={(e) => setProfile((prev) => ({ ...prev, height: e.target.value }))} />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Weight</label>
                                        <input type="number" placeholder='Weight' value={profile.weight} onChange={(e) => setProfile((prev) => ({ ...prev, weight: e.target.value }))} />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Starting Year</label>
                                        <input type="number" placeholder='Starting Year' value={profile.year} onChange={(e) => setProfile((prev) => ({ ...prev, year: e.target.value }))} />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">About Player</label>
                                        <textarea type="text" placeholder='Share some details about the player...' value={profile.desc} onChange={(e) => setProfile((prev) => ({ ...prev, desc: e.target.value }))} />
                                    </div>
                                </Col>

                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Current Club</label>
                                        <input type="text" placeholder='Enter the name of the club...' value={profile.club} onChange={(e) => setProfile((prev) => ({ ...prev, club: e.target.value }))} />
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
                                {/* <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Current Seasons</label>
                                        <input type="text" placeholder='2018-2024' value={profile.season} onChange={(e) => setProfile((prev) => ({ ...prev, season: e.target.value }))} />
                                    </div>
                                </Col> */}
                                {/* <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">City</label>
                                        <input type="text" placeholder='City' value={profile.division} onChange={(e) => setProfile((prev) => ({ ...prev, division: e.target.value }))} />
                                    </div>
                                </Col> */}
                                {/* <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Result</label>
                                        <input type="text" placeholder='Result' value={profile.result} onChange={(e) => setProfile((prev) => ({ ...prev, result: e.target.value }))} />
                                    </div>
                                </Col> */}
                            </Row>
                            <div className="createpro_last_btn">
                                {editabledata.name ? <Button onClick={UpdateProfils}>update profile</Button> :
                                    <Button onClick={CreateProfils}>Submit</Button>}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Createprofile