import React from 'react'

const ViewDetails = ({profileDAta,seasons,selectSeason,SortFunc}) => {


  return (
    <div>
       

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
                    {seasons ? <select className='form-select'
                        onChange={(e) => SortFunc(e.target.value)}>
                        {seasons?.map((item, i) => (
                            <option value={item?.season} key={i}>{item?.season}</option>
                        ))}
                    </select> : null}

                </div>
               
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
    </div>
  )
}

export default ViewDetails
