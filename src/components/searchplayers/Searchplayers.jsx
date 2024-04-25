import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import search from '../../assets/img/Search.svg';
import filter from '../../assets/img/filter.svg';
import Avatar from '../../assets/img/Avatar.svg';
import Arrow from '../../assets/img/Arrow.svg';
import Location from '../../assets/img/Location.svg';
import './Searchplayers.css';
import { Link } from 'react-router-dom';
import Bar from '../../components/bar/Bar';
import { AppContext } from '../../context/CreateContext';
import { IMAGE_URL } from '../../Config';



const Searchplayers = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [actives, setActives] = useState("SG");
    const [activesHeight, setActivesHeight] = useState("AA");
    const [activesYear, setActivesYear] = useState("2021");
    const { profilesInfo } = useContext(AppContext)
 
    return (
        <section className="searchplayers_section">
            <Container>
                <div className="bar_for_Web">
                    <Link to='/'>Home</Link>
                    <Link to='/searchplayers'>Search</Link>
                    <Link>Cards</Link>
                    <Link>Reels</Link>
                    <Link>News</Link>
                </div>
                <div className="searchplayers_title">
                    <Link to='/'><img src={Arrow} alt="" /></Link>
                    <h4>Players search</h4>
                    <div></div>
                </div>
                <div className="searchplayers_input_main_div">
                    <div className="searchplayers_input_inner">
                        <input type="text" placeholder='Search' />
                        <img src={search} alt="" />
                    </div>
                    <div className='filter_sidebar'>
                        <div className="filter_div">
                            <div className='my_filter_btn'>
                                <Button onClick={() => setIsOpen(!isOpen)}><img src={filter} alt="" /></Button>
                            </div>
                            <div className={isOpen ? "sidebar open" : "sidebar"}>
                                <div className="sidebar_title">
                                    <img onClick={() => setIsOpen(!isOpen)} src={Arrow} alt="" />
                                    <p>Filter & Show</p>
                                    <div></div>
                                </div>
                                <div className="sidebar_text1_div">
                                    <p>Position</p>
                                    <div className="sidebar_text1_btns_main">
                                        <button type='button'
                                            className={`${actives === 'SG' ? "active_btn" : ""}`}
                                            onClick={() => setActives("SG")}>SG</button>

                                        <button type='button'
                                            className={`${actives === 'SF' ? "active_btn" : ""}`}
                                            onClick={() => setActives("SF")}
                                        >SF</button>
                                        <button type='button'
                                            className={`${actives === 'PF' ? "active_btn" : ""}`}
                                            onClick={() => setActives("PF")}
                                        >PF</button>
                                        <button type='button'
                                            className={`${actives === 'C' ? "active_btn" : ""}`}
                                            onClick={() => setActives("C")}
                                        >C</button>
                                    </div>
                                </div>
                                <div className="sidebar_select_div">
                                    <select  className='form-select'>
                                        <option value="Select Location"  >Select Location</option>
                                        <option value="Chicago, IL">Chicago, IL</option>
                                    </select>
                                    <img src={Location} alt="" />
                                </div>
                                <div className="sidebar_range_">
                                    <div className="sidebar_range_text">
                                        <p>Distance range</p>
                                        <p>200 MI</p>
                                    </div>
                                    <div className="range">
                                        <input type="range" />
                                    </div>
                                </div>
                                <div className="sidebar_text1_div">
                                    <p>Class</p>
                                    <div className="sidebar_text1_btns_main">
                                        <button type='button'
                                            className={`${activesYear === '2021' ? "active_btn" : ""}`}
                                            onClick={() => setActivesYear("2021")}>2021</button>

                                        <button type='button'
                                            className={`${activesYear === '2022' ? "active_btn" : ""}`}
                                            onClick={() => setActivesYear("2022")}
                                        >2022</button>
                                        <button type='button'
                                            className={`${activesYear === '2023' ? "active_btn" : ""}`}
                                            onClick={() => setActivesYear("2023")}
                                        >2023</button>
                                        <button type='button'
                                            className={`${activesYear === '2024' ? "active_btn" : ""}`}
                                            onClick={() => setActivesYear("2024")}
                                        >2024</button>
                                    </div>
                                </div>
                                <div className="sidebar_text1_div">
                                    <p>Height</p>
                                    <div className="sidebar_text1_btns_main">
                                        <button type='button'
                                            className={`${activesHeight === 'AA' ? "active_btn" : ""}`}
                                            onClick={() => setActivesHeight("AA")}>5.2</button>

                                        <button type='button'
                                            className={`${activesHeight === 'BB' ? "active_btn" : ""}`}
                                            onClick={() => setActivesHeight("BB")}
                                        >5.5</button>
                                        <button type='button'
                                            className={`${activesHeight === 'CC' ? "active_btn" : ""}`}
                                            onClick={() => setActivesHeight("CC")}
                                        >6.0</button>
                                        <button type='button'
                                            className={`${activesHeight === 'DD' ? "active_btn" : ""}`}
                                            onClick={() => setActivesHeight("DD")}
                                        >6.5</button>
                                    </div>
                                </div>
                                <div className="sidebar_range_">
                                    <div className="sidebar_range_text">
                                        <p>Academic GPA</p>
                                        <p>2.0 - 3.5</p>
                                    </div>
                                    <div className="range">
                                        <input type="range" />
                                    </div>
                                </div>
                                <div className="sidebar_last_btn">
                                    <button type='button'>Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
 
                <div className="for_web_filters_main_div">
                    <div className='web_ford_flex'>
                        <div className="forweb_filter_text1_div">
                            <p>Position</p>
                            <div className="sidebar_text1_btns_main">
                                <button type='button'
                                    className={`${actives === 'SG' ? "active_btn" : ""}`}
                                    onClick={() => setActives("SG")}>SG</button>

                                <button type='button'
                                    className={`${actives === 'SF' ? "active_btn" : ""}`}
                                    onClick={() => setActives("SF")}
                                >SF</button>
                                <button type='button'
                                    className={`${actives === 'PF' ? "active_btn" : ""}`}
                                    onClick={() => setActives("PF")}
                                >PF</button>
                                <button type='button'
                                    className={`${actives === 'C' ? "active_btn" : ""}`}
                                    onClick={() => setActives("C")}
                                >C</button>
                            </div>
                        </div>
                        <div className="forweb_select_div">
                            <select name="" id="" className="form-select">
                                <option value="" disabled="">Select Location</option>
                                <option value="">Chicago, IL</option>
                            </select>
                            <img src={Location} alt="" />
                        </div>
                        <div className="forweb_range_">
                            <div className="forweb_range_text">
                                <p>Distance range</p>
                                <p>200 MI</p>
                            </div>
                            <div className="range">
                                <input type="range" />
                            </div>
                        </div>
                    </div>
                    <div className='web_ford_flex'>
                        <div className="forweb_filter_text1_div">
                            <p>Class</p>
                            <div className="sidebar_text1_btns_main">
                                <button type='button'
                                    className={`${activesYear === '2021' ? "active_btn" : ""}`}
                                    onClick={() => setActivesYear("2021")}>2021</button>

                                <button type='button'
                                    className={`${activesYear === '2022' ? "active_btn" : ""}`}
                                    onClick={() => setActivesYear("2022")}
                                >2022</button>
                                <button type='button'
                                    className={`${activesYear === '2023' ? "active_btn" : ""}`}
                                    onClick={() => setActivesYear("2023")}
                                >2023</button>
                                <button type='button'
                                    className={`${activesYear === '2024' ? "active_btn" : ""}`}
                                    onClick={() => setActivesYear("2024")}
                                >2024</button>
                            </div>
                        </div>
                        <div className="forweb_filter_text1_div">
                            <p>Height</p>
                            <div className="sidebar_text1_btns_main">
                                <button type='button'
                                    className={`${activesHeight === 'AA' ? "active_btn" : ""}`}
                                    onClick={() => setActivesHeight("AA")}>5.2</button>

                                <button type='button'
                                    className={`${activesHeight === 'BB' ? "active_btn" : ""}`}
                                    onClick={() => setActivesHeight("BB")}
                                >5.5</button>
                                <button type='button'
                                    className={`${activesHeight === 'CC' ? "active_btn" : ""}`}
                                    onClick={() => setActivesHeight("CC")}
                                >6.0</button>
                                <button type='button'
                                    className={`${activesHeight === 'DD' ? "active_btn" : ""}`}
                                    onClick={() => setActivesHeight("DD")}
                                >6.5</button>
                            </div>
                        </div>
                        <div className="forweb_range_">
                            <div className="forweb_range_text">
                                <p>Academic GPA</p>
                                <p>2.0 - 3.5</p>
                            </div>
                            <div className="range">
                                <input type="range" />
                            </div>
                        </div>
                    </div>

                    <div className="sidebar_last_btn"><button type="button">Apply</button></div>
                </div>
                <div className="profile_card_main">
                    <Row>
                        {profilesInfo.map((item, i) => (
                            <Col lg="4" md="4" sm="12" key={i}>
                                <div className="profile_card_main_div">
                                    <div className="profile_card_img">
                                        <img src={`${IMAGE_URL}/${item.image}`} alt="image" />
                                    </div>
                                    <div className="profile_card_text">
                                        <h3>{item.name}</h3>
                                        <p>Montverde academy</p>
                                        <h6>F  |  {item.height}  |  {item.weight} Ibs  |  {item.year}</h6>
                                    </div>
                                </div>
                            </Col>
                        ))}

                    </Row>
                </div>
            </Container>
            <Bar />
        </section>
    )
}

export default Searchplayers



// searchplayers