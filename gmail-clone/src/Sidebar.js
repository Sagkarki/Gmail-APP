import React from 'react';
import {Button} from "@material-ui/core";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import SidebarOption from "./SidebarOption";

function Sidebar() {
    return(
        <div className ="Sidebar">
         <Button 
         startIcon = {<AddIcon fontSize = "large" />}
         className = "sidebar_compose"> Compose
        </Button>

        <SidebarOption Icon ={InboxIcon}title ="Inbox" number={54} />
        </div>
  );  
}

export default Sidebar
