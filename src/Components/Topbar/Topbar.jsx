import React from 'react'
import './Topsbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarwrapper">
            <div className="topleft">
                <span className='Logo'>Logo admin</span>
                </div>
            <div    className="topright">
                <div className="topbarIconContainer">
                    <NotificationsNoneIcon/>
                    <span className="topIconBag">3</span>
                </div>
                <div className="topbarIconContainer">
                    <LanguageIcon/>
                    <span className="topIconBag">3</span>
                </div>
                <div className="topbarIconContainer">
                    <SettingsIcon/>
                    
                </div>
                <img src="https://media.istockphoto.com/id/1087531642/vector/male-face-silhouette-or-icon-man-avatar-profile-unknown-or-anonymous-person-vector.jpg?s=612x612&w=0&k=20&c=FEppaMMfyIYV2HJ6Ty8tLmPL1GX6Tz9u9Y8SCRrkD-o=" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar