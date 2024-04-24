import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Profiletab.css';
import Video from '../../assets/img/video.svg';
import Play from '../../assets/img/play.svg';
import Last1 from '../../assets/img/last1.svg';
import Last2 from '../../assets/img/last2.svg';
import Last3 from '../../assets/img/last3.svg';



const Profiletab = () => {
    return (
        <section className="profiletab_section">
            <Container>
                <div className="playerprofile_profile_tabs_main_div">
                    <Tabs
                        defaultActiveKey="Videos"
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3">
                        <Tab eventKey="Videos" title="Videos">
                            <div className="video_tab_last_videos_main">
                                <Row>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Tab>
                        <Tab eventKey="Photos" title="Photos">
                            <div className="video_tab_last_videos_main">
                                <Row>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                    <Col lg="2" md="2" sm="4" xs="4">
                                        <div className="video_tab_last_video_div">
                                            <img src={Video} className='image1' alt="" />
                                            <span><img src={Play} alt="" /> 12,2K</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Tab>
                        <Tab eventKey="Offers" title="Offers">
                            <div className="video_tab_content_main">
                                <Row>
                                    <Col lg="6" md="6" sm="12">
                                        <div className="video_tab_aboutplayer_card_body">
                                            <label htmlFor="">ABOUT PLAYER</label>
                                            <p>Building a team that excels not only in skills but also in sportmanship and stragegic thinking. Coach Allen, a distinguished figure in college basketball, boasts a remarkable track record of success. Revered for strategic brilliance, Allen has consistently led teams to triumph. Known for a keen eye in recruiting, Allen prioritizes skilled players dedicated to excellence on and off the court.</p>
                                            <div className="video_tab_aboutplayer_card_inner">
                                                <h6>Current Team</h6>
                                                <h5>Exeter Chiefs</h5>
                                            </div>
                                            <div className="video_tab_aboutplayer_card_inner">
                                                <h6>Club</h6>
                                                <h5>Warriors Rugby Club</h5>
                                            </div>
                                            <div className="video_tab_aboutplayer_card_inner">
                                                <h6>Specialization</h6>
                                                <h5>Offensive Strategies</h5>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="6" md="6" sm="12">
                                        <div className="video_tab_career_card_body">
                                            <div className='video_career_title'>
                                                <label htmlFor="">CAREER TABLES</label>
                                                <select name="" id="" className='form-select'>
                                                    <option value="" selected hidden>Year</option>
                                                    <option value="2018">2018</option>
                                                    <option value="2018">2018</option>
                                                    <option value="2020">2020</option>
                                                    <option value="2020">2020</option>
                                                    <option value="2020">2020</option>
                                                    <option value="2020">2020</option>
                                                    <option value="2024">2024</option>
                                                </select>
                                            </div>
                                            <div className="video_tab_career_card_inner">
                                                <h5>Season</h5>
                                                <h6>2022</h6>
                                            </div>
                                            <div className="video_tab_career_card_inner">
                                                <h5>Role</h5>
                                                <h6>Coac</h6>
                                            </div>
                                            <div className="video_tab_career_card_inner">
                                                <h5>Team</h5>
                                                <h6>Warriors Football Club</h6>
                                            </div>
                                            <div className="video_tab_career_card_inner">
                                                <h5>Division</h5>
                                                <h6>1</h6>
                                            </div>
                                            <div className="video_tab_career_card_inner">
                                                <h5>Result</h5>
                                                <h6>Champion</h6>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="6" md="6" sm="12">
                                        <div className="video_tab_team_card_body">
                                            <label htmlFor="">TEAMS</label>
                                            <div className="video_tab_team_card_inner">
                                                <h5>Warriors Football Club</h5>
                                                <p>Offensive Strategies  - 2016 - Present</p>
                                            </div>
                                            <div className="video_tab_team_card_inner">
                                                <h5>University Eagles</h5>
                                                <p>Offensive Strategies  - 2014 - 2016</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="offers_tab_last_cards_main_div">
                                    <Row>
                                        <Col lg="4" md="6" sm="12">
                                            <div className="offers_tab_last_card_body">
                                                <div className='offers_tab_last_inner1'>
                                                    <div className="offers_tab_last_inner1_img">
                                                        <img src={Last1} alt="" />
                                                    </div>
                                                    <div className="offers_tab_last_inner1_text">
                                                        <h4>Wake Forest University</h4>
                                                        <p>10 March, 2024</p>
                                                    </div>
                                                </div>
                                                <div className="offers_tab_last_card_btn">
                                                    <button type='button'><span></span> Offered</button>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg="4" md="6" sm="12">
                                            <div className="offers_tab_last_card_body">
                                                <div className='offers_tab_last_inner1'>
                                                    <div className="offers_tab_last_inner1_img">
                                                        <img src={Last1} alt="" />
                                                    </div>
                                                    <div className="offers_tab_last_inner1_text">
                                                        <h4>Wake Forest University</h4>
                                                        <p>10 March, 2024</p>
                                                    </div>
                                                </div>
                                                <div className="offers_tab_last_card_btn">
                                                    <button type='button'><span></span> Offered</button>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg="4" md="6" sm="12">
                                            <div className="offers_tab_last_card_body">
                                                <div className='offers_tab_last_inner1'>
                                                    <div className="offers_tab_last_inner1_img">
                                                        <img src={Last1} alt="" />
                                                    </div>
                                                    <div className="offers_tab_last_inner1_text">
                                                        <h4>Wake Forest University</h4>
                                                        <p>10 March, 2024</p>
                                                    </div>
                                                </div>
                                                <div className="offers_tab_last_card_btn">
                                                    <button type='button'><span></span> Offered</button>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg="4" md="6" sm="12">
                                            <div className="offers_tab_last_card_body">
                                                <div className='offers_tab_last_inner1'>
                                                    <div className="offers_tab_last_inner1_img">
                                                        <img src={Last1} alt="" />
                                                    </div>
                                                    <div className="offers_tab_last_inner1_text">
                                                        <h4>Wake Forest University</h4>
                                                        <p>10 March, 2024</p>
                                                    </div>
                                                </div>
                                                <div className="offers_tab_last_card_btn">
                                                    <button type='button'><span></span> Offered</button>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg="4" md="6" sm="12">
                                            <div className="offers_tab_last_card_body">
                                                <div className='offers_tab_last_inner1'>
                                                    <div className="offers_tab_last_inner1_img">
                                                        <img src={Last1} alt="" />
                                                    </div>
                                                    <div className="offers_tab_last_inner1_text">
                                                        <h4>Wake Forest University</h4>
                                                        <p>10 March, 2024</p>
                                                    </div>
                                                </div>
                                                <div className="offers_tab_last_card_btn">
                                                    <button type='button'><span></span> Offered</button>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg="4" md="6" sm="12">
                                            <div className="offers_tab_last_card_body">
                                                <div className='offers_tab_last_inner1'>
                                                    <div className="offers_tab_last_inner1_img">
                                                        <img src={Last1} alt="" />
                                                    </div>
                                                    <div className="offers_tab_last_inner1_text">
                                                        <h4>Wake Forest University</h4>
                                                        <p>10 March, 2024</p>
                                                    </div>
                                                </div>
                                                <div className="offers_tab_last_card_btn">
                                                    <button type='button'><span></span> Offered</button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        </section>
    )
}

export default Profiletab