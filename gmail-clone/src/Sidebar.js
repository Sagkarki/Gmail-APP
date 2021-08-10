import React from 'react';
import {Button} from "@material-ui/core";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";

function Sidebar() {
    return(
        <div className ="Sidebar">
         <Button 
         startIcon = {<AddIcon fontSize = "large" 
         className = "sidebar_compose" />}> Compose
             </Button>
        </div>
  );  
}

export default Sidebar
