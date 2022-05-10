import "./sidebar.css"
import {LineStyle,Assessment,Summarize} from "@mui/icons-material"

export default function sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
           <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              
                  <li className="sidebarListItem active">
                      <LineStyle className="sidebarIcon"/>
                      Home
                  </li>
                  <li className="sidebarListItem">
                      <Summarize className="sidebarIcon"/>
                      Attendance
                  </li>
                  <li className="sidebarListItem">
                      <Assessment className="sidebarIcon"/>
                      Report
                  </li>
                  <li className="sidebarListItem">
                      <Assessment className="sidebarIcon"/>
                      Announcement
                  </li>
                  <li className="sidebarListItem">
                      <Assessment className="sidebarIcon"/>
                      My Class
                  </li>
                  
             </div>
        </div>
    </div>
  )
}
