import React from 'react'
import Home from '../../assets/img/Home.svg';
import Search2 from '../../assets/img/Search2.svg';
import card_img from '../../assets/img/Cards.svg';
import Reels from '../../assets/img/Reels.svg';
import News from '../../assets/img/News.svg';
import { Link } from 'react-router-dom';
import './Bar.css'


const Bar = () => {
    return (
        <div className="bottom_bar_main_div">
            <Link to='/' className="bottom_bar_inner_div">
                <img src={Home} alt="" />
                <label htmlFor="">Home</label>
            </Link>
            <Link className="bottom_bar_inner_div">
                <img src={Search2} alt="" />
                <label htmlFor="">Search</label>
            </Link>
            <Link className="bottom_bar_inner_div">
                <img src={card_img} alt="" />
                <label htmlFor="">Cards</label>
            </Link>
            <Link className="bottom_bar_inner_div">
                <img src={Reels} alt="" />
                <label htmlFor="">Reels</label>
            </Link>
            <Link className="bottom_bar_inner_div">
                <img src={News} alt="" />
                <label htmlFor="">News</label>
            </Link>
        </div>
    )
}

export default Bar