import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import arrow from '../../assets/img/Arrow.svg';
import { Link } from 'react-router-dom';
import './Createprofile.css'


const Createprofile = () => {
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
                                        <input type="text" placeholder='Enter Name' />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Enter Team Name</label>
                                        <input type="text" placeholder='Enter Team Name' />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Upload Image</label>
                                        <input type="file" placeholder='' />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Enter Height</label>
                                        <input type="text" placeholder='Enter Height' />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Enter Weight</label>
                                        <input type="text" placeholder='Enter Weight' />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Enter Year</label>
                                        <input type="text" placeholder='Enter Year' />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">About Player</label>
                                        <textarea type="text" placeholder='Enter Year' />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Current Team</label>
                                        <select name="" id="">
                                            <option value="" selected disabled>Select Team</option>
                                            <option value="">Exeter Chiefs</option>
                                            <option value="">Exeter Chiefs</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Club</label>
                                        <select name="" id="">
                                            <option value="" selected disabled>Select Club</option>
                                            <option value="">Warriors Rugby Club</option>
                                            <option value="">Warriors Rugby Club</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Specialization</label>
                                        <select name="" id="">
                                            <option value="" selected disabled>Specialization</option>
                                            <option value="">Offensive Strategies</option>
                                            <option value="">Offensive Strategies</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Season</label>
                                        <input type="text" placeholder='2022' />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Team</label>
                                        <input type="text" placeholder='Team' />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Division</label>
                                        <input type="text" placeholder='Division' />
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <div className="createpro_input_div">
                                        <label htmlFor="">Result</label>
                                        <input type="text" placeholder='Result' />
                                    </div>
                                </Col>
                            </Row>
                            <div className="createpro_last_btn">
                                <Button>Submit</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Createprofile