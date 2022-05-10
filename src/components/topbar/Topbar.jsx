import React from 'react'
import "./topbar.css"
import {NotificationsNone ,Settings} from '@material-ui/icons';
export default function topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
               <span className="logo">Student-Eval</span>
          </div>
          <div className="topRight">
              <div className="topbarIconContainer">
                  <NotificationsNone/>
                  <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                  <Settings/>
                  <span className="topIconBadge">2</span>
              </div>
              <img src="https://th.bing.com/th/id/OIP.lQCNaWm1XReSnIPpeQXa5gHaFS?pid=ImgDet&rs=1" alt="" className='topAvatar'/>
          </div>
        </div>
    </div>
  )
}
