import React from 'react';
import {Button} from "@material-ui/core";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import SidebarOption from "./SidebarOption";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import Note from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
    return(
        <div className ="Sidebar">
         <Button 
         startIcon = {<AddIcon fontSize = "large" />}
         className = "sidebar_compose"> Compose
        </Button>

        <SidebarOption Icon ={InboxIcon} title ="Inbox" number={54} 
        selected={true}/>
        <SidebarOption Icon ={StarIcon} title ="Starred" number={54} />
        <SidebarOption Icon ={AccessTimeIcon} title ="Snoozed" number={54} />
        <SidebarOption Icon ={LabelImportantIcon} title ="Important" number={54} />
        <SidebarOption Icon ={NearMeIcon} title ="Sent" number={54} />
        <SidebarOption Icon ={Note} title ="Drafts" number={54} />
        <SidebarOption Icon ={ExpandMoreIcon} title ="More" number={54} />

        </div>
  );  
}

export default Sidebar
