import React from 'react'
import { Link } from 'react-router-dom'

const UserDetails = ({ profileDAta, seasons, setCreateTable, CreateTable, selectSeason,
    CreateSeasontTable, newSeason, setNewSeason, SortFunc }) => {


    return (
        <>
            <div className="video_tab_stat_card_body w-full mt-4">
                <h5>2023-24 SEASON STATS</h5>
                <div className="video_tab_stat_card_inner">
                    <div className='w-3/12'>
                        <p>PTS</p>
                        <h6>{profileDAta.PTS}</h6>
                    </div>
                    <div className='w-3/12'>
                        <p>REB</p>
                        <h6>{profileDAta.REB}</h6>
                    </div>
                    <div className='w-3/12'>
                        <p>AST</p>
                        <h6>{profileDAta.AST}</h6>
                    </div>
                    <div className='w-3/12'>
                        <p>FG%</p>
                        <h6>{profileDAta.FG}</h6>
                    </div>
                </div>
            </div>

            <div className="video_tab_aboutplayer_card_body">
                <label htmlFor="">{profileDAta.name || "Name"}</label>
                <p>{profileDAta.aboutPlayr}</p>
                <div className="video_tab_aboutplayer_card_inner">
                    <h6>Current Team</h6>
                    <h5>{profileDAta.currentTeam}</h5>
                </div>
                <div className="video_tab_aboutplayer_card_inner">
                    <h6>Club</h6>
                    <h5>{profileDAta.club}</h5>
                </div>
                <div className="video_tab_aboutplayer_card_inner">
                    <h6>Specialization</h6>
                    <h5>{profileDAta.speciality}</h5>
                </div>
            </div>
            <div className="video_tab_team_card_body">
                <label htmlFor="">TEAMS</label>
                <div className="video_tab_team_card_inner">
                    <h5>{profileDAta.club}</h5>
                    <p>Offensive Strategies  - {profileDAta.year} - Present</p>
                </div>
                <div className="video_tab_team_card_inner">
                    <h5>{profileDAta.university}</h5>
                    <p>Offensive Strategies  -{profileDAta?.year}</p>
                </div>
            </div>
            <div className="video_tab_career_card_body">

                <div className='video_career_title'>
                    {profileDAta.name ? <button className='border rounded py-1
                                     px-2 hover:bg-[#F8F9FF] text-[16px]'
                        onClick={() => setCreateTable(!CreateTable)}>CAREER TABLES</button> : null}
                    {seasons ? <select className='form-select'
                        onChange={(e) => SortFunc(e.target.value)}>
                        {seasons?.map((item, i) => (
                            <option value={item?.season} key={i}>{item?.season}</option>
                        ))}
                    </select> : null}

                </div>
                {CreateTable ? <div className='flex flex-col gap-2 mt-2'>
                    <div className='flex items-center flex-col md:flex-row gap-1'>
                        <input type="number" className='border rounded p-1 w-full md:w-4/12 outline-none' placeholder='year' value={newSeason.season} onChange={(e) => setNewSeason((prev) => ({ ...prev, season: e.target.value }))} />
                        <input type="text" className='border rounded p-1   w-full md:w-4/12 outline-none' placeholder='role' value={newSeason.role} onChange={(e) => setNewSeason((prev) => ({ ...prev, role: e.target.value }))} />
                        <input type="text" className='border rounded p-1  w-full md:w-4/12 outline-none' placeholder='team' value={newSeason.team} onChange={(e) => setNewSeason((prev) => ({ ...prev, team: e.target.value }))} />
                    </div>
                    <div className='flex items-center flex-col md:flex-row gap-1'>
                        <input type="text" className='border rounded p-1  w-full md:w-4/12 outline-none' placeholder='division' value={newSeason.city} onChange={(e) => setNewSeason((prev) => ({ ...prev, city: e.target.value }))} />
                        <input type="text" className='border rounded p-1   w-full md:w-4/12 outline-none' placeholder='result' value={newSeason.result} onChange={(e) => setNewSeason((prev) => ({ ...prev, result: e.target.value }))} />
                        <button className='border rounded py-1 px-2  w-full md:w-4/12 hover:bg-[#F8F9FF] text-[16px] capitalize' onClick={CreateSeasontTable}>add new record</button>
                    </div>
                </div> : null}
                <div className="video_tab_career_card_inner">
                    <h5>Season</h5>
                    <h6>{selectSeason?.season}</h6>
                </div>
                <div className="video_tab_career_card_inner">
                    <h5>Role</h5>
                    <h6>{selectSeason?.role}</h6>
                </div>
                <div className="video_tab_career_card_inner">
                    <h5>Team</h5>
                    <h6>{selectSeason?.team}</h6>
                </div>
                <div className="video_tab_career_card_inner">
                    <h5>Division</h5>
                    <h6>{selectSeason?.city}</h6>
                </div>
                <div className="video_tab_career_card_inner">
                    <h5>Result</h5>
                    <h6>{selectSeason?.result}</h6>
                </div>
            </div>
           
        </>
    )
}

export default UserDetails
