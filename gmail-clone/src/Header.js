import React from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import {IconButton} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Header() {
    return (
        <div className = "header">
            <div className="header_left">
                <IconButton>
                <MenuIcon />
                </IconButton>
                <img src ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fc.mi.com%2Fforum.php%3Fmod%3Dviewthread%26tid%3D2185833%26aid%3D4273335%26from%3Dalbum%26page%3D1&psig=AOvVaw2OoQwRkxKKkQlzjRXDMcye&ust=1628644441289000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNiHgb-jpfICFQAAAAAdAAAAABAJ" alt="" />
                    
            </div>
            <div className = "header_middle">
                <SearchIcon/>
                <input placeholder = "Search mail" type ="text" />
                <ArrowDropDownIcon className = "header_inputCaret" />

            </div>
             <div className="header_right">
            
        </div>
        </div>
    );
}

export default Header
